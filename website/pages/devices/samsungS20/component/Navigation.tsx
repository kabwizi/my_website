import React from "react";
import ChatList from "../pages/ChatList";
import Chat from "../pages/Chat";
import { useData } from "../SamsungS20Context";
import Profile from "../pages/Profile";
import StatusHeader from "../component/StatusHeader";
import Image from "next/image";
import { motion } from "framer-motion";
import TakePicture from "../pages/TakePicture";

function Navigation() {
  const context = useData();

  let appbar = [<ProfileAppBar />, <ChatListAppBar />, <ChatAppBar />];
  let pages = [<Profile />, <ChatList />, <Chat />, <TakePicture />];
  return (
    <div className="flex flex-col h-full w-full">
      <StatusHeader children={appbar[context?.data.currentPageIndex!]} />
      {pages[context?.data.currentPageIndex!]}
    </div>
  );
}

export function ProfileAppBar() {
  const context = useData();
  return (
    <div className="flex px-2 justify-center relative shadow-md pb-4 pt-2">
      <h1 className="font-bold text-white">Profil</h1>
      <motion.div whileHover={{ scale: 1.2 }} className="absolute left-2">
        <Image
          onClick={() =>
            context?.dispatchData({ type: "CHANGE_PAGE", payload: { page: 1 } })
          }
          className="cursor-pointer"
          src="/devices/samsungS20/arrow_left_white.svg"
          width={12}
          height={12}
        />
      </motion.div>
    </div>
  );
}

export function ChatListAppBar() {
  const context = useData();
  return (
    <div className="flex px-2 justify-center relative shadow-md pb-4 pt-2">
      <h1 className="font-bold text-white">Message</h1>
      <motion.div whileHover={{ scale: 1.2 }} className="absolute right-2">
        <Image
          onClick={() =>
            context?.dispatchData({ type: "CHANGE_PAGE", payload: { page: 0 } })
          }
          className="cursor-pointer"
          src="/devices/samsungS20/user_white.svg"
          width={14}
          height={14}
        />
      </motion.div>
    </div>
  );
}

export function ChatAppBar() {
  const context = useData();
  return (
    <div className="flex px-2 justify-between relative shadow-md pb-4 pt-2">
      <motion.div whileHover={{ scale: 1.2 }}>
        <Image
          onClick={() =>
            context?.dispatchData({ type: "CHANGE_PAGE", payload: { page: 1 } })
          }
          className="cursor-pointer"
          src="/devices/samsungS20/arrow_left_white.svg"
          width={12}
          height={12}
        />
      </motion.div>

      <div className="flex gap-1">
        {context && context.data.user ? (
          <Image
            onClick={() =>
              context.dispatchData({
                type: "CHANGE_PAGE",
                payload: { page: 1 },
              })
            }
            className="rounded-full"
            src={context.data.user.src}
            width={25}
            height={25}
          />
        ) : null}
        <div>
          <h2 className="text-2xs font-semibold">
            {context?.data.user?.fullName}
          </h2>
          <p className="text-3xs">
            {context?.data.user?.active ? "active" : "not active"}
          </p>
        </div>
      </div>
      <motion.div whileHover={{ scale: 1.2 }}>
        <Image
          onClick={() =>
            context?.dispatchData({ type: "CHANGE_PAGE", payload: { page: 0 } })
          }
          className="cursor-pointer"
          src="/devices/samsungS20/user_white.svg"
          width={14}
          height={14}
        />
      </motion.div>
    </div>
  );
}

export default Navigation;
