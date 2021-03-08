import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import FingerprintSVG from "./FingerprintSVG";
import { useOnScreen } from "../../../../customHooks/CustomHooks";

function InAppPurchaseCard() {
  const inAppPurshaceDivRef = useRef<HTMLDivElement | null>(null);
  const onScreen = useOnScreen(inAppPurshaceDivRef, "0px 0px -500px 0px");
  return (
    <motion.div
      animate={{
        background: onScreen ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0)",
      }}
      ref={inAppPurshaceDivRef}
      className="bg-black bg-opacity-40 h-full flex items-end absolute inset-0"
    >
      {onScreen ? (
        <motion.div
          initial={{ scaleY: 0, originY: 1 }}
          animate={{
            scaleY: onScreen ? 1 : 0,
            originY: 1,
          }}
          transition={{ duration: 0.4 }}
          className="bg-white p-2 bg-opacity-90 w-full"
        >
          <div className="flex justify-between border-b pb-2">
            <p className="font-bold text-xs">App store</p>
            <p className="text-blue-600 text-xs">Cancel</p>
          </div>
          <div className="flex gap-2 mt-2 border-b pb-2">
            <div className="w-16 flex justify-end">
              <div className="flex-none relative w-10 h-10">
                <Image
                  className="rounded-lg"
                  src="/devices/iPhoneSE/img/app_restaurant_logo_img.png"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div>
              <p className="text-2xs font-bold">Find place</p>
              <p className="text-2xs">Find place inc.</p>
            </div>
          </div>
          <div className=" mt-2 flex border-b pb-2">
            <p className="text-gray-500 text-2xs w-16 text-right mr-2">
              RATING
            </p>
            <p className=" text-2xs">4+</p>
          </div>
          <div className="mt-2 flex border-b pb-2">
            <p className="text-gray-500 text-2xs  w-16 text-right mr-2">
              ACCOUNT
            </p>
            <p className=" text-2xs">TEST@GMAILCOM</p>
          </div>
          <div className="mt-2 flex justify-between  border-b pb-2">
            <p className="ml-16 pl-2 text-2xs">PAY APP STORE</p>
            <p className=" text-xs">$4.99</p>
          </div>
          <div className="mt-2 flex flex-col items-center">
            <motion.div className="flex-none relative w-10 h-10">
              <FingerprintSVG />
              {/**  <Image
                className="rounded-xl"
                src="/devices/iPhoneSE/fingerprint_red.svg"
                layout="fill"
            />*/}
            </motion.div>
            <p className="text-xs mt-1">Pay with Touch ID</p>
          </div>
        </motion.div>
      ) : null}
    </motion.div>
  );
}

export default InAppPurchaseCard;
