import { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(1500); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);
  const [isFinished, setIsFinished] = useState(false); // State to track timer completion

  useEffect(() => {
    let interval = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsFinished(true); // Set isFinished to true when time is up
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const formatTime = () => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const resetTimer = () => {
    setSeconds(1500);
    setIsActive(false);
    setIsFinished(false); // Reset finished state
  };

  return (
    <div className="mt-4 text-center">
      <h2 className="text-lg font-semibold">Pomodoro Timer</h2>
      <div
        className={`text-3xl font-bold my-2 ${
          isFinished ? "animate-pulse text-red-500" : ""
        }`}
      >
        {formatTime()}
      </div>
      <div className="flex justify-center gap-4">
        {/* Start / Pause Button */}
        <button
          onClick={() => setIsActive(!isActive)}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-all"
        >
          {isActive ? "Pause" : "Start"}
        </button>
        {/* Reset Button */}
        <button
          onClick={resetTimer}
          className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-all"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
