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
    },
    {
      id: uuid(),
      content: "Test task no 2",
      isDone: false,
      onDelete: deleteTask,
    },
  ];

  // estados
  // const [state, setState] = useState<type>(initial-value)
  const [tasks, setTasks] = useState<TaskProps[]>([...testTasks]);
  const [inputText, setInputText] = useState("");

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
    };

    setTasks([...tasks, newTask]);
  }

  function deleteTask(taskIdToDelete: string): void {
    const tasksFilteredById: TaskProps[] = tasks.filter((task) => {
      return task.id !== taskIdToDelete;
    });

    setTasks(tasksFilteredById);
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
            Tarefas Criadas<span>0</span>
          </p>
          <p>
            Concluídas<span>0 de 5</span>
          </p>
        </section>

        <section className={styles.taskListBody}>
          {
            // se map tiver tasks, monta cada <Task />
            // se não tiver tasks, retorna um <EmptyNotification />
            // se uma task for criada e não tiver tasks, monta cada <Task />
            // se uma task for criada e tiver tasks, monta a <Task />
            tasks.length > 0 ? (
              tasks.map((task: TaskProps) => {
                return (
                  <Task
                    key={task.id}
                    id={task.id}
                    content={task.content}
                    isDone={task.isDone}
                    onDelete={deleteTask}
                  />
                );
              })
            ) : (
              <EmptyNotification />
            )
          }
        </section>
      </div>
    </main>
  );
}
