import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

function Button({
  color,
  label,
  contactRef,
}: {
  color: "RED" | "WHITE";
  label: String;
  contactRef: React.MutableRefObject<HTMLDivElement | null>;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      onClick={() => {
        if (contactRef.current)
          contactRef.current.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest",
          });
      }}
      className="parentButton flex gap-2 mt-5 cursor-pointer"
    >
      <div
        className={`text-2xs font-bold px-8 py-4 flex-none shadow-lg ${
          color === "WHITE"
            ? "bg-white text-black"
            : "bg-yellow-500 bg-gradient-to-t from-red-400 text-white"
        }`}
      >
        {label}
      </div>
      <div
        className={`w-10 shadow-lg flex justify-center items-center ${
          color === "WHITE"
            ? "bg-white text-black"
            : "bg-yellow-500 bg-gradient-to-t from-red-400 text-white"
        }`}
      >
        <Image
          className="childButtonRigthAnimation"
          src={
            color === "WHITE"
              ? "/devices/iPad/arrow_right_black.svg"
              : "/devices/iPad/arrow_right_white.svg"
          }
          width={10}
          height={10}
        />
      </div>
    </motion.div>
  );
}

export default Button;
