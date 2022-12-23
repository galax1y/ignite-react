import { PlusCircle } from "phosphor-react";
import { v4 as uuid } from "uuid";
import { EmptyNotification } from "./EmptyNotification";
import { Task } from "./Task";
import styles from "./TaskManager.module.css";

const tasks = [
  {
    id: uuid(),
    content: "Test task no 1",
    isDone: false,
  },
  {
    id: uuid(),
    content: "Test task no 2",
    isDone: false,
  },
];

export function TaskManager() {
  return (
    <main className={styles.container}>
      <header className={styles.taskMaker}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
        />
        <button>
          Criar{" "}
          <PlusCircle
            size={16}
            weight={"bold"}
          />
        </button>
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
          }
          <Task
            key={tasks[0].id}
            id={tasks[0].id}
            content={tasks[0].content}
            isDone={tasks[0].isDone}
          />
          <Task
            key={tasks[1].id}
            id={tasks[1].id}
            content={tasks[1].content}
            isDone={tasks[1].isDone}
          />
        </section>
      </div>
    </main>
  );
}
