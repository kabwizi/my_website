import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Message from "../component/Message";
import ImageMessage from "../component/ImageMessage";
import { IUser, useData } from "../SamsungS20Context";
import DateDivider from "../component/DateDivider";
import { motion } from "framer-motion";

function Chat() {
  const context = useData();

  const messageRef = useRef<HTMLInputElement>(null);
  const scrollDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollDiv.current?.scrollTo({
      behavior: "smooth",
      top: scrollDiv.current.scrollHeight,
      left: 0,
    });
  }, [context?.data.messagesList]);

  let allMessage: IUser[] | undefined = context?.data.messagesList.filter(
    (e) => e.fullName === context?.data.user?.fullName
  );

  let createTable = () => {
    if (allMessage && allMessage[0] && allMessage[0].messageList) {
      let children: JSX.Element[] = [];

      // Outer loop to create parent
      for (let i = 0; i < allMessage[0].messageList.length; i++) {
        //Inner loop to create children
        if (
          i - 1 < 0 ||
          allMessage[0].messageList[i].date.getDate() !==
            allMessage[0].messageList[i - 1].date.getDate()
        ) {
          children.push(
            <div key={i}>
              <DateDivider
                time={allMessage[0].messageList[i].date.toDateString()}
              />
            </div>
          );
        }
        children.push(
          allMessage[0].messageList[i].type === "MESSAGE" ? (
            <div key={allMessage[0].messageList[i].date.toUTCString()}>
              <Message
                text={allMessage[0].messageList[i].data}
                time={formatedDate(allMessage[0].messageList[i].date)}
                direction={
                  allMessage[0].messageList[i].user.fullName ==
                  context?.data.user?.fullName
                    ? "LEFT"
                    : "RIGHT"
                }
              />
            </div>
          ) : (
            <div key={allMessage[0].messageList[i].date.toDateString()}>
              <ImageMessage
                src={allMessage[0].messageList[i].data}
                time={formatedDate(allMessage[0].messageList[i].date)}
                direction={
                  allMessage[0].messageList[i].user.fullName ==
                  context?.data.user?.fullName
                    ? "LEFT"
                    : "RIGHT"
                }
              />
            </div>
          )
        );
      }
      return children;
    }
  };

  return (
    <motion.div
      initial={{ x: "100px" }}
      animate={{ x: "0px" }}
      className="relative h-full flex flex-col overflow-y-scroll"
    >
      <div ref={scrollDiv} className="h-full overflow-y-scroll">
        <div className="space-y-3 pt-4 px-2 pb-28">{createTable()}</div>
      </div>
      <div className="bg-white flex items-center gap-2 pt-2 pb-5 px-3 absolute bottom-0 left-0 right-0 shadow-2xl">
        <input
          ref={messageRef}
          className="w-full text-xs h-8 p-1 border-2 rounded-md border-purple-200 focus:border-purple-400 flex-1 outline-none"
          type="text"
          placeholder="Message"
        />
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="flex justify-center items-center"
        >
          <Image
            className="cursor-pointer"
            src="/devices/samsungS20/camera_purple.svg"
            width={23}
            height={23}
          />
          <input
            type="file"
            accept=".jpg, .png, .jpeg"
            className="opacity-50 w-6 absolute outline-none cursor-pointer inputTypeFileWithIcon"
            size={2}
            onChange={(e) => {
              if (e.target.files) {
                const url = URL.createObjectURL(e.target.files[0]);
                context?.dispatchData({
                  type: "ADD_IMAGE",
                  payload: {
                    user: context.data.user,
                    src: url,
                  },
                });
              }
            }}
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="relative w-6 h-6 cursor-pointer flex justify-center"
        >
          <Image
            onClick={() => {
              if (
                messageRef.current &&
                messageRef.current.value.trim() !== ""
              ) {
                context?.dispatchData({
                  type: "ADD_MESSAGE",
                  payload: {
                    user: context.data.user,
                    message: messageRef.current.value,
                  },
                });
                messageRef.current.value = "";
              }
            }}
            src="/devices/samsungS20/send_purple.svg"
            height={17}
            width={17}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

function formatedDate(date: Date) {
  if (date.getDate() == new Date().getDate()) {
    return date.toLocaleTimeString().slice(0, 5);
  } else {
    return (
      date.toDateString().slice(0, 3) +
      ", " +
      date.toLocaleTimeString().slice(0, 5)
    );
  }
}

export default Chat;
