import React from "react";
import Image from "next/image";
import Button from "./Button";

function SectionIntro({
  serviceRef,
  PricingRef,
  contactRef,
}: {
  serviceRef: React.MutableRefObject<HTMLDivElement | null>;
  PricingRef: React.MutableRefObject<HTMLDivElement | null>;
  contactRef: React.MutableRefObject<HTMLDivElement | null>;
}) {
  return (
    <div className="introBackground relative flex items-center">
      <Image
        src="/devices/iPad/img/iPad_into_img.png"
        layout="fill"
        objectFit="cover"
      />
      <div className="px-5 absolute top-5 flex justify-between w-full">
        <div className="relative w-24 h-12 flex-none mr-10">
          <Image src="/devices/iPad/logo_ipad.svg" layout="fill" />
        </div>
        <div className="bg-white flex justify-end items-center gap-5 flex-1 pr-8 font-bold text-2xs">
          <p
            onClick={() => {
              if (serviceRef.current)
                serviceRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                  inline: "nearest",
                });
            }}
            className="hover:text-yellow-600 cursor-pointer"
          >
            SERVICE
          </p>
          <p
            onClick={() => {
              if (PricingRef.current)
                PricingRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                  inline: "nearest",
                });
            }}
            className="hover:text-yellow-600 cursor-pointer"
          >
            PRICING
          </p>
          <p
            onClick={() => {
              if (contactRef.current)
                contactRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                  inline: "nearest",
                });
            }}
            className="hover:text-yellow-600 cursor-pointer"
          >
            CONTACT
          </p>
        </div>
      </div>
      <div className="text-white ml-5 z-10">
        <p className="strokText-white text-5xl">TAKE CONTROL</p>
        <p className="text-2xs">Mon premier objectif est votre satisfaction.</p>
        <div className="flex">
          <Button color="WHITE" />
        </div>
      </div>
      <div className="absolute -bottom-20 -z-10">
        <Image
          src="/devices/iPad/img/intro_bar_ipad.svg"
          width={600}
          height={400}
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default SectionIntro;
