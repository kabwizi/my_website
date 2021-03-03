import React from "react";
import Image from "next/image";

function Level({ level }: { level: string }) {
  return (
    <div className="flex gap-1 items-center">
      <Image src="/devices/macBookPro/level.svg" height={6} width={6} />
      <p className="text-4xs">{level}</p>
    </div>
  );
}

export default Level;
