import React, { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Timer from "./components/Timer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    if (!text.trim()) {
      toast.error("Task cannot be empty!");
      return;
    }
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
      priority: "Low",
    };
    setTasks([...tasks, newTask]);
    toast.success("Task Added!");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    toast.info("Task Deleted!");
  };

  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const clearAllTasks = () => {
    setTasks([]);
    toast.success("All Tasks Cleared!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 font-poppins">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-blue-500 mb-4 text-center">
          🚀 Awesome To-Do App
        </h1>
        <TaskInput addTask={addTask} />
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
        />
        <button
          onClick={clearAllTasks}
          className="w-full mt-4 bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition-all"
        >
          Clear All Tasks
        </button>
        <Timer />
        <ToastContainer position="bottom-right" />
      </div>
    </div>
  );
}

export default App;
