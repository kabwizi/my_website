import Image from "next/image";
import React from "react";

function TopNavigationWindows() {
  return (
    <div className="flex items-center py-4 px-6 gap-2">
      <div className="bg-white w-5 h-5 rounded-full flex justify-center items-center ">
        <Image
          src="/devices/introWebSite/minimize_black.svg"
          height={10}
          width={10}
          alt="icon minimize"
        />
      </div>
      <div className="bg-white w-5 h-5 rounded-full flex justify-center items-center ">
        <Image
          src="/devices/introWebSite/maximize_black.svg"
          height={10}
          width={10}
          alt="icon maximize"
        />
      </div>
      <div className="bg-white w-5 h-5 rounded-full flex justify-center items-center ">
        <Image
          src="/devices/introWebSite/close_black.svg"
          height={10}
          width={10}
          alt="icon close"
        />
      </div>
    </div>
  );
}

export default TopNavigationWindows;
