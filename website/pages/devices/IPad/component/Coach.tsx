import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Coach({ img, title }: { img: string; title: string }) {
  return (
    <div className="relative text-center flex-1 w-full parentCoachContainer">
      <motion.div whileHover={{ scale: 1.12 }} className="relative h-80">
        <Image src={img} layout="fill" objectFit="cover" />
        <div className="childCoachSocialMedia bg-white m-4 absolute bottom-0 p-4 flex flex-col gap-4">
          <a
            href="https://www.facebook.com/"
            aria-label="Facebook"
            target="_black"
            rel="noopener"
          >
            <Image
              className="cursor-pointer"
              src="/devices/iPad/facebook_black.svg"
              width={16}
              height={16}
            />
          </a>

          <a
            href="https://www.instagram.com/"
            target="_black"
            aria-label="Instagram"
            rel="noopener"
          >
            <Image
              src="/devices/iPad/instagram_black.svg"
              width={16}
              height={16}
            />
          </a>
        </div>
      </motion.div>
      <div className="absolute bottom-2 flex justify-center w-full">
        <p className="strokText-white text-xl">{title}</p>
      </div>
    </div>
  );
}

export default Coach;
