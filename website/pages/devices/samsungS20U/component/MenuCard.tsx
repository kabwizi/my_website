import React from "react";
import Image from "next/image";
import { IMenu } from "../SamsungS20UContext";
import { useData } from "../SamsungS20UContext";
import { motion } from "framer-motion";

function MenuCard({ menu, isBuy }: { menu: IMenu; isBuy?: boolean }) {
  const context = useData();

  return (
    <>
      {menu ? (
        <motion.div
          initial={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
          animate={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
          whileHover={{
            backgroundColor: isBuy
              ? "rgba(255, 255, 255, 1)"
              : "rgba(248, 211, 231, 0.5)",
          }}
          onClick={() =>
            context?.dispatchData({ type: "BUY_MENU", action: { menu: menu } })
          }
          className={`flex p-2 gap-2 flex-none justify-center items-center ${
            isBuy ? "" : "cursor-pointer"
          }`}
        >
          <div
            className={`relative rounded-lg  overflow-y-hidden shadow-md ${
              isBuy ? "w-16 h-12 " : "w-20 h-14 "
            }`}
          >
            <Image src={menu.src} layout="fill" objectFit="cover" />
          </div>
          <div className="flex flex-col justify-around w-full">
            <div className="flex justify-between items-center">
              <h1 className={`font-semibold ${isBuy ? "text-xs" : "text-sm"}`}>
                {menu.title}
              </h1>
              <div
                className={`flex items-end font-bold  ${
                  isBuy ? "text-2xs " : "text-xs "
                }`}
              >
                <p>{menu.price}</p>
                <p>CAD</p>
              </div>
            </div>
            <div>
              <Image
                src="/devices/common/star_full.svg"
                height={11}
                width={11}
              />
              <Image
                src="/devices/common/star_full.svg"
                height={11}
                width={11}
              />
              <Image
                src="/devices/common/star_full.svg"
                height={11}
                width={11}
              />
              <Image
                src="/devices/common/star_full.svg"
                height={11}
                width={11}
              />
              <Image
                src="/devices/common/star_half.svg"
                height={11}
                width={11}
              />
            </div>

            <div className="flex gap-1">
              {menu.ingredientList.map((e, index) => (
                <p
                  key={index}
                  className={`${isBuy ? "text-3xs" : "text-2xs"} text-gray-600`}
                >
                  {e}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      ) : null}
    </>
  );
}

export default MenuCard;
