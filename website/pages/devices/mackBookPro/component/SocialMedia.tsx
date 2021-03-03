import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

function SocialMedia() {
  return (
    <div className="flex items-center gap-2">
      <motion.div whileHover={{ scale: 1.1 }}>
        <Image
          className="cursor-pointer"
          src="/devices/macBookPro/instagram_black.svg"
          height={11}
          width={11}
        />
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }}>
        <Image
          className="cursor-pointer"
          src="/devices/macBookPro/youtube_black.svg"
          height={11}
          width={14}
        />
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }}>
        <Image
          className="cursor-pointer"
          src="/devices/macBookPro/facebook_black.svg"
          height={11}
          width={10}
        />
      </motion.div>
    </div>
  );
}

export default SocialMedia;
