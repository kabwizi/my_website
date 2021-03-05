import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

function SocialMedia() {
  return (
    <div className="flex items-center gap-2">
      <motion.a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener"
        aria-label="Instagram"
        whileHover={{ scale: 1.1 }}
      >
        <Image
          className="cursor-pointer"
          src="/devices/macBookPro/instagram_black.svg"
          height={11}
          width={11}
        />
      </motion.a>
      <motion.a
        href="https://www.youtube.com/"
        target="_blank"
        rel="noopener"
        aria-label="Youtube"
        whileHover={{ scale: 1.1 }}
      >
        <Image
          className="cursor-pointer"
          src="/devices/macBookPro/youtube_black.svg"
          height={11}
          width={14}
        />
      </motion.a>
      <motion.a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener"
        aria-label="Facebook"
        whileHover={{ scale: 1.1 }}
      >
        <Image
          className="cursor-pointer"
          src="/devices/macBookPro/facebook_black.svg"
          height={11}
          width={10}
        />
      </motion.a>
    </div>
  );
}

export default SocialMedia;
