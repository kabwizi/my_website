import React from "react";
import Image from "next/image";

function Coach({ img, title }: { img: string; title: string }) {
  return (
    <div className="text-center flex-1 w-full">
      <div className="relative w-full h-80">
        <Image src={img} layout="fill" objectFit="cover" />
      </div>
      <p className="strokText-white text-xl">{title}</p>
    </div>
  );
}

export default Coach;
