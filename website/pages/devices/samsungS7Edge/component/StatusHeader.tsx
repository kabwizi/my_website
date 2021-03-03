import React from "react";
import Image from "next/image";

function StatusHeader() {
  return (
    <div className="flex items-center gap-1 justify-end pr-2">
      <div className="flex items-center h-full flex-none">
        <Image
          src={"/devices/common/connection_black.svg"}
          height={8}
          width={10}
        />
      </div>
      <div className="flex items-center h-full flex-none">
        <Image src={"/devices/common/signal_black.svg"} height={8} width={10} />
      </div>
      <p className="text-3xs">100%</p>
      <div>
        <Image
          className="flex-none"
          src={"/devices/common/battery_android_black.svg"}
          height={12}
          width={5}
        />
      </div>
      <p className="text-3xs font-semibold">8 h 47</p>
    </div>
  );
}

export default StatusHeader;
