import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuid } from "uuid";
import { EmptyNotification } from "./EmptyNotification";
import { Task, TaskProps } from "./Task";
import styles from "./TaskManager.module.css";

export function TaskManager() {
  // testes
  const testTasks = [
    {
      id: uuid(),
      content: "Test task no 1",
      isDone: false,
      onDelete: deleteTask,
      onCheckboxChange: handleCheckboxChange,
    },
    {
      id: uuid(),
      content: "Test task no 2",
      isDone: true,
      onDelete: deleteTask,
      onCheckboxChange: handleCheckboxChange,
    },
  ];

  const tasksDone = testTasks.filter((task) => {
    if (task.isDone) return task;
  });

  // estados -> sintaxe: const [state, setState] = useState<type>(initial-value)
  const [tasks, setTasks] = useState<TaskProps[]>([...testTasks]);
  const [inputText, setInputText] = useState("");

  const [tasksDoneCount, setTasksDoneCount] = useState<number>(
    tasksDone.length
  );

  // handlers
  function handleNewInputText(event: ChangeEvent<HTMLInputElement>): void {
    setInputText(event.target.value);
  }

  function handleSubmitTask(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    const newTask: TaskProps = {
      id: uuid(),
      content: inputText,
      isDone: false,
      onDelete: deleteTask,
      onCheckboxChange: handleCheckboxChange,
    };
    setInputText("");
    setTasks([...tasks, newTask]);
    updateTasksDoneCount();
  }

  function handleCheckboxChange(taskId: string): void {
    // quando uma checkbox é marcada, preciso que o estado da task seja renovado, com o estado da checkbox novo
    const tasksWithUpdatedCheckbox = tasks.map((task) => {
      if (task.id === taskId) task.isDone = !task.isDone;
      return task;
    });

    setTasks(tasksWithUpdatedCheckbox);
    updateTasksDoneCount(tasksWithUpdatedCheckbox);
  }

  function updateTasksDoneCount(taskChanged?: TaskProps[]): void {
    let doneTasks: TaskProps[];
    if (taskChanged) doneTasks = taskChanged.filter((task) => task.isDone);
    else doneTasks = tasks.filter((task) => task.isDone);

    setTasksDoneCount(doneTasks.length);
  }

  function deleteTask(taskIdToDelete: string): void {
    const tasksFilteredById: TaskProps[] = tasks.filter((task) => {
      return task.id !== taskIdToDelete;
    });

    setTasks(tasksFilteredById);
    updateTasksDoneCount(tasksFilteredById);
  }

  return (
    <main className={styles.container}>
      <header className={styles.taskMaker}>
        <form onSubmit={handleSubmitTask}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={inputText}
            onChange={handleNewInputText}
            required
          />
          <button type="submit">
            Criar
            <PlusCircle
              size={16}
              weight={"bold"}
            />
          </button>
        </form>
      </header>

      <div className={styles.taskList}>
        <section className={styles.taskListHeader}>
          <p>
            Tarefas Criadas<span>{tasks.length}</span>
          </p>
          <p>
            Concluídas
            <span>
              {tasksDoneCount} de {tasks.length}
            </span>
          </p>
        </section>

        <section className={styles.taskListBody}>
          {
            //prettier-ignore
            tasks.length > 0 ?
              tasks.map((task: TaskProps) => 
                { return (
                    <Task
                      key={task.id}
                      id={task.id}
                      content={task.content}
                      isDone={task.isDone}
                      onDelete={deleteTask}
                      onCheckboxChange={handleCheckboxChange}
                    />
                  );
                })
            : <EmptyNotification />
          }
        </section>
      </div>
    </main>
  );
}
