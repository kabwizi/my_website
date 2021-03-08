import React from "react";
import { motion } from "framer-motion";
import { useData } from "../WebsiteMainContext";
import Image from "next/image";

function Navigation() {
  const context = useData();

  return (
    <nav className="screenMaxSize w-full relative h-16 flex justify-between items-center z-10">
      <Image
        src="/main/main_website_logo.svg"
        width={130}
        height={50}
        alt="website logo"
      />
      <div className="flex gap-2 flex-none text-sm">
        <motion.div
          whileHover={{ scale: 1.1 }}
          onClick={() =>
            context?.dispatch({
              type: "CHANGE_LANGUAGE",
              payload: { languageIndex: 0 },
            })
          }
          className={`${
            context?.data.languageIndex === 0
              ? "bg-gray-800 text-white"
              : "bg-white"
          } flex justify-center rounded-md shadow-xl cursor-pointer smallButtonSize  items-center font-bold`}
        >
          Fr
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          onClick={() =>
            context?.dispatch({
              type: "CHANGE_LANGUAGE",
              payload: { languageIndex: 1 },
            })
          }
          className={`${
            context?.data.languageIndex === 1
              ? "bg-gray-800  text-white"
              : "bg-white "
          } flex justify-center rounded-md shadow-xl cursor-pointer smallButtonSize  items-center font-bold`}
        >
          En
        </motion.div>
      </div>
    </nav>
  );
}

export default Navigation;
