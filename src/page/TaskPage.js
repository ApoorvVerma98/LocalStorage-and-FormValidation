import React, { useState } from 'react';
import Button from '../button/Button';
import styles from './TaskPage.module.css';

const TaskPage = () => {
const [tasks, setTasks] = useState([]);
const [newTask, setNewTask] = useState('');

const addTask = () => {
if (newTask) {
setTasks((prevTasks) => [...prevTasks, newTask]);
setNewTask('');
}
};

const deleteTask = (index) => {
setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
};

const updateTask = (index, updatedTask) => {
setTasks((prevTasks) => prevTasks.map((task, i) => (i === index ? updatedTask : task)));
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
<Button onClick={addTask} className={styles.addButton}>Add Task</Button>
<ul className={styles.taskList}>
{tasks.map((task, index) => (
<li key={index} className={styles.taskItem}>
{task}
<Button onClick={() => deleteTask(index)} className={styles.deleteButton}>Delete</Button>
<Button onClick={() => updateTask(index, prompt('Enter the updated task:'))} className={styles.updateButton}>Update</Button>
</li>
))}
</ul>
</div>
);
};

export default TaskPage;