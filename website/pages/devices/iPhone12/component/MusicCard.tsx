import React from "react";
import Image from "next/image";
import { IMusic } from "../IPhone12Context";
import { useData } from "../IPhone12Context";
import { motion } from "framer-motion";

function MusicCard({ music }: { music: IMusic }) {
  const context = useData();

  return music ? (
    <motion.div
      whileHover={{ backgroundColor: "rgba(249, 168, 212, 0.2)" }}
      className="flex items-center cursor-pointer mx-2 px-2 py-1 rounded-lg"
      onClick={() => {
        context?.dispatchData({
          type: "CHANGE_MUSIC_TRACK",
          payload: {
            musicIndex: music.musicIndex,
            albumIndex: music.albumIndex,
          },
        });
        context?.dispatchData({
          type: "CHANGE_AUTOPLAY",
          payload: { autoPlay: true },
        });
        context?.dispatchData({
          type: "CHANGE_PAGE",
          payload: { page: 1 },
        });
      }}
    >
      <div className="flex-none relative flex items-center justify-center w-14 h-14 overflow-hidden rounded-full shadow-md">
        {music ? (
          <Image src={music.src} layout="fill" objectFit="cover" />
        ) : null}
        <div className="bg-black bg-opacity-50 absolute z-10 rounded-full flex justify-center items-center  w-5 h-5 shadow-xl cursor-pointer">
          <Image src="/devices/iPhone12/play_white.svg" height={5} width={5} />
        </div>
      </div>
      <div className="flex-1 pl-2 bottom-0">
        <h1 className="text-xs font-bold">{music.title}</h1>
        <p className="text-3xs text-gray-500">
          {context?.data.artist[context.data.track.artistIndex].firstName}
          &nbsp;
          {context?.data.artist[context.data.track.artistIndex].lastName}
        </p>
      </div>
      <p className="text-3xs text-gray-500">{music.duration}</p>
    </motion.div>
  ) : null;
}

export default MusicCard;
