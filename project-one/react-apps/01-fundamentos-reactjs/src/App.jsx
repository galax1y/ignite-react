import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Lucas Galax1y"
            job="Full Stack Developer"
            content="Opa, estou aqui fazendo um teste para ver o que acontece quando a gente se esforça pra escrever qualquer coisa até terminar o espaço disponível na linha e com esperança, quebrar a linha do jeito que é pra ser de verdade, sabe? Será que já foi? Vou ver, um segundo."
            createdAt="Publicado há 1h"
          />

          <Post
            author="Shakespeare"
            job="Poet"
            content="To be or not to be, or not to be, or not to be, or not to be, or not to be"
            createdAt="Publicado há 2d"
          />
        </main>
      </div>
    </div>
  );
}
