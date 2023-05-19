import React, { useState, useEffect } from "react";
import Button from "../button/Button";
import styles from "./TaskPage.module.css";

const TaskPage = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask) {
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: Date.now(), text: newTask }
      ]);
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const updateTask = (id, updatedText) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, text: updatedText } : task
      )
    );
  };

  return (
    <div className={styles.taskPage}>
      <h1>Task List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
        className={styles.taskInput}
      />
      <Button onClick={addTask} className={styles.addButton}>
        Add Task
      </Button>
      <ul className={styles.taskList}>
        {tasks.map((task) => (
          <li key={task.id} className={styles.taskItem}>
            {task.text}
            <Button
              onClick={() => deleteTask(task.id)}
              className={styles.deleteButton}
            >
              Delete
            </Button>
            <Button
              onClick={() =>
                updateTask(
                  task.id,
                  prompt("Enter the updated task:", task.text)
                )
              }
              className={styles.updateButton}
            >
              Update
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskPage;
