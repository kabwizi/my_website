import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div className="bg-black text-white pt-5 mt-40">
      <div className="relative w-24 h-12 ml-5">
        <Image src="/devices/iPad/logo_ipad.svg" layout="fill" />
      </div>
      <div className="bg-yellow-500 bg-gradient-to-t from-red-400 text-white text-center py-3 text-2xs font-semibold mt-4">
        © 2019 TOUT DROIT RÉSERVÉ
      </div>
    </div>
  );
}

export default Footer;
