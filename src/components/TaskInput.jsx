import React, { useState } from "react";

const TaskInput = ({ addTask }) => {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(taskText);
    setTaskText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-center gap-2 mb-4"
    >
      <input
        type="text"
        placeholder="Add a task..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 sm:flex-1"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-6 py-3 rounded-md mt-3 sm:mt-0 sm:ml-3 hover:bg-blue-600 transition-all"
      >
        Add
      </button>
    </form>
  );
};

export default TaskInput;
