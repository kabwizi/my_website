import React from "react";
import Image from "next/image";

function Navigation() {
  return (
    <div className="flex gap-1">
      <Image
        className=""
        src="/devices/iPhoneSE/arrow_left_bleu.svg"
        width={10}
        height={10}
      />
      <p className="text-blue-600 text-sm">Search</p>
    </div>
  );
}

export default Navigation;
