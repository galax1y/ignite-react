import {} from "phosphor-react";
import styles from "./Post.module.css";

export function Post(props) {
  return (
    <div className={styles.post}>
      <div className={styles.information}>
        <img
          className={styles.avatar}
          src="https://avatars.githubusercontent.com/u/50991688?v=4l"
          alt="Profile Image"
        />

        <div>
          <div className={styles.userinfo}>
            <strong>{props.author}</strong>
            <span>{props.job}</span>
          </div>
          <span>{props.createdAt}</span>
        </div>
      </div>

      <div className={styles.content}>
        <p>{props.content}</p>
      </div>
      <hr></hr>
      <div className={styles.comment}>
        <strong>Deixe seu feedback</strong>
        <textarea
          rows="3"
          placeholder="Escreva um comentário..."
        ></textarea>
        <a href="">Publicar</a>
      </div>
    </div>
  );
}
