import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { useData } from "../IMacContext";

function LogInContainer() {
  const context = useData();
  const emailRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (emailRef.current) emailRef.current.focus();
  }, []);

  return (
    <div className="fixed z-40 top-0 w-full flex justify-center items-center h-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-white flex flex-col gap-3 shadow-2xl w-96 px-10 py-6 text-center"
      >
        <div className="flex justify-end">
          <Image
            className="cursor-pointer"
            onClick={() =>
              context?.dispatchData({
                type: "CHANGE_SHOW_LOGIN",
                payload: { showLogin: false },
              })
            }
            src="/devices/iMac/cancel_black.svg"
            width={10}
            height={10}
          />
        </div>
        <h1 className="font-black text-6xl mb-4">SNKR</h1>
        <input
          ref={emailRef}
          className="border flex-1 text-xs px-4 py-2"
          type="text"
          placeholder="E-mail"
        />
        <input
          className="border flex-1 text-xs px-4 py-2"
          type="password"
          placeholder="password"
        />
        <div className="flex gap-2 items-center">
          <input type="checkbox" />
          <p className="text-2xs text-gray-500">
            Le lorem ipsum est, en imprimerie, une suite de mots sans.
          </p>
        </div>

        <p className="text-2xs text-gray-500">
          Le lorem ipsum est, en imprimerie, une suite de mots sans &nbsp;
          <span className="border-b text-black border-black">
            signification utilisée à
          </span>
          titre provisoire pour calibrer une mise en page, &nbsp;
          <span className="border-b text-black border-black">
            le texte définitif venant remplacer
          </span>
          le faux-texte dès.
        </p>
        <div className="bg-black mt-4 shadow text-white text-2xs text-center py-2 font-semibold">
          PAYMENT
        </div>
        <p className="text-2xs text-gray-500">
          Le lorem ipsum est, en imprimerie,&nbsp;
          <span className="border-b text-black border-black">
            une suite de.
          </span>
        </p>
      </motion.div>
    </div>
  );
}

export default LogInContainer;
