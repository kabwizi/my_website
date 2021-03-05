import Image from "next/image";
import React from "react";

function Navigation({
  serviceRef,
  PricingRef,
  contactRef,
}: {
  serviceRef: React.MutableRefObject<HTMLDivElement | null>;
  PricingRef: React.MutableRefObject<HTMLDivElement | null>;
  contactRef: React.MutableRefObject<HTMLDivElement | null>;
}) {
  return (
    <div className="absolute px-5 z-20 top-5 flex justify-between w-full">
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
  );
}

export default Navigation;
