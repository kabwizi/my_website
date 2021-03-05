import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Footer({
  topContainerRef,
}: {
  topContainerRef: React.MutableRefObject<HTMLDivElement | null>;
}) {
  return (
    <div className="bg-black relative text-white mt-40">
      <motion.div
        onClick={() => {
          if (topContainerRef.current)
            topContainerRef.current.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
        }}
        className="parentButton bg-yellow-500 bg-gradient-to-t from-red-400 flex items-center justify-center w-9 h-9 absolute right-0 -top-4 cursor-pointer"
      >
        <Image
          className="childButtonTopAnimation "
          src="/devices/iPad/arrow_top_white.svg"
          width={12}
          height={12}
        />
      </motion.div>
      <div className="pl-5 py-10 pr-8 w-full">
        <div className="flex justify-between gap-5">
          <div>
            <div className="relative w-24 h-12">
              <Image src="/devices/iPad/logo_ipad.svg" layout="fill" />
            </div>
            <div className="text-2xs w-48 text-gray-300 ">
              Le lorem ipsum est, en imprimerie, une suite de mots sans
              signification utilisée à titre provisoire pour calibrer une mise
              en
            </div>
          </div>
          <div className="text-2xs space-y-2 flex-none w-36">
            <p className="font-semibold text-sm">CONTACT US</p>
            <div>
              <p className="font-bold ">Telephone</p>
              <a
                href="tel:+1819-456-7890"
                className="text-gray-300 cursor-pointer"
              >
                +1 (819) 442 2576
              </a>
            </div>
            <div>
              <p className="font-bold ">E-MAIL</p>
              <a href="mailto:info@gym.com" className="text-gray-300">
                info@gym.com
              </a>
            </div>
            <div>
              <p className="font-bold">Address</p>
              <a
                href="https://www.google.ca/maps/place/63+Rue+Isidore-Ostiguy,+Gatineau,+QC+J8X+3B7/@45.4341504,-75.7204965,17z/data=!3m1!4b1!4m5!3m4!1s0x4cce048d70916f23:0x37264010bd77d14c!8m2!3d45.4341504!4d-75.7183078"
                className="text-gray-300"
              >
                63 Rue Isidore-Ostiguy, Gatineau, QC J8X 3B7
              </a>
            </div>
          </div>
          <div className="text-2xs space-y-2 flex-none">
            <p className="font-semibold text-sm">WORKING HOURS</p>
            <div>
              <p className="font-bold">Monday - Friday</p>
              <p className="text-gray-300">08:00 - 21:30</p>
            </div>
            <div>
              <p className="font-bold">Saturday</p>
              <p className="text-gray-300">08:00 - 21:30</p>
            </div>
            <div>
              <p className="font-bold">Sunday</p>
              <p className="text-gray-300">Closed</p>
            </div>
          </div>
          <div className="text-2xs space-y-3 flex-none">
            <p className="font-semibold text-sm">SOCIAL MEDIA</p>
            <div>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-4"
              >
                <Image
                  src="/devices/iPad/facebook_white.svg"
                  width={14}
                  height={14}
                />
                <p className="text-white font-semibold text-2xs">Facebook</p>
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-4"
              >
                <Image
                  src="/devices/iPad/instagram_white.svg"
                  width={14}
                  height={14}
                />
                <p className="text-white font-semibold text-2xs">Instagram</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-yellow-500 bg-gradient-to-t from-red-400 text-white text-center py-3 text-2xs font-semibold mt-4">
        © 2019 TOUT DROIT RÉSERVÉ
      </div>
    </div>
  );
}

export default Footer;
