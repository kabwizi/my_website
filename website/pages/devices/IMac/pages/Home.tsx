import React from "react";
import Image from "next/image";
import { useData } from "../IMacContext";
import IntroImage from "../component/IntroImage";
import HomeGridImg from "../component/HomeGridImg";
import HomeProductHoriizontalList from "../component/HomeProductHoriizontalList";
import HomeButton from "../component/HomeButton";
import { motion } from "framer-motion";

function Home() {
  const context = useData();

  return (
    <div className="flex-1 relative z-20">
      <IntroImage />
      <div className="px-5">
        {context ? (
          <>
            <HomeProductHoriizontalList
              label="New Trend"
              productList={context.data.product}
            />
            <HomeGridImg />
            <HomeProductHoriizontalList
              label="Fashion"
              productList={context?.data.product}
            />
          </>
        ) : null}

        <div className="homeImgBigCenter ">
          <Image
            src="/devices/iMac/img/home_img_big_center.png"
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
        {context ? (
          <HomeProductHoriizontalList
            label="Our favorite"
            productList={context?.data.product}
          />
        ) : null}

        <div className="flex gap-4 mt-20">
          <div className="homeImgRow">
            <Image
              src="/devices/iMac/img/home_img_row_left.png"
              layout="fill"
              objectFit="cover"
            />
            <HomeButton textColor="WHITE" />
          </div>
          <div className="homeImgRow">
            <Image
              src="/devices/iMac/img/home_img_row_right.png"
              layout="fill"
              objectFit="cover"
            />
            <HomeButton textColor="WHITE" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
