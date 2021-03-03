import React from "react";
import Image from "next/image";
import NumberTitle from "./NumberTitle";

function SectionTakeAction() {
  return (
    <div className="relative flex items-center pt-28 pb-20 z-50">
      <div className="relative flex-1 w-full h-96">
        <Image src="/devices/iPad/img/iPad_service_jump.svg" layout="fill" />
      </div>
      <div className="relative flex-1 z-10">
        <NumberTitle
          title="STAY STRONG"
          titleColor={"BLACK"}
          number="01"
          description="Mon premier objectif est votre satisfaction. Pour ce faire, je vous
        offre une totale transparence sur mes tarifs. Mes prix varient
        dépendement du temps pour la réalisation du projet, de mon expertise et
        du niveau de détails que vous souhaitez.
      "
        />
      </div>
      <div className="dumbbellSize absolute -right-44 flex-none -z-10">
        <Image src="/devices/iPad/dumbbell_right_gray.svg" layout="fill" />
      </div>
    </div>
  );
}

export default SectionTakeAction;
