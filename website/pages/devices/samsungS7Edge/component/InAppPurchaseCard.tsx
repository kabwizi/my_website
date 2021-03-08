import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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
          className="bg-white p-2 w-full px-4"
        >
          <div className="flex justify-between border-b pb-2">
            <p className="font-semibold text-xs text-gray-600">Google Play</p>
          </div>
          <div className="flex gap-3  border-b py-3 font-semibold">
            <div className="flex justify-end">
              <div className="flex-none relative w-10 h-10">
                <Image
                  className="rounded-lg"
                  src="/devices/samsungS7Edge/img/app_music_img.png"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="flex justify-between w-full mt-1">
              <p className="text-xs">Nadoré</p>
              <p className="text-xs">1,64 $ CA</p>
            </div>
          </div>
          <div className="flex justify-between border-b py-2">
            <div className="flex">
              <div className="flex gap-1 items-center">
                <Image
                  className="rounded-xl"
                  src="/devices/samsungS7Edge/google.svg"
                  width={10}
                  height={10}
                />
                <p className="text-gray-500 text-2xs text-right mr-2">Pay</p>
              </div>
              <p className=" text-2xs">Visa-4685</p>
            </div>
            <Image
              className="rounded-xl"
              src="/devices/samsungS7Edge/big_arrow_right_gray.svg"
              width={5}
              height={5}
            />
          </div>
          <div className="py-2">
            <p className="text-3xs text-gray-600">
              Le lorem ipsum est, en imprimerie, une suite de mots sans
              signification utilisée à titre provisoire pour
              <span className="underline pl-1">
                calibrer une mise en page, le texte définitif venant remplacer.
              </span>
            </p>
            <p className="text-3xs text-gray-600">
              Le lorem ipsum est, en imprimerie, une suite de mots sans
              signification utilisée à titre provisoire pour calibrer une mise
              en page, le texte définitif venant remplacer
            </p>
          </div>
          <div className="bg-green-700 text-white text-center rounded text-2xs py-2 mt-2">
            Achat en 1 clic
          </div>
        </motion.div>
      ) : null}
    </motion.div>
  );
}

export default InAppPurchaseCard;
