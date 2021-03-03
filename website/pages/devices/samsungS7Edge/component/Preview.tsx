import React from "react";
import Image from "next/image";

function Preview() {
  return (
    <div className="mt-6 flex gap-2 overflow-x-scroll">
      <div className="flex-none relative w-60 h-36">
        <Image
          className="rounded-lg"
          src="/devices/samsungS7Edge/img/app_img_1.png"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex-none relative w-64 h-36">
        <Image
          className="rounded-lg"
          src="/devices/samsungS7Edge/img/app_img_2.png"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Preview;
