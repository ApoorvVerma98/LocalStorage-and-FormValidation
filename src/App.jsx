import React from "react";
import HomePage from "./page/HomePage";
import ContactPage from "./page/ContactPage";
import TaskPage from "./page/TaskPage";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.app}>
      <HomePage />
      <hr className={styles.divider} />
      <ContactPage />
      <hr className={styles.divider} />
      <TaskPage />
    </div>
  );
};

export default App;
