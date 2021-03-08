import React from "react";
import Image from "next/image";

function TopAppInfo() {
  return (
    <div className="flex mt-2 gap-3">
      <div className="relative rounded-xl overflow-hidden w-24 h-24">
        <Image
          src="/devices/iPhoneSE/img/app_restaurant_logo_img.png"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <p className="font-bold">Find place</p>
          <p className="text-xs text-gray-500">In app purchase showcase</p>
        </div>
        <div className="flex justify-between">
          <Image
            className=""
            src="/devices/iPhoneSE/dowload_bleu.svg"
            width={18}
            height={18}
          />
          <Image
            className=""
            src="/devices/iPhoneSE/upload_bleu.svg"
            width={18}
            height={18}
          />
        </div>
      </div>
    </div>
  );
}

export default TopAppInfo;
