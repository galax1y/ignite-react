import { Trash } from "phosphor-react";
import styles from "./Task.module.css";

interface TaskProps {
  id: string;
  content: string;
  isDone: boolean;
}

export function Task({ id, content, isDone }: TaskProps) {
  return (
    <div className={styles.taskContent}>
      <div>
        <input type="checkbox" />
        <p>{content}</p>
      </div>

      <button>
        <Trash
          size={16}
          weight={"bold"}
        />
      </button>
    </div>
  );
}
