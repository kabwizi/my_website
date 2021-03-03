import React from "react";
import Image from "next/image";
import Album from "../component/Album";
import MusicCard from "../component/MusicCard";
import { useData } from "../IPhone12Context";
import { motion } from "framer-motion";

function Profile() {
  const context = useData();

  return (
    <motion.div
      initial={{ opacity: 0, x: "50px" }}
      animate={{ opacity: 1, x: "0px" }}
      className="relative h-full overflow-y-scroll overflow-x-hidden"
    >
      <div className="bg-pink-200 bg-opacity-30 w-52 h-52 absolute -top-32 -right-20 rounded-full transform rotate-45"></div>
      <div className="mx-2 flex items-center gap-2  py-2">
        <motion.div className="relative shadow-lg rounded-full overflow-hidden h-20 w-20">
          <Image
            src="/devices/iPhone12/img/user.png"
            layout="fill"
            quality={70}
            objectFit="cover"
          />
        </motion.div>
        <div>
          <h1 className="font-bold">Laurena Karungi</h1>
          <p className="text-gray-500 text-sm">Jessica</p>
        </div>
      </div>
      <div className="ml-2 space-y-4 my-4">
        <h1 className="text-2xl font-bold">Album must hear</h1>
        <div className="flex w-full overflow-x-scroll gap-2 p-1">
          {context?.data.artist[context.data.track.artistIndex].album.map(
            (e, albumIndex) => (
              <motion.div key={e.title}>
                <Album album={e} albumIndex={albumIndex} isProfile={true} />
              </motion.div>
            )
          )}
        </div>
      </div>
      <div className="mx-2 space-y-4">
        <h1 className="text-2xl font-bold">Song liked</h1>
        <div className="space-y-2">
          {context && context.data.songLiked.length > 0 ? (
            context.data.songLiked.map((e, musicIndex) => (
              <div key={e.title}>
                <MusicCard music={e} musicIndex={musicIndex} />
              </div>
            ))
          ) : (
            <div className="bg-gray-50 h-44 w-full flex justify-center  items-center">
              <Image
                className="opacity-5"
                src="/devices/iPhone12/empty_song.svg"
                width={150}
                height={150}
              />
              <h2 className="absolute font-bold text-2xl text-gray-400">
                Like your first song
              </h2>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default Profile;
