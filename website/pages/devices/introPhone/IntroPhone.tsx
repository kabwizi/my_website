import { motion } from "framer-motion";
import React from "react";
import LeftMessage from "./component/LeftMessage";
import RightMessage from "./component/RightMessage";
import { useData } from "../../WebsiteMainContext";

function IntroPhone() {
  const context = useData();

  const parentVariant = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 2,
      },
    },
  };

  const childVariant = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    show: {
      y: 0,
      opacity: 1,
    },
  };

  const messageList = [
    <motion.div key="1" variants={childVariant}>
      <LeftMessage
        message={
          context?.data.language[context?.data.languageIndex]
            .sectionIntroPhoneAndWebsite.phone.message1!
        }
        time="11:13"
      />
    </motion.div>,
    <motion.div key="2" variants={childVariant}>
      <RightMessage
        message={
          context?.data.language[context?.data.languageIndex]
            .sectionIntroPhoneAndWebsite.phone.message2!
        }
        time="11:31"
      />
    </motion.div>,
    <motion.div key="3" variants={childVariant}>
      <LeftMessage
        message={
          context?.data.language[context?.data.languageIndex]
            .sectionIntroPhoneAndWebsite.phone.message3!
        }
        time="12:47"
      />
    </motion.div>,
    <motion.div key="4" variants={childVariant}>
      <LeftMessage
        message={
          context?.data.language[context?.data.languageIndex]
            .sectionIntroPhoneAndWebsite.phone.message4!
        }
        time="12:48"
      />
    </motion.div>,
    <motion.div key="" variants={childVariant}>
      <RightMessage
        message={
          context?.data.language[context?.data.languageIndex]
            .sectionIntroPhoneAndWebsite.phone.message5!
        }
        time="12:53"
      />
    </motion.div>,
  ];

  return (
    <div className="IntroPhone-container">
      <div className="camera-container">
        <div className="camera">
          <div className="camera-reflet"></div>
        </div>
      </div>
      <div className="IntroPhone p-2 shadow-2xl">
        <motion.div
          variants={parentVariant}
          initial="hidden"
          animate="show"
          className="mt-4 space-y-2"
        >
          {messageList.map((e, index) => e)}
        </motion.div>
      </div>
    </div>
  );
}

export default IntroPhone;
