import Image from "next/image";
import React from "react";

function SeoCircleNumber({ title }: { title: string }) {
  return (
    <div className="flex flex-col justify-center h-full w-full text-white text-center">
      <div className="relative flex items-center justify-center w-full h-24">
        <Image src="/seo/empty_circle_white.svg" layout="fill" />
        <p className="absolute text-2xl font-bold">100%</p>
      </div>
      <p className="text-gray-400 font-semibold mt-2">{title}</p>
    </div>
  );
}

export default SeoCircleNumber;
