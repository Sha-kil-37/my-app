"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  //
  return (
    <div className="text-center mt-5">
      <p>{count}</p>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="px-4 py-1 bg-blue-500 rounded-xl cursor-pointer"
      >
        Click me
      </button>
    </div>
  );
}
