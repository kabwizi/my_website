import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useData } from "../IPhone12Context";
import Head from "next/head";
import { motion } from "framer-motion";

function Home() {
  const context = useData();
  const [slider, setSlider] = useState(0);
  const [audionCurrentDuration, setAudionCurrentDuration] = useState("00:00");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const likeSongIconRef = useRef<HTMLImageElement | null>(null);
  const playAndPauseBtnRef = useRef<HTMLImageElement | null>(null);
  let musicIndex: number =
    context && context.data.track.musicIndex
      ? context.data.track.musicIndex
      : 0;
  let albumIndex: number =
    context && context.data.track.albumIndex
      ? context.data.track.albumIndex
      : 0;
  let artistIndex: number =
    context && context.data.track.artistIndex
      ? context.data.track.artistIndex
      : 0;

  function convertToTime() {
    if (audioRef.current && !isNaN(audioRef.current.duration)) {
      const value = Number(audioRef.current.currentTime);
      setAudionCurrentDuration(
        String(Math.floor(value / 60)).padStart(2, "0") +
          ":" +
          String(value % 60 ? Math.floor(value % 60) : "00").padStart(2, "0")
      );
      setSlider(
        (audioRef.current.currentTime * 100) / audioRef.current.duration
      );

      if (
        context &&
        (audioRef.current.currentTime * 100) / audioRef.current.duration === 100
      ) {
        context.dispatchData({
          type: "CHANGE_AUTOPLAY",
          payload: { autoPlay: false },
        });
      }
    }
  }

  useEffect(() => {
    if (context && audioRef.current) {
      if (context.data.track.autoPlay) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }

    if (audioRef.current && context) {
      audioRef.current.volume = context.data.volume;

      audioRef.current.addEventListener("timeupdate", convertToTime, false);
    }

    return () => {
      audioRef.current?.removeEventListener("timeupdate", convertToTime, false);
    };
  }, [context && context.data.track, context && context.data.volume]);

  return (
    <motion.div
      initial={{ opacity: 0, x: "50px" }}
      animate={{ opacity: 1, x: "0px" }}
      className="flex flex-col h-full"
    >
      <Head>
        <link rel="shortcut icon" href="#" />
      </Head>
      <div className="flex-1 relative mx-2 my-2 flex items-center justify-center">
        <div className="relative z-10 w-52 h-52 rounded-full overflow-hidden shadow-xl">
          {context ? (
            <Image
              src={
                context.data.artist[context.data.track.artistIndex].album[
                  context.data.track.albumIndex
                ].musicList[context.data.track.musicIndex].src
              }
              layout="fill"
              objectFit="cover"
            />
          ) : null}
        </div>
        <motion.div
          animate={{ rotate: context?.data.track.autoPlay ? 405 : 45 }}
          transition={{
            duration: 2,
            repeat: context?.data.track.autoPlay ? Infinity : 0,
            repeatType: "reverse",
          }}
          className="bg-pink-300 bg-opacity-40 absolute w-60 h-40 rounded-full z-0"
        ></motion.div>
        <motion.div
          animate={{ rotate: context?.data.track.autoPlay ? 450 : 90 }}
          transition={{
            duration: 2,
            repeat: context?.data.track.autoPlay ? Infinity : 0,
            repeatType: "reverse",
          }}
          className="bg-pink-300 bg-opacity-40 absolute w-60 h-40 rounded-full z-0"
        ></motion.div>
        <motion.div
          animate={{ rotate: context?.data.track.autoPlay ? 540 : 180 }}
          transition={{
            duration: 2,
            repeat: context?.data.track.autoPlay ? Infinity : 0,
            repeatType: "reverse",
          }}
          className="bg-pink-300 bg-opacity-40 absolute w-60 h-40 rounded-full z-0 "
        ></motion.div>
        <div className="bg-black  border-4 border-gray-800 rounded-full w-8 h-8 absolute z-50"></div>
      </div>
      <div className="mx-2 flex justify-between">
        <div>
          <h1 className="font-bold text-sm">
            {
              context?.data.artist[context.data.track.artistIndex].album[
                context.data.track.albumIndex
              ].title
            }
          </h1>
          <p className="text-2xs text-gray-500">
            {
              context?.data.artist[context.data.track.artistIndex].album[
                context.data.track.albumIndex
              ].musicList[context.data.track.musicIndex].title
            }
          </p>
        </div>
        <div className="flex items-center gap-5">
          <motion.img
            whileHover={{ scale: 1.2 }}
            ref={likeSongIconRef}
            onClick={(e) => likeOrUnlikeSong()}
            className="cursor-pointer"
            src={
              context &&
              context.data.songLiked.filter(
                (e) =>
                  e.title ==
                  context.data.artist[context.data.track.artistIndex].album[
                    context.data.track.albumIndex
                  ].musicList[context.data.track.musicIndex].title
              ).length > 0
                ? "/devices/iPhone12/like_pink.svg"
                : "/devices/iPhone12/like_black.svg"
            }
            alt="like"
            height={20}
            width={20}
          />
        </div>
      </div>
      <div className="mx-2 py-5">
        <label htmlFor="rangeId">
          <input
            onChange={(e) => {
              setSlider(Number(e.target.value));
              if (audioRef.current) {
                audioRef.current.currentTime =
                  (Number(e.target.value) * Number(audioRef.current.duration)) /
                  100;
              }
            }}
            type="range"
            min="1"
            max="100"
            className="slider cursor-pointer"
            value={slider}
          />
        </label>

        {context && context.data.track.autoPlay ? (
          <audio
            autoPlay
            id="audio"
            ref={audioRef}
            src={
              context?.data.artist[context.data.track.artistIndex].album[
                context.data.track.albumIndex
              ].musicList[context.data.track.musicIndex].audio
            }
          ></audio>
        ) : (
          <audio
            id="audio"
            ref={audioRef}
            src={
              context?.data.artist[context.data.track.artistIndex].album[
                context.data.track.albumIndex
              ].musicList[context.data.track.musicIndex].audio
            }
          ></audio>
        )}

        <div className="flex justify-between text-3xs text-gray-500">
          <p>{audionCurrentDuration}</p>
          <p id="musicEndTime">
            {
              context?.data.artist[context.data.track.artistIndex].album[
                context.data.track.albumIndex
              ].musicList[context.data.track.musicIndex].duration
            }
          </p>
        </div>
      </div>
      <div className="mx-2 mb-10 flex items-center justify-around">
        <motion.div whileHover={{ scale: 1.2 }}>
          <Image
            onClick={() => {
              return context?.dispatchData({
                type: "CHANGE_PAGE",
                payload: { page: 0 },
              });
            }}
            alt="playlist"
            className="cursor-pointer"
            src="/devices/iPhone12/playlist_black.svg"
            height={14}
            width={14}
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }}>
          <Image
            onClick={() => removeXSecond()}
            className="cursor-pointer"
            src="/devices/iPhone12/backward_black.svg"
            height={16}
            width={16}
            alt="playlist"
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }}>
          <Image
            onClick={(e) => {
              previous();
            }}
            className="cursor-pointer"
            src="/devices/iPhone12/step_backward_black.svg"
            height={14}
            width={14}
            alt="backward"
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          id="playAndPauseBtnContainer"
          className={`bg-pink-300 bg-gradient-to-t from-pink-500 rounded-full flex justify-center items-center w-12 h-12 shadow-xl cursor-pointer ${
            context?.data.track.autoPlay ? "" : "pl-1 "
          }`}
        >
          <img
            ref={playAndPauseBtnRef}
            onClick={() => {
              context?.dispatchData({
                type: "CHANGE_AUTOPLAY",
                payload: { autoPlay: !context.data.track.autoPlay },
              });
            }}
            src={
              context?.data.track.autoPlay
                ? "/devices/iPhone12/pause_white.svg"
                : "/devices/iPhone12/play_white.svg"
            }
            alt="play"
            height={16}
            width={16}
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }}>
          <Image
            className="cursor-pointer"
            onClick={(e) => next()}
            src="/devices/iPhone12/skip_forward_black.svg"
            height={14}
            width={14}
            alt="forward"
          />
        </motion.div>

        <motion.div whileHover={{ scale: 1.2 }}>
          <Image
            onClick={() => addXSecond()}
            className="cursor-pointer"
            src="/devices/iPhone12/forward_black.svg"
            height={16}
            width={16}
            alt="forward"
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }}>
          <img
            onClick={() => repeat()}
            id="repeatButton"
            className="cursor-pointer"
            src="/devices/iPhone12/reapet_black.svg"
            height={14}
            width={14}
            alt="reapet"
          />
        </motion.div>
      </div>
    </motion.div>
  );

  /**==========allfunction============*/

  function previous() {
    if (context && context.data.track.musicIndex > 0) {
      context?.dispatchData({
        type: "CHANGE_MUSIC_TRACK",
        payload: {
          musicIndex: context.data.track.musicIndex - 1,
          albumIndex: context.data.track.albumIndex,
        },
      });
      context?.dispatchData({
        type: "CHANGE_AUTOPLAY",
        payload: { autoPlay: true },
      });
    }
  }

  function next() {
    if (
      context &&
      context.data.artist[context.data.track.artistIndex].album[
        context.data.track.albumIndex
      ].musicList.length -
        1 >
        context.data.track.musicIndex
    ) {
      context.dispatchData({
        type: "CHANGE_MUSIC_TRACK",
        payload: {
          musicIndex: context.data.track.musicIndex + 1,
          albumIndex: context.data.track.albumIndex,
        },
      });
      context.dispatchData({
        type: "CHANGE_AUTOPLAY",
        payload: { autoPlay: true },
      });
    }
  }

  function likeOrUnlikeSong() {
    if (
      context &&
      context.data.songLiked.filter(
        (e) =>
          e.title ===
          context.data.artist[artistIndex].album[albumIndex].musicList[
            musicIndex
          ].title
      ).length > 0
    ) {
      context?.dispatchData({
        type: "REMOVE_SONG_LIKED",
        payload: {
          music:
            context.data.artist[artistIndex].album[albumIndex].musicList[
              musicIndex
            ],
        },
      });
    } else {
      context?.dispatchData({
        type: "ADD_SONG_LIKED",
        payload: {
          music:
            context.data.artist[artistIndex].album[albumIndex].musicList[
              musicIndex
            ],
        },
      });
    }
  }

  function removeXSecond() {
    if (audioRef.current) {
      if (audioRef.current.currentTime - 20 > 0) {
        audioRef.current.currentTime = audioRef.current.currentTime -= 20;
      } else {
        audioRef.current.currentTime = 0;
      }
    }
  }

  function addXSecond() {
    if (audioRef.current) {
      if (audioRef.current.currentTime + 20 < audioRef.current?.duration) {
        audioRef.current.currentTime = audioRef.current.currentTime += 20;
      }
    }
  }

  function repeat() {
    let repeatButton: HTMLImageElement | null = document.getElementById(
      "repeatButton"
    ) as HTMLImageElement;
    if (audioRef.current && repeatButton) {
      if (audioRef.current.loop) {
        audioRef.current.loop = false;
        repeatButton.src = "/devices/iPhone12/reapet_black.svg";
      } else {
        audioRef.current.loop = true;
        repeatButton.src = "/devices/iPhone12/reapet_pink.svg";
      }
    }
  }
}

export default Home;
