import React from "react";
import Image from "next/image";

function RankingAndAge() {
  return (
    <div className="flex justify-between pb-3 mt-4 text-center">
      <div className="flex flex-col justify-center items-center mt-1">
        <div className=" flex gap-1 justify-center w-16">
          <p className="font-semibold inline text-xs">4.7</p>
          <Image
            className=""
            src="/devices/samsungS7Edge/star_black.svg"
            width={10}
            height={10}
          />
        </div>
        <p className="text-3xs text-gray-500">3 M avis</p>
      </div>
      <div>
        <p className="font-semibold  inline text-xs">Plus de 10 M</p>
        <p className="text-3xs text-gray-500">Téléchargements</p>
      </div>
      <div className="w-16">
        <p className="font-semibold  inline text-xs ">4+</p>
        <p className="text-3xs text-gray-500">Choix de l'équipe</p>
      </div>
    </div>
  );
}

export default RankingAndAge;
