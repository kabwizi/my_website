import { motion } from "framer-motion";
import React from "react";

function PriceCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white shadow-lg cursor-pointer"
    >
      <div className="flex text-center flex-col gap-3 px-10 py-5">
        <h2 className="font-extrabold text-xl">BASIC PLAN</h2>
        <div className="flex items-end">
          <p className="bg-yellow-500 bg-gradient-to-t from-red-400 text-transparent bg-clip-text font-black text-6xl">
            $99
          </p>
          <p>/MONTH</p>
        </div>
        <div className="text-sm space-y-4 mt-2">
          <p>Weight Loss</p>
          <p>Free Hand</p>
          <p>Gym Fitness</p>
          <p>Personal Trainer</p>
        </div>
      </div>
      <div className="bg-yellow-500 bg-gradient-to-t from-red-400 text-center text-white font-bold py-2 text-sm">
        SELECT
      </div>
    </motion.div>
  );
}

export default PriceCard;
