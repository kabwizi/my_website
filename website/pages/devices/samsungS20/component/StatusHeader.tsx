import React from "react";
import Image from "next/image";

function StatusHeader({ children }: { children: JSX.Element }) {
  return (
    <div className="bg-SamsungS20Color-samsungS20Orange bg-gradient-to-bl from-SamsungS20Color-samsungS20Orange via-SamsungS20Color-samsungS20Red text-white">
      <div className=" flex flex-none items-center justify-between px-5 py-1">
        <div>
          <p className="text-2xs pl-2">8:47</p>
        </div>
        <div className="flex items-end gap-1">
          <div className="flex-none">
            <Image
              src={"/devices/common/connection_white.svg"}
              height={10}
              width={9}
            />
          </div>
          <div className="flex-none">
            <Image
              src={"/devices/common/signal_white.svg"}
              height={11}
              width={11}
            />
          </div>
          <div className="flex-none">
            <Image
              src={"/devices/common/battery_android_white_percentage.svg"}
              height={11}
              width={14}
            />
          </div>
          <div className="flex-none">
            <Image
              className="flex-none"
              src={"/devices/common/battery_android_white.svg"}
              height={11}
              width={7}
            />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

export default StatusHeader;
