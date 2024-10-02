import React, { useState } from 'react';

const GroupingOptions = ({ onGroupChange, onOrderChange }) => {
  return (
    <div className="grouping-options">
      <label>
        Grouping:
        <select onChange={(e) => onGroupChange(e.target.value)}>
          <option value="status">Status</option>
          <option value="priority">Priority</option>
        </select>
      </label>
      <label>
        Ordering:
        <select onChange={(e) => onOrderChange(e.target.value)}>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </label>
    </div>
  );
};

export default GroupingOptions;
