import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, deleteTask, toggleTaskCompletion }) => {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompletion={toggleTaskCompletion}
          className="animate-slide-in" // Adding slide-in animation to each task
        />
      ))}
    </ul>
  );
};

export default TaskList;
