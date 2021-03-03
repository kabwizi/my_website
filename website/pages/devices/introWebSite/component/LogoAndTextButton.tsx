import Image from "next/image";
import React from "react";

function LogoAndTextButton({ img, text }: { img: string; text: string }) {
  return (
    <div className="px-4 py-2 flex gap-2 rounded-lg">
      <Image
        src={`/devices/introWebSite/${img}.svg`}
        height={15}
        width={15}
        alt="user image"
      />
      <p className="font-semibold text-xs">{text}</p>
    </div>
  );
}

export default LogoAndTextButton;
