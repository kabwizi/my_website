import React from "react";
import { motion } from "framer-motion";

function Message({
  text,
  time,
  direction,
}: {
  text: string;
  time: string;
  direction: "LEFT" | "RIGHT";
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      animate={{ opacity: 1 }}
      className={`flex w-full ${
        direction === "LEFT" ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className={`shadow-md flex flex-col px-3 rounded-md pt-1 pb-2 w-9/12 ${
          direction === "RIGHT" ? "bg-purple-300" : "bg-white-50"
        }`}
      >
        <p className="text-2xs  ">{text}</p>
        <p
          className={`text-3xs ${
            direction === "RIGHT" ? "text-white " : "text-gray-400"
          }`}
        >
          {time}
        </p>
      </div>
    </motion.div>
  );
}
export default Message;
