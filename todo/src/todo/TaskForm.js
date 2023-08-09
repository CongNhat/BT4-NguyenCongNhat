import React from 'react';

const TaskForm = ({ newTask, handleNewTaskChange, addTask }) => {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter a new task..."
        value={newTask}
        onChange={handleNewTaskChange}
      />
      <button className="btn btn-primary" onClick={addTask}>
        Add Task
      </button>
    </div>
  );
};

export default TaskForm;
