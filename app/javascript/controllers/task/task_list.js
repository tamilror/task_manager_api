
import React from 'react';

const TaskList = ({ tasks, onUpdateStatus, onDeleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <span>Status: {task.status}</span>
            <button onClick={() => onUpdateStatus(task.id)}>
              Update Status
            </button>
            <button onClick={() => onDeleteTask(task.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
