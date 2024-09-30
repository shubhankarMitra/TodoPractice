
import React from "react";

const TodoItem = ({ task, toggleTask, deleteTask }) => {
  return (
    <li>
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
        onClick={toggleTask}
      >
        {task.text}
      </span>
      <button onClick={deleteTask} style={{ marginLeft: "10px" }}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
