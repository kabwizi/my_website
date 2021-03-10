import React from "react";
import Image from "next/image";
import MenuCard from "../component/MenuCard";
import { useData } from "../SamsungS20UContext";
import { motion } from "framer-motion";
import Style from "../../../../styles/scroller.module.css";

function Profile() {
  const context = useData();

  return (
    <div
      className={`${Style.fireFoxThinNoScrollbar} flex-1 px-2 overflow-y-scroll `}
    >
      <div className="flex justify-center text-center my-4">
        <div>
          <motion.div
            whileTap={{ scale: 1.5, y: "45px" }}
            className="${Style.fireFoxThinNoScrollbar} cursor-pointer relative h-40 w-36 rounded-lg shadow-lg overflow-hidden mb-2"
          >
            <Image
              src="/devices/samsungS20U/img/user.png"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
          <h1 className="font-bold text-sm">Ana</h1>
          <p className="text-2xs ">Gouchi Pou</p>
        </div>
      </div>
      <div>
        <h1 className="pb-2 font-black text-2xl">Past purshace</h1>
        <div className="space-y-3 pb-10">
          {context?.data.pastPurchase.length! > 0 ? (
            context?.data.pastPurchase.map((e, index) => (
              <div key={index}>
                <MenuCard menu={e} />
              </div>
            ))
          ) : (
            <div className="relative bg-gray-50 h-60 px-5 flex justify-center items-center">
              <div className="absolute opacity-5">
                <Image
                  src="/devices/samsungS20U/dish_black.svg"
                  width={200}
                  height={200}
                />
              </div>
              <p className="relative text-gray-400 text-xl font-bold">
                Fait votre premier achat
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
