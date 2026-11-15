"use client";
import React, { useState } from "react";

const CounterPage = () => {
  const [count, setCount] = useState(0);
  // console.log("count the number", count);
  return (
    <div>
      <h2>Count ne number : {count}</h2>
      <button onClick={() => setCount(count + 1)} className="btn btn-primary">
        increment
      </button>
    </div>
  );
};

export default CounterPage;
