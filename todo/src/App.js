import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TaskForm from './todo/TaskForm';
import TaskList from './todo/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [selectAll, setSelectAll] = useState(false);

  const handleNewTaskChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, editing: true } : task
    );
    setTasks(updatedTasks);
  };

  const updateTask = (index, newText) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, text: newText, editing: false } : task
    );
    setTasks(updatedTasks);
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const toggleSelectAll = () => {
    const updatedTasks = tasks.map((task) => ({ ...task, completed: !selectAll }));
    setTasks(updatedTasks);
    setSelectAll(!selectAll);
  };

  const deleteSelectedTasks = () => {
    const updatedTasks = tasks.filter(task => !task.completed);
    setTasks(updatedTasks);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Todo App</h1>
      <TaskForm
        newTask={newTask}
        handleNewTaskChange={handleNewTaskChange}
        addTask={addTask}
      />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        editTask={editTask}
        updateTask={updateTask}
        toggleTask={toggleTask}
        toggleSelectAll={toggleSelectAll}
        setTasks={setTasks}
      />
    </div>
  );
}

export default App;
