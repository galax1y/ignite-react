import styles from "./EmptyNotification.module.css";
import clipboardSVG from "../assets/Clipboard.svg";

export function EmptyNotification() {
  return (
    <div className={styles.emptyContainer}>
      <img src={clipboardSVG} />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <br></br>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  );
}
