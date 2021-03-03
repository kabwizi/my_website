import React from "react";
import Image from "next/image";

function StatusHeader({ children }: { children?: JSX.Element }) {
  return (
    <div>
      <div className=" flex flex-none items-center justify-between px-5 pb-1">
        <div>
          <p className="text-xs font-bold pl-2">8:47</p>
        </div>
        <div className="flex items-end gap-1">
          <div className="flex-none">
            <Image
              className="flex-none"
              src={"/devices/common/signal_black.svg"}
              height={10}
              width={10}
            />
          </div>
          <div className="flex-none">
            <Image
              className="flex-none"
              src={"/devices/common/connection_black.svg"}
              height={11}
              width={11}
            />
          </div>
          <div className="flex-none">
            <Image
              src={"/devices/common/battery_android_black_percentage.svg"}
              height={11}
              width={14}
            />
          </div>
          <div className="flex-none">
            <Image
              className="flex-none"
              src={"/devices/common/battery_android_black.svg"}
              height={11}
              width={8}
            />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

export default StatusHeader;
