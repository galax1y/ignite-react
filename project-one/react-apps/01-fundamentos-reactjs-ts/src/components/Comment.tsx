import styles from "./Comment.module.css";
import { Trash, ThumbsUp } from "phosphor-react";
import { Avatar } from "./Avatar";
import { useState } from "react";

/*
comment = {
  author: str,
  content: str,
  publishetAt: Date,
}
*/

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    // boa prática pra atualizar valores que dependam do seu estado anterior
    setLikeCount((state) => {
      return state + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/galax1y.png"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.AuthorAndTime}>
              <strong>Lucas Galax1y</strong>
              <time
                title="21 de Dezembro às 08:34h"
                dateTime="2022-21-12 08:34:19"
              >
                Publicado há 1h
              </time>
            </div>

            <button
              onClick={handleDeleteComment}
              title="Deletar comentário"
            >
              <Trash size={20} />
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
