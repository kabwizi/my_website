import React, { useState } from "react";
import Image from "next/image";
import MusicCard from "../component/MusicCard";
import Album from "../component/Album";
import { useData } from "../IPhone12Context";
import { motion } from "framer-motion";
import Style from "../../../../styles/scroller.module.css";

function Playlist() {
  const context = useData();
  const [search, setSearch] = useState("");

  const parentVariante = {
    init: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.1,
      },
    },
  };
  const childVariante = {
    init: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: "50px" }}
      animate={{ opacity: 1, x: "0px" }}
      className={`${Style.fireFoxThinNoScrollbar} relative h-full overflow-y-scroll overflow-x-hidden`}
    >
      <div className="bg-pink-200 bg-opacity-30 w-52 h-52 absolute -top-32 -right-20 rounded-full transform rotate-45"></div>
      <div className=" flex flex-col items-center flex-none">
        <div className="relative mt-2 w-40 h-40 overflow-hidden rounded-full shadow-xl">
          <Image
            src={context?.data.artist[context.data.track.artistIndex].src!}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div
          className={`flex pl-4 w-full ${Style.fireFoxThinNoScrollbar} overflow-x-scroll gap-2 py-2`}
        >
          {context?.data.artist[context.data.track.artistIndex].album.map(
            (e, albumIndex) => (
              <div key={e.title}>
                <Album album={e} albumIndex={albumIndex} isProfile={false} />
              </div>
            )
          )}
        </div>
      </div>
      <div className="px-3">
        <div className="flex rounded-full overflow-hidden shadow-md ">
          <div className="pl-3 pr-2 py-1">
            <Image
              src="/devices/iPhone12/search_gray.svg"
              height={20}
              width={20}
            />
          </div>
          <input
            onChange={(e) => setSearch(e.target.value)}
            className="w-full text-sm outline-none pb-1"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      <motion.div
        variants={parentVariante}
        initial="init"
        animate="visible"
        className=" mb-1  mt-4"
      >
        {search
          ? context?.data.artist[context.data.track.artistIndex].album[
              context.data.track.albumIndex
            ].musicList.map((e, musicIndex) => {
              if (
                e.title
                  .toLocaleLowerCase()
                  .startsWith(search.toLocaleLowerCase())
              ) {
                return (
                  <motion.div variants={childVariante} key={e.title}>
                    <MusicCard music={e} />
                  </motion.div>
                );
              }
            })
          : context?.data.artist[context.data.track.artistIndex].album[
              context.data.track.albumIndex
            ].musicList.map((e, musicIndex) => (
              <motion.div variants={childVariante} key={e.title}>
                <MusicCard music={e} />
              </motion.div>
            ))}
      </motion.div>
    </motion.div>
  );
}

export default Playlist;
