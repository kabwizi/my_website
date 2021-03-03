import React from "react";
import NumberTitle from "./NumberTitle";
import ServiceCard from "./ServiceCard";
import Image from "next/image";

function SectionService({
  serviceRef,
}: {
  serviceRef: React.MutableRefObject<HTMLDivElement | null>;
}) {
  return (
    <div ref={serviceRef} className="relative flex items-center gap-10">
      <div className="flex-1 z-10">
        <NumberTitle
          title="OUR TRAINING SESSION"
          titleColor={"BLACK"}
          number="02"
          description=" Mon premier objectif est votre satisfaction. Pour ce faire, je vous
        offre une totale transparence sur mes tarifs. Mes prix varient
        dépendement du temps pour la réalisation du projet, de mon expertise et
        du niveau de détails que vous souhaitez.
      "
        />
      </div>
      <div className="flex-1 space-y-4 mt-14">
        <ServiceCard
          src="/devices/iPad/kettelbell.svg"
          title="CROSSFIT CLASS"
        />
        <ServiceCard src="/devices/iPad/dumbell.svg" title="CARDIO BURN" />
        <ServiceCard src="/devices/iPad/big_dumbell.svg" title="POWERLIFTING" />
      </div>
      <div className="dumbbellSize absolute -left-32 flex-none -z-10">
        <Image src="/devices/iPad/dumbbell_left_gray.svg" layout="fill" />
      </div>
    </div>
  );
}

export default SectionService;
