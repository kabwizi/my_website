import React from "react";
import Image from "next/image";

function Preview() {
  return (
    <div className="my-2">
      <p className="font-bold">Preview</p>
      <div className="flex gap-2 mt-2  overflow-x-scroll">
        <div className="flex-none relative w-40 h-60 shadow">
          <Image
            className="rounded-xl"
            src="/devices/iPhoneSE/img/app_img_1.png"
            layout="fill"
          />
        </div>
        <div className="flex-none relative w-40 h-60 shadow">
          <Image
            className="rounded-xl"
            src="/devices/iPhoneSE/img/app_img_2.png"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
}

export default Preview;
