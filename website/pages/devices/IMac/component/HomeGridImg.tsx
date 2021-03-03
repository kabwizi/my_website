import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import HomeButton from "./HomeButton";
import { useData } from "../IMacContext";

function HomeGridImg() {
  const context = useData();

  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold">Walking shoes</h3>
      <div className="homeGridSection mt-4">
        <div className="homeGridSection-img-left-top relative">
          <Image
            src="/devices/iMac/img/home_img_grid_left_top.png"
            layout="fill"
            objectFit="cover"
          />
          <HomeButton />
        </div>
        <div className="homeGridSection-img-left-bottom relative">
          <Image
            src="/devices/iMac/img/home_img_grid_left_bottom.png"
            layout="fill"
            objectFit="cover"
          />
          <HomeButton />
        </div>
        <div className="homeGridSection-img-right relative">
          <Image
            src="/devices/iMac/img/home_img_grid_right.png"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute text-3xs  bottom-16 left-3 font-bold">
            <p>Our new comers</p>
            <p className="text-3xl font-black">NIKE </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                context?.dispatchData({
                  type: "CHANGE_PAGE",
                  payload: { page: 3 },
                });
              }}
              className="cursor-pointer mt-1 w-24 text-center absolute bg-white  py-2"
            >
              <p>SHOP NOW</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeGridImg;
