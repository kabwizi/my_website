import React from "react";
import Image from "next/image";

function ServiceCard({ src, title }: { src: string; title: string }) {
  return (
    <div className="flex flex-none items-center gap-5">
      <div className="bg-yellow-500 bg-gradient-to-t from-red-400  w-14 h-14 flex-none flex justify-center items-center">
        <Image src={src} width={40} height={40} />
      </div>
      <div>
        <h2 className="font-bold">{title}</h2>
        <p className="text-2xs">
          Mon premier objectif est votre satisfaction. Pour ce faire, je vous
          offre une totale transparence sur mes tarifs.
        </p>
      </div>
    </div>
  );
}

export default ServiceCard;
