import React from "react";
import Image from "next/image";

function Time({ time }: { time: string }) {
  return (
    <div className="flex gap-1 items-center">
      <Image src="/devices/macBookPro/clook.svg" height={6} width={6} />
      <p className="text-4xs">{time}</p>
    </div>
  );
}

export default Time;
