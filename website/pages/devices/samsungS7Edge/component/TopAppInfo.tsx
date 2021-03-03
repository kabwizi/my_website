import React from "react";
import Image from "next/image";

function TopAppInfo() {
  return (
    <div className="flex mt-4 gap-5">
      <div className="relative rounded-xl overflow-hidden w-16 h-16">
        <Image
          src="/devices/samsungS7Edge/img/app_music_img.png"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col justify-between">
        <p className="font-semibold">Titre de l'app</p>
        <p className="text-xs text-green-700 font-semibold">Fournisseur</p>
        <p className="text-xs text-gray-500">Achats dans l'application</p>
      </div>
    </div>
  );
}

export default TopAppInfo;
