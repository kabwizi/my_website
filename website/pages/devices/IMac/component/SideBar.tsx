import React from "react";
import SideBarProductCard from "./SideBarProductCard";
import Image from "next/image";
import { useData } from "../IMacContext";
import { motion } from "framer-motion";

function SideBar() {
  const context = useData();

  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0, originX: 1 }}
      animate={{ opacity: 1, scaleX: 1, originX: 1 }}
      exit={{ opacity: 0, scaleX: 0, originX: 1 }}
      className="bg-white z-40 fixed flex flex-col w-96 top-0 shadow-2xl p-5 overflow-y-scroll h-full right-0"
    >
      <div className="flex-1">
        <div className="flex justify-between">
          <Image
            className="cursor-pointer"
            onClick={() =>
              context?.dispatchData({
                type: "CHANGE_SHOW_BAG",
                payload: { showBag: false },
              })
            }
            src="/devices/iMac/cancel_black.svg"
            width={10}
            height={10}
          />
        </div>
        <p className="font-extrabold text-lg mt-6 mb-5">My card</p>
        <div className="space-y-4">
          {context && context.data.bag.length > 0 ? (
            context?.data.bag.map((e, index) => (
              <div key={index}>
                <SideBarProductCard product={e} />
              </div>
            ))
          ) : (
            <div className="bg-gray-50 h-72 relative flex justify-center items-center">
              <div>
                <Image
                  className="cursor-pointer opacity-5"
                  src="/devices/iMac/empty_shoes.svg"
                  width={300}
                  height={300}
                />
              </div>
              <p className="absolute text-2xs font-semibold text-gray-500">
                Add your first SNKR
              </p>
            </div>
          )}
        </div>
      </div>
      <div>
        <div className="flex text-xs justify-between font-bold pt-10">
          <p>Total</p>
          <p>{context?.data.total} CAD</p>
        </div>
        <div
          onClick={() => {
            context?.dispatchData({
              type: "CHANGE_PAGE",
              payload: { page: 2 },
            });
            context?.dispatchData({
              type: "CHANGE_SHOW_BAG",
              payload: { showBag: false },
            });
          }}
          className="bg-black cursor-pointer text-white flex justify-center font-semibold gap-4 py-2 shadow-lg mt-8 text-2xs"
        >
          <p>PROCED TO CHECH OUT</p>
          <Image src="/devices/iMac/arrow_rigth.svg" width={7} height={7} />
        </div>
      </div>
    </motion.div>
  );
}

export default SideBar;
