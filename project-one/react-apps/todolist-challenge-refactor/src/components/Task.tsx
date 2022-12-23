import { Trash } from "phosphor-react";
import { ChangeEvent, useState } from "react";
import styles from "./Task.module.css";

export interface TaskProps {
  id: string;
  content: string;
  isDone: boolean;
  onDelete: (id: string) => void;
  onCheckboxChange: (id: string) => void;
}

export function Task({
  id,
  content,
  isDone,
  onDelete,
  onCheckboxChange,
}: TaskProps) {
  function handleDeleteTask() {
    onDelete(id);
  }

  function handleCheck(event: ChangeEvent<HTMLInputElement>): void {
    onCheckboxChange(id);
  }

  return (
    <div className={styles.taskContent}>
      <div>
        <input
          type="checkbox"
          checked={isDone}
          onChange={handleCheck}
        />
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
