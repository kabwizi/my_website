import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

function Button({ color }: { color: "RED" | "WHITE" }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex gap-2 mt-5 cursor-pointer parentButton"
    >
      <div
        className={`text-2xs font-bold px-8 py-4 flex-none shadow-lg ${
          color === "WHITE"
            ? "bg-white text-black"
            : "bg-yellow-500 bg-gradient-to-t from-red-400 text-white"
        }`}
      >
        LEARN MORE
      </div>
      <div
        className={`w-10 shadow-lg flex justify-center items-center ${
          color === "WHITE"
            ? "bg-white text-black"
            : "bg-yellow-500 bg-gradient-to-t from-red-400 text-white"
        }`}
      >
        {color === "WHITE" ? (
          <Image
            className="childButton"
            src="/devices/iPad/arrow_right_black.svg"
            width={10}
            height={10}
          />
        ) : (
          <Image
            className="childButton"
            src="/devices/iPad/arrow_right_white.svg"
            width={10}
            height={10}
          />
        )}
      </div>
    </motion.div>
  );
}

export default Button;
