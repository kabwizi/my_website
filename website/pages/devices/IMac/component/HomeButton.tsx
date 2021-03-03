import { motion } from "framer-motion";
import React from "react";
import { useData } from "../IMacContext";

function HomeButton({ textColor }: { textColor?: "WHITE" | "BLACK" }) {
  const context = useData();
  return (
    <div className="absolute text-3xs  bottom-12 left-3 font-bold">
      <p className={textColor === "WHITE" ? "text-white" : ""}>NIKE </p>
      <motion.div
        whileHover={{ scale: 1.05 }}
        onClick={() => {
          context?.dispatchData({
            type: "CHANGE_PAGE",
            payload: { page: 3 },
          });
        }}
        className="cursor-pointer  mt-1 w-24 text-center absolute bg-white  py-2"
      >
        <p>SHOP NOW</p>
      </motion.div>
    </div>
  );
}

export default HomeButton;
