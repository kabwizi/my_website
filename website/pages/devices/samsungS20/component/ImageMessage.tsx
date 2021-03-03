import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function ImageMessage({
  src,
  time,
  direction,
}: {
  src: string;
  time: string;
  direction: "LEFT" | "RIGHT";
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className={`flex w-full ${
        direction === "LEFT" ? "justify-start" : "justify-end"
      }`}
    >
      <motion.div
        animate={{
          boxShadow: "0px 0px 15px 1px rgba(0,0,0,0.05)",
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{
          scale: 1.6,
          x: direction === "LEFT" ? "58px" : "-58px",
          boxShadow: "1px 0px 10px 0px rgba(0,0,0,0.15)",
          zIndex: 10,
        }}
        className="relative cursor-pointer flex flex-col rounded-md overflow-hidden w-7/12 h-48"
      >
        {src && src.startsWith("/") ? (
          <Image src={src} layout="fill" objectFit="cover" />
        ) : (
          <img
            className="h-full w-full object-cover"
            src={src}
            alt="profile picture"
          />
        )}
        <p className="text-3xs absolute bottom-2 left-2 text-white">{time}</p>
      </motion.div>
    </motion.div>
  );
}

export default ImageMessage;
