import React, { useRef } from "react";
import Image from "next/image";
import Button from "./Button";
import { motion } from "framer-motion";
import { useOnScreen } from "../../../../customHooks/CustomHooks";
import Navigation from "./Navigation";

function SectionIntro({
  serviceRef,
  PricingRef,
  contactRef,
  topContainerRef,
}: {
  serviceRef: React.MutableRefObject<HTMLDivElement | null>;
  PricingRef: React.MutableRefObject<HTMLDivElement | null>;
  contactRef: React.MutableRefObject<HTMLDivElement | null>;
  topContainerRef: React.MutableRefObject<HTMLDivElement | null>;
}) {
  const introBarIpadRef = useRef<HTMLDivElement | null>(null);
  const onScreen = useOnScreen(introBarIpadRef, "-200px");
  return (
    <div ref={topContainerRef} className="relative flex items-center">
      <Navigation
        serviceRef={serviceRef}
        PricingRef={PricingRef}
        contactRef={contactRef}
      />
      <div className="introBackground overflow-hidden ">
        <motion.div
          animate={{ scale: [1.05, 1] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="h-full  w-full "
        >
          <Image
            className="z-40"
            src="/devices/iPad/img/iPad_into_img.png"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
      </div>
      <div className="absolute text-white z-20 ml-5">
        <p className="strokText-white text-5xl">TAKE CONTROL</p>
        <p className="text-2xs">Mon premier objectif est votre satisfaction.</p>
        <div className="flex">
          <Button color="WHITE" label="GET IN TOUCH" contactRef={contactRef} />
        </div>
      </div>
      <div
        ref={introBarIpadRef}
        className="w-4/6 h-4/6 absolute -bottom-4 -z-10 overflow-hidden"
      >
        {onScreen ? (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 410 }}
            transition={{ duration: 1 }}
            className="relative "
          >
            <Image
              src="/devices/iPad/img/intro_bar_ipad.svg"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        ) : null}
      </div>
    </div>
  );
}

export default SectionIntro;
