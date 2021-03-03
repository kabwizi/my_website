import React from "react";
import MenuCard from "../component/MenuCard";
import RestaurantTopInformation from "../component/RestaurantTopInformation";
import { useData } from "../SamsungS20UContext";
import { motion } from "framer-motion";
import Image from "next/image";

function Home() {
  const context = useData();

  return (
    <div className="relative w-full h-full flex flex-col">
      <RestaurantTopInformation />
      <div className=" mb-10 h-full">
        {context !== undefined && context.data.currentRestaurant !== undefined
          ? context.data.currentRestaurant.menuList.map((e, index) => (
              <div key={index}>
                <MenuCard menu={e} />
              </div>
            ))
          : null}
      </div>
      <motion.div
        whileHover={{ scale: 1.2 }}
        className="bg-white  rounded-full w-8 h-8 flex justify-center items-center absolute left-2 top-2 cursor-pointer"
        onClick={() =>
          context?.dispatchData({
            type: "CHANGE_PAGE",
            action: { page: 1 },
          })
        }
      >
        <Image
          src="/devices/samsungS20U/arrow_left_purple.svg"
          height={12}
          width={12}
        />
      </motion.div>
    </div>
  );
}

export default Home;
