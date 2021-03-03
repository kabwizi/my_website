import React from "react";

function DateDivider({ time }: { time: string }) {
  return (
    <div className="flex items-center">
      <div className="border-b border-gray-100 flex-1"></div>
      <div className="bg-purple-100 p-1 m-2 rounded-sm text-3xs">{time}</div>
      <div className="border-b border-gray-100 flex-1"></div>
    </div>
  );
}

export default DateDivider;
