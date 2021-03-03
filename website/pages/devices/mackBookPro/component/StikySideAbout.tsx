import React, { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import SocialMedia from "./SocialMedia";
import Font from "../../../../styles/font.module.css";
import { useData } from "../MackBookProContext";

function StikySideAbout() {
  const subscibreRef = useRef<HTMLInputElement>(null);
  const [subscription, setSubscription] = useState(false);
  const context = useData();

  return (
    <div className="flex-none w-40">
      <div className="flex flex-col gap-5 sticky top-2">
        <div className="bg-white relative flex flex-col justify-center items-center space-y-2 border border-yellow-400 p-4">
          <h2 className="text-xs font-semibold absolute -top-2 bg-white w-14 text-center">
            About
          </h2>
          <div className="flex justify-center rounded-full overflow-hidden relative w-20 h-20">
            {context ? (
              <Image
                src={context.data.admin.src}
                layout="fill"
                objectFit="cover"
              />
            ) : null}
          </div>
          <p className={`${Font.userName} text-2xs font-semibold`}>
            {context?.data.admin.firstName} {context?.data.admin.lastName}
          </p>
          <p className="text-3xs text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna morbi
            nunc diam neque porttitor Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
        <div className="bg-white relative flex flex-col justify-center items-center space-y-2 border-2 border-gray-100 pt-1 pb-3 px-4">
          <h2 className="bg-white text-xs font-semibold absolute -top-2  w-28 text-center">
            Follow me on
          </h2>
          <SocialMedia />
        </div>
        <AnimateSharedLayout>
          <motion.div
            layout
            className="bg-yellow-100 bg-opacity-60 p-4 space-y-2"
          >
            <h2 className="text-xs font-semibold">Never Miss A Post!</h2>
            <p className="text-3xs text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna
              morbi nunc diam neque porttitor consectetur. Rutrum at donec nisi
              nisi, nunc platea risus augue.
            </p>
            <input
              ref={subscibreRef}
              onChange={() => {
                if (subscription) {
                  setSubscription(false);
                }
              }}
              className="border-2 border-gray-100 text-3xs w-full px-2 py-1 outline-none"
              type="text"
              placeholder="Your e-mail"
            />
            <AnimatePresence>
              {subscription ? (
                <motion.p
                  exit={{ opacity: 0 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-green-200 text-center text-3xs py-1 rounded-sm"
                >
                  Souscription effectué
                </motion.p>
              ) : null}
            </AnimatePresence>
            <motion.div
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                if (subscibreRef.current) subscibreRef.current.value = "";
                setSubscription(true);
              }}
              className="bg-yellow-500 cursor-pointer text-white text-center py-1 text-3xs shadow-md"
            >
              Subscribe
            </motion.div>
          </motion.div>
        </AnimateSharedLayout>
      </div>
    </div>
  );
}

export default StikySideAbout;
