import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function InstagramPicture() {
  return (
    <div className="px-5">
      <div className="flex items-center mt-20 mb-1">
        <div className="border-yellow-500 border-t flex-1"></div>
        <p className="text-3xs px-5">@titre</p>
        <div className=" border-yellow-500 border-t flex-1"></div>
      </div>
      <div className="flex">
        <InstagramImg img="/devices/macBookPro/img/macBookPro_instagram_1_img.png" />
        <InstagramImg img="/devices/macBookPro/img/macBookPro_instagram_2_img.png" />
        <InstagramImg img="/devices/macBookPro/img/macBookPro_instagram_3_img.png" />
        <InstagramImg img="/devices/macBookPro/img/macBookPro_instagram_4_img.png" />
        <InstagramImg img="/devices/macBookPro/img/macBookPro_instagram_5_img.png" />
        <InstagramImg img="/devices/macBookPro/img/macBookPro_instagram_6_img.png" />
      </div>
    </div>
  );
}

export function InstagramImg({ img }: { img: string }) {
  return (
    <div className="overflow-hidden">
      <motion.div whileHover={{ scale: 1.2 }} className="relative w-32 h-32">
        <Image src={img} layout="fill" objectFit="cover" />
        <motion.a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener"
          aria-label="Instagram image"
          initial={{ opacity: 0.5 }}
          whileHover={{ opacity: 0.1 }}
          className="bg-black absolute inset-0 flex justify-center items-center"
        >
          <Image
            src="/devices/macBookPro/instagram_white.svg"
            width={15}
            height={15}
          />
        </motion.a>
      </motion.div>
    </div>
  );
}

export default InstagramPicture;
