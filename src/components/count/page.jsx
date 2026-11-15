"use client";
import React, { useState } from "react";

const CounterPage = () => {
  const [count, setCount] = useState(0);
  console.log("count the number", count);
  return (
    <div>
      <h2>Count ne number : {count}</h2>
      <button
        onClick={() => setCount(count + 1)}
        className="btn bg-green-400 p-2 rounded-xl text-black hover:cursor-pointer"
      >
        increment
      </button>
    </div>
  );
};

export default CounterPage;
