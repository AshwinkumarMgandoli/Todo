import React, { useState, useEffect } from "react";

const Timer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          clearInterval(interval);
          setIsActive(false);
          alert("Pomodoro Completed!");
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, minutes]);

  const startTimer = () => {
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setMinutes(25);
    setSeconds(0);
    setIsActive(false);
  };

  return (
    <div className="mt-6 text-center">
      <h2 className="text-xl font-semibold text-blue-500">Pomodoro Timer</h2>
      <div className="text-6xl font-bold mt-4">
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </div>
      <div className="mt-4 space-x-4">
        <button
          onClick={startTimer}
          className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition-all"
        >
          Start
        </button>
        <button
          onClick={stopTimer}
          className="bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-600 transition-all"
        >
          Stop
        </button>
        <button
          onClick={resetTimer}
          className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition-all"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
