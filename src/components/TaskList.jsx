import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, deleteTask, toggleCompletion }) => {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompletion={toggleCompletion}
        />
      ))}
    </ul>
  );
};

export default TaskList;
