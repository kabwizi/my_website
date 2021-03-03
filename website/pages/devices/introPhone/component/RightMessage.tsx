import React from "react";

function RightMessage({ message, time }: { message: string; time: string }) {
  return (
    <div className="flex justify-end text-white">
      <div className="bg-purple-500  rounded-br-2xl rounded-l-md px-3 py-1 flex flex-col shadow-lg messageMaxWidth">
        <p className="text-2xs">{message}</p>
        <p className="text-3xs  self-end">{time}</p>
      </div>
    </div>
  );
}

export default RightMessage;
