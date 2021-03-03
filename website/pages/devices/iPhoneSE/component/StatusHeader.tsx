import React from "react";
import Image from "next/image";

function StatusHeader() {
  return (
    <div className="px-2 flex justify-between items-center h-7">
      <div className="w-16 h-full flex items-start gap-1">
        <div className="flex items-center h-full flex-none">
          <Image
            src={"/devices/common/signal_black.svg"}
            height={8}
            width={10}
          />
        </div>
        <div className="flex items-center h-full flex-none">
          <Image
            src={"/devices/common/connection_black.svg"}
            height={8}
            width={10}
          />
        </div>
      </div>
      <p className="text-3xs font-semibold">8:47 AM</p>
      <div className="flex w-16 items-center gap-1 justify-end">
        <p className="text-3xs">100%</p>
        <div>
          <Image
            className="flex-none"
            src={"/devices/common/battery_ios_black_percentage.svg"}
            height={12}
            width={12}
          />
        </div>
      </div>
    </div>
  );
}

export default StatusHeader;
