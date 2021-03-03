import React from "react";

function Direction({ index, step }: { index: number; step: string }) {
  return (
    <div className="flex gap-2">
      <p className="text-yellow-500">{index + 1}</p>
      <p>{step}</p>
    </div>
  );
}

export default Direction;
