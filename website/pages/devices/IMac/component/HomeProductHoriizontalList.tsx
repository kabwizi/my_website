import Image from "next/image";
import React, { useRef } from "react";
import { IProduct } from "../IMacContext";
import HomeProductCard from "./HomeProductCard";

function HomeProductHoriizontalList({
  label,
  productList,
}: {
  label: string;
  productList: IProduct[];
}) {
  const scrollDIv = useRef<HTMLDivElement | null>(null);

  return productList ? (
    <div className="mt-16 relative flex flex-col justify-center z-10  w-full">
      <p className="text-2xl font-bold">{label}</p>
      <div ref={scrollDIv} className="flex gap-4 overflow-x-auto py-4">
        {productList.map((e, index) => (
          <div key={index}>
            <HomeProductCard product={e} />
          </div>
        ))}
      </div>
      <div
        onClick={() => {
          if (scrollDIv.current)
            scrollDIv.current.scrollBy({
              top: 0,
              left: -200,
              behavior: "smooth",
            });
        }}
        className="bg-white cursor-pointer  shadow-xl w-10 h-10 flex justify-center items-center absolute z-20  rounded-full left-2"
      >
        <Image
          src="/devices/iMac/arrow_left_black.svg"
          width={12}
          height={12}
        />
      </div>
      <div
        onClick={() => {
          if (scrollDIv.current)
            scrollDIv.current.scrollBy({
              top: 0,
              left: 200,
              behavior: "smooth",
            });
        }}
        className="bg-white cursor-pointer  shadow-xl w-10 h-10 flex justify-center items-center absolute z-20  rounded-full right-2"
      >
        <Image
          src="/devices/iMac/arrow_right_black.svg"
          width={12}
          height={12}
        />
      </div>
    </div>
  ) : null;
}

export default HomeProductHoriizontalList;
