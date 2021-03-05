import React from "react";
import Image from "next/image";
import { IAlbum } from "../IPhone12Context";
import { useData } from "../IPhone12Context";
import { motion } from "framer-motion";

function Album({
  album,
  albumIndex,
  isProfile,
}: {
  album: IAlbum;
  albumIndex: number;
  isProfile: boolean;
}) {
  const context = useData();

  return album ? (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="cursor-pointer"
      onClick={() => {
        if (!isProfile) {
          context?.dispatchData({
            type: "CHANGE_ALBUM_TRACK",
            payload: { albumIndex: albumIndex },
          });
        }
      }}
    >
      <div className="flex-none relative flex items-center justify-center w-28 h-28 overflow-hidden rounded-full shadow-md">
        <Image src={album.src} layout="fill" objectFit="cover" />
      </div>
      <div className="text-center">
        <p className="font-bold text-xs">{album.title}</p>
        <p className="text-gray-500 text-2xs">{album.date.getFullYear()}</p>
      </div>
    </motion.div>
  ) : null;
}

export default Album;
