import React from "react";
import ChatListCard from "../component/ChatListCard";
import { useData } from "../SamsungS20Context";
import { motion } from "framer-motion";
import Style from "../../../../styles/scroller.module.css";

function ChatList() {
  const context = useData();

  const parentVariant = {
    init: { opacity: 0, y: "20px" },
    animate: {
      opacity: 1,
      y: "0px",
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.05,
        duration: 0.1,
      },
    },
  };

  const childVariant = {
    init: { opacity: 0, y: "20px" },
    animate: {
      opacity: 1,
      y: "0px",
    },
  };

  return (
    <motion.div
      initial={{ x: "100px" }}
      animate={{ x: "0px" }}
      className={`${Style.fireFoxThinNoScrollbar} h-full`}
    >
      <motion.div
        variants={parentVariant}
        initial="init"
        animate="animate"
        className={`pt-2 space-y-2 h-full pb-24`}
      >
        {context?.data.messagesList
          .sort((a, b) =>
            b.messageList && a.messageList
              ? b.messageList[b.messageList.length - 1].date.getTime() -
                a.messageList[a.messageList.length - 1].date.getTime()
              : 1
          )
          .map((e) => (
            <motion.div variants={childVariant} key={e.fullName}>
              <ChatListCard data={e} />
            </motion.div>
          ))}
      </motion.div>
    </motion.div>
  );
}

export default ChatList;
