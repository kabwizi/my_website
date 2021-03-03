import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { useData } from "../MackBookProContext";

function LikeAndPrint() {
  const context = useData();

  return (
    <div className="flex justify-start gap-5 mt-2">
      <motion.div
        whileHover={{ scale: 1.1 }}
        onClick={() =>
          context?.dispatchData({
            type: "ADD_LIKE",
            payload: { recipe: context?.data.currentRecipe },
          })
        }
        className="bg-yellow-100 bg-opacity-80 cursor-pointer flex gap-2  px-2 py-1 rounded-sm"
      >
        <Image
          src="/devices/macBookPro/like_black.svg"
          height={10}
          width={10}
        />
        <p className="text-2xs">
          {
            context?.data.recipes.filter(
              (a) => a.title == context?.data.currentRecipe?.title
            )[0].like
          }
        </p>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        className=" bg-yellow-100 bg-opacity-80  flex gap-2 cursor-pointer px-2 py-1 rounded-sm"
      >
        <Image
          src="/devices/macBookPro/print_black.svg"
          height={10}
          width={10}
        />
        <p className="text-2xs">Print</p>
      </motion.div>
    </div>
  );
}

export default LikeAndPrint;
