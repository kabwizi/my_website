import React from "react";
import NumberTitle from "./NumberTitle";
import Image from "next/image";
import Button from "./Button";

function Contact({
  contactRef,
}: {
  contactRef: React.MutableRefObject<HTMLDivElement | null>;
}) {
  return (
    <div ref={contactRef} className="relative flex items-center gap-10 mt-36">
      <div className="flex-1 z-10 mb-14">
        <NumberTitle
          title="CONTACT US"
          titleColor={"BLACK"}
          number="05"
          description="Mon premier objectif est votre satisfaction. Pour ce faire, je vous
          offre une totale transparence sur mes tarifs."
        />
      </div>
      <div className="relative z-10 flex-1 flex flex-col gap-5">
        <input
          className="bg-gray-100 outline-none pl-10 py-2 w-full shadow-lg text-xs"
          type="text"
          placeholder="ENTER YOUR E-MAIL"
        />
        <textarea
          className="bg-gray-100 outline-none  pl-10 py-2 w-full shadow-lg  text-xs"
          placeholder="MESSAGE"
        ></textarea>
        <div className="flex">
          <Button color="RED" />
        </div>
      </div>
      <div className="dumbbellSize absolute -right-44 flex-none -z-10">
        <Image src="/devices/iPad/dumbbell_right_gray.svg" layout="fill" />
      </div>
    </div>
  );
}

export default Contact;
