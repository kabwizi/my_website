import React from "react";
import Image from "next/image";

function StatusHeader({ children }: { children: JSX.Element }) {
  return (
    <div>
      <div className=" flex flex-none items-center justify-between px-5">
        <div>
          <p className="text-2xs font-semibold pl-2">8:47</p>
        </div>
        <div className="flex items-end gap-1">
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
              className="flex-none"
              src={"/devices/common/signal_black.svg"}
              height={10}
              width={10}
            />
          </div>
          <div className="flex-none">
            <Image
              className="flex-none"
              src={"/devices/common/battery_ios_black_percentage.svg"}
              height={10}
              width={12}
            />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
("/devices/iPhone12/user_black.svg");

export default StatusHeader;
