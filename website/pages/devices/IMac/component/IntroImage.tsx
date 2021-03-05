import Image from "next/image";
import React from "react";

function IntroImage() {
  return (
    <div className="relative flex intoSectionImgSize justify-center items-center w-full h-screen">
      <div className="absolute intoImgLeftSize w-1/2 left-0 -top-8 z-0">
        <Image
          src="/devices/iMac/img/home_img_left.png"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="absolute top-52 right-96 z-10">
        <p className="font-extrabold text-3xl">ADDIDAS</p>
        <p className="font-semibold text-sm">Walk nice run fast.</p>
        <p className="font-semibold text-sm">Be strong.</p>
      </div>
      <div className="absolute h-60 left-5 right-5 -bottom-2 z-0 flex justify-start items-end">
        <Image
          src="/devices/iMac/img/home_img_center.png"
          layout="fill"
          objectFit="cover"
        />
        <div className="z-10 p-8 text-white">
          <p className="font-extrabold text-2xl">Nike Air Force</p>
          <p className="font-semibold text-xs">200CAD</p>
        </div>
      </div>
    </div>
  );
}

export default IntroImage;
