import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./Post";

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
            content="Why should there be content?"
          />
          <Post
            author="Shakespeare"
            content="To be or not to be, or not to be, or not to be, or not to be, or not to be"
          />
        </main>
      </div>
    </div>
  );
}
