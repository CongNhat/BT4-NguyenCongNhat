import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, deleteTask, editTask, updateTask, toggleTask, toggleSelectAll, setTasks }) => {
  const allTasksCompleted = tasks.every(task => task.completed);

  const deleteSelectedTasks = () => {
    const updatedTasks = tasks.filter(task => !task.completed);
    setTasks(updatedTasks);
  };

  return (
    <div>
      
      <ul className="list-group mt-3">
        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            deleteTask={() => deleteTask(index)}
            editTask={() => editTask(index)}
            updateTask={(newText) => updateTask(index, newText)}
            toggleTask={() => toggleTask(index)}
          />
        ))}
      </ul>
      <div className="d-flex justify-content-between align-items-center mt-3">
        
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            checked={allTasksCompleted}
            onChange={toggleSelectAll}
          />
          <label className="form-check-label">Select All</label>
        </div>
        <button className="btn btn-danger" onClick={deleteSelectedTasks}>
          Delete Selected
        </button>
      </div>
    </div>
  );
};

export default TaskList;
