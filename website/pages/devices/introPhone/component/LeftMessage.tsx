import React from "react";

function LeftMessage({ message, time }: { message: string; time: string }) {
  return (
    <div className="flex justify-start text-black">
      <div className="bg-white rounded-bl-2xl rounded-r-md px-3 py-1 flex flex-col shadow-lg messageMaxWidth">
        <p className="text-xs ">{message}</p>
        <p className="text-2xs text-gray-500 ">{time}</p>
      </div>
    </div>
  );
}

export default LeftMessage;
