import React from "react";
import Image from "next/image";
import StatusHeader from "./StatusHeader";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Playlist from "../pages/Playlist";
import { useData } from "../IPhone12Context";
import { AnimatePresence, motion } from "framer-motion";

function Navigation() {
  const context = useData();

  const navigationItems: JSX.Element[] = [
    <PlaylistAppBar />,
    <HomeAppBar />,
    <ProfileAppBar />,
  ];

  const pages: JSX.Element[] = [<Playlist />, <Home />, <Profile />];

  return (
    <div className="relative flex flex-col h-full w-full">
      <StatusHeader
        children={navigationItems[context?.data.currentPageIndex!]}
      />
      <div className="overflow-hidden h-full">
        {pages[context?.data.currentPageIndex!]}
      </div>
      <AnimatePresence>
        {context?.data.showVolumeState ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white absolute h-24 w-3 shadow rounded-full overflow-hidden flex items-end left-2 top-44"
          >
            <motion.div
              animate={{ height: `${context.data.volume * 100}%` }}
              className="bg-pink-200 h-20 w-5 rounded-full"
            ></motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function HomeAppBar() {
  const context = useData();
  return (
    <div className="flex justify-center relative pt-3 pb-4 shadow-sm">
      <div className="text-center">
        <h1 className="font-bold">
          {context?.data.artist[context.data.track.artistIndex].firstName}
        </h1>
        <p className="text-2xs text-gray-500">
          {context?.data.artist[context.data.track.artistIndex].lastName}
        </p>
      </div>
      <motion.div whileHover={{ scale: 1.2 }} className="absolute right-2">
        <Image
          onClick={() => {
            return context?.dispatchData({
              type: "CHANGE_PAGE",
              payload: { page: 2 },
            });
          }}
          className="cursor-pointer"
          src="/devices/iPhone12/user_black.svg"
          height={12}
          width={12}
        />
      </motion.div>
    </div>
  );
}

export function ProfileAppBar() {
  const context = useData();
  return (
    <div className="flex justify-center relative pt-3 pb-4 shadow-sm">
      <div className="text-center">
        <h1 className="font-bold">Profile</h1>
      </div>
      <motion.div whileHover={{ scale: 1.2 }} className="absolute left-2">
        <Image
          onClick={() => {
            return context?.dispatchData({
              type: "CHANGE_PAGE",
              payload: { page: 1 },
            });
          }}
          className="cursor-pointer"
          src="/devices/iPhone12/arrow_left_black.svg"
          height={12}
          width={12}
        />
      </motion.div>
    </div>
  );
}
export function PlaylistAppBar() {
  const context = useData();

  return (
    <div className="flex justify-center relative pt-3 pb-4 shadow-sm">
      <motion.div whileHover={{ scale: 1.2 }} className="absolute left-2">
        <Image
          onClick={() => {
            return context?.dispatchData({
              type: "CHANGE_PAGE",
              payload: { page: 1 },
            });
          }}
          className="cursor-pointer"
          src="/devices/iPhone12/arrow_left_black.svg"
          height={12}
          width={12}
        />
      </motion.div>
      <div className="text-center">
        <h1 className="font-bold">
          {context?.data.artist[context.data.track.artistIndex].firstName}
        </h1>
        <p className="text-2xs text-gray-500">
          {context?.data.artist[context.data.track.artistIndex].lastName}
        </p>
      </div>

      <motion.div whileHover={{ scale: 1.2 }} className="absolute right-2">
        <Image
          onClick={() => {
            return context?.dispatchData({
              type: "CHANGE_PAGE",
              payload: { page: 2 },
            });
          }}
          className="cursor-pointer"
          src="/devices/iPhone12/user_black.svg"
          height={12}
          width={12}
        />
      </motion.div>
    </div>
  );
}

export default Navigation;
