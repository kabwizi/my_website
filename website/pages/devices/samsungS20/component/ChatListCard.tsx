import React, { useEffect } from "react";
import Image from "next/image";
import { IMessage, IUser } from "../SamsungS20Context";
import { useData } from "../SamsungS20Context";
import { motion } from "framer-motion";

function ChatListCard({ data }: { data: IUser }) {
  const context = useData();

  let messageNotRead: IMessage[] | undefined;
  useEffect(() => {
    messageNotRead = data.messageList?.filter((e) => e.read === false);
  }, []);
  function formatedDate(date: Date) {
    if (date.getDate() === new Date().getDate()) {
      return date.toLocaleTimeString().slice(0, 5);
    } else {
      const value = `${date
        .toDateString()
        .slice(0, 3)}, ${date.toTimeString().slice(0, 5)}`;
      return value;
    }
  }

  return data ? (
    <motion.div
      whileHover={{ backgroundColor: "rgba(33,187,254,0.05)" }}
      onClick={() => {
        context?.dispatchData({
          type: "READ_ALL_MESSAGES",
          payload: { user: data },
        });
        context?.dispatchData({
          type: "CHANGE_PAGE",
          payload: { page: 2, user: data },
        });
      }}
      className="flex gap-2 cursor-pointer shadow-sm p-2"
    >
      <div className="relative w-12 h-12">
        <div className="relative w-12 h-12 rounded-full flex-none overflow-hidden">
          <Image src={data.src} layout="fill" objectFit="cover" />
        </div>
        <div
          className={`absolute bottom-1 left-1 w-2 h-2 rounded-full ${
            data.active
              ? "bg-SamsungS20Color-samsungS20Green"
              : "bg-SamsungS20Color-samsungS20Red"
          }`}
        ></div>
      </div>

      <div className="w-full flex flex-col justify-center">
        <h2 className="text-sm font-bold">{data.fullName}</h2>
        <p
          className={`text-2xs ${
            data.messageList &&
            data.messageList[data.messageList?.length - 1].read
              ? "text-gray-500"
              : "text-purple-500 "
          }`}
        >
          {data.messageList &&
          data.messageList[data.messageList?.length - 1].type === "MESSAGE"
            ? data.messageList[data.messageList?.length - 1].data.length > 30
              ? data.messageList[data.messageList?.length - 1].data.slice(
                  0,
                  30
                ) + "..."
              : data.messageList[data.messageList?.length - 1].data
            : "Image"}
        </p>
      </div>
      <div className="flex-none flex flex-col justify-around items-end">
        <p className="text-2xs text-gray-500">
          {data.messageList !== undefined
            ? formatedDate(data.messageList[data.messageList.length - 1].date)
            : null}
        </p>
        {messageNotRead && messageNotRead.length > 0 && messageNotRead ? (
          <div className="bg-purple-400 rounded-full text-3xs w-3 h3 text-white text-center">
            {messageNotRead.length.toString()}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </motion.div>
  ) : null;
}

export default ChatListCard;
