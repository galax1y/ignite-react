import { useState } from "react";
import reactLogo from "./assets/rocket.svg";
import "./App.module.css";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { TaskManager } from "./components/TaskManager";

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className={styles.wrapper}>
        <TaskManager />
      </div>
    </div>
  );
}

export default App;
