import React from "react";

const TaskItem = ({ task, deleteTask, toggleCompletion }) => {
  return (
    <li
      className={`flex items-center justify-between p-2 rounded-md bg-gray-100 shadow-sm ${
        task.completed ? "opacity-70 line-through" : ""
      } animate-slide-in transition-opacity`}
    >
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleCompletion(task.id)}
          className="w-5 h-5 text-blue-500"
        />
        <span className="text-gray-700">{task.text}</span>
      </div>
      <button
        onClick={() => deleteTask(task.id)}
        className="text-red-500 hover:text-red-700 transition-all"
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
