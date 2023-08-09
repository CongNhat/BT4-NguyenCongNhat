import React from 'react';

const Task = ({ task, deleteTask, editTask, updateTask, toggleTask }) => {
  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-center ${
        task.completed ? 'completed' : ''
      }`}
    >
      {/* Checkbox */}
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          checked={task.completed}
          onChange={toggleTask}
        />
      </div>
      {/* Task text or input */}
      {task.editing ? (
        <input
          type="text"
          className="form-control"
          value={task.text}
          onChange={(e) => updateTask(e.target.value)}
          onBlur={updateTask}
          autoFocus
        />
      ) : (
        <div className="task-text">{task.text}</div>
      )}
      {/* Actions */}
      <div>
        {task.editing ? (
          <button className="btn btn-success" onClick={updateTask}>
            Save
          </button>
        ) : (
          <>
            <button className="btn btn-primary" onClick={editTask}>
              Edit
            </button>
            <button className="btn btn-danger ms-2" onClick={deleteTask}>
              Delete
            </button>
          </>
        )}
      </div>
    </li>
  );
};

export default Task;
