import { Trash } from "phosphor-react";
import styles from "./Task.module.css";

export interface TaskProps {
  id: string;
  content: string;
  isDone: boolean;
  onDelete: (id: string) => void;
}

export function Task({ id, content, isDone, onDelete }: TaskProps) {
  function handleDeleteTask() {
    onDelete(id);
  }

  return (
    <div className={styles.taskContent}>
      <div>
        <input type="checkbox" />
        <p>{content}</p>
      </div>

      <button onClick={handleDeleteTask}>
        <Trash
          size={16}
          weight={"bold"}
        />
      </button>
    </div>
  );
}
