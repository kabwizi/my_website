import { motion } from "framer-motion";
import React, { useEffect } from "react";
import style from "../../../styles/scroller.module.css";
import UseMe from "../../component/UseMe";
import Navigation from "./component/Navigation";
import { useData } from "./IPhone12Context";

function IPhone12() {
  const context = useData();

  useEffect(() => {
    const intervale = setTimeout(() => {
      context?.dispatchData({
        type: "CHANGE_SHOW_VOLUME_STATE",
        payload: { showVolumeState: false },
      });
    }, 3000);
    return () => {
      clearInterval(intervale);
    };
  }, [context && context.data.volume]);

  return (
    <div className={`relative iPh12 ${style.noScrollbar}`}>
      <UseMe
        direction="RIGHT"
        position="-top-8 -right-28"
        textColor="text-white"
        bgColor="bg-pink-400 bg-opacity-50"
      />
      <div className="iPh12-screen select-none">
        <Navigation />
      </div>
      <div className="iPh12-notch">
        <div className="iPh12-micro"></div>
        <div className="iPh12-camera">
          <div className="iPh12-camera-reflet"></div>
        </div>
      </div>
      <div className="iPh12-rBtn"></div>
      <div className="iPh12-btn iPh12-lBtn1 relative"></div>
      <motion.div
        whileTap={{ x: 1 }}
        onClick={() => {
          if (context)
            context.dispatchData({ type: "ADD_VOLUME", payload: {} });
        }}
        className="iPh12-btn iPh12-lBtn2 select-none"
      >
        <motion.div
          whileHover={{
            scale: 1.1,
            backgroundColor: "#FEF1F8",
            paddingBottom: "3px",
          }}
          className="absolute cursor-pointer -left-14 bg-white rounded-full shadow w-10 h-10 flex justify-center items-center  font-bold"
        >
          +
        </motion.div>
      </motion.div>
      <motion.div
        whileTap={{ x: 1 }}
        onClick={() => {
          if (context)
            context.dispatchData({ type: "REDUCE_VOLUME", payload: {} });
        }}
        className="iPh12-btn iPh12-lBtn3 select-none"
      >
        <motion.div
          whileHover={{
            scale: 1.1,
            backgroundColor: "#FEF1F8",
            paddingBottom: "3px",
          }}
          className="absolute cursor-pointer -left-14 bg-white rounded-full shadow w-10 h-10 flex justify-center items-center font-bold"
        >
          -
        </motion.div>
      </motion.div>
    </div>
  );
}

export default IPhone12;
