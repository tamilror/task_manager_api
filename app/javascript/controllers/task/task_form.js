
import React, { useState } from 'react';

const TaskForm = ({ onCreateTask, tasks }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('To Do');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (status === 'To Do' && getToDoTasksPercentage() >= 50) {
      setError('Cannot create new "To Do" task. Limit reached.');
      return;
    }
    if (!title.trim()) {
      setError('Title cannot be empty');
      return;
    }
    onCreateTask({ title, description, status });
    setTitle('');
    setDescription('');
    setStatus('To Do');
    setError('');
  };

  const getToDoTasksPercentage = () => {
    const todoTasks = tasks.filter(task => task.status === 'To Do');
    return (todoTasks.length / tasks.length) * 100;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      <button type="submit">Add Task</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default TaskForm;
