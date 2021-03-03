import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Pagination() {
  return (
    <div className="flex justify-center text-2xs mt-20">
      <motion.div
        whileHover={{ scale: 1.6 }}
        className="w-12 flex justify-center cursor-pointer"
      >
        <Image
          src="/devices/macBookPro/arrow_left_black.svg"
          height={7}
          width={7}
        />
      </motion.div>
      <motion.p
        whileHover={{ scale: 1.6 }}
        className="cursor-pointer w-10 text-center"
      >
        1
      </motion.p>
      <motion.p
        whileHover={{ scale: 1.6 }}
        className="cursor-pointer w-10 text-center"
      >
        2
      </motion.p>
      <motion.p
        whileHover={{ scale: 1.6 }}
        className="cursor-pointer w-10 text-center"
      >
        3
      </motion.p>
      <motion.p
        whileHover={{ scale: 1.6 }}
        className="cursor-pointer w-10 text-center"
      >
        ...
      </motion.p>
      <motion.div
        whileHover={{ scale: 1.6 }}
        className="w-12 flex justify-center cursor-pointer"
      >
        <Image
          src="/devices/macBookPro/arrow_rigth_black.svg"
          height={7}
          width={7}
        />
      </motion.div>
    </div>
  );
}

export default Pagination;
