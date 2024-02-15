
import React from 'react';

const TaskFilter = ({ onChangeFilter }) => {
  const handleFilterChange = (e) => {
    onChangeFilter(e.target.value);
  };

  return (
    <select onChange={handleFilterChange}>
      <option value="all">All</option>
      <option value="To Do">To Do</option>
      <option value="In Progress">In Progress</option>
      <option value="Done">Done</option>
    </select>
  );
};

export default TaskFilter;
