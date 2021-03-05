import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div className="bg-black p-5 text-white mt-28">
      <div className="flex gap-10 justify-between items-start">
        <h1 className="text-4xl font-black -mt-2">SNKR</h1>
        <div className="flex-1 flex gap-10">
          <div className="text-2xs text-gray-400 space-y-1">
            <p className="font-bold text-xs text-white">HELP</p>
            <p className="cursor-pointer hover:text-white">
              Help & Customer Service
            </p>
            <p className="cursor-pointer hover:text-white">Contact Us</p>
            <p className="cursor-pointer hover:text-white">
              Returns & Exchanges
            </p>
            <p className="cursor-pointer hover:text-white">
              Ordering & Payments
            </p>
          </div>
          <div className="text-2xs text-gray-400 space-y-1">
            <p className="font-bold text-xs text-white">ABOUT SNKR</p>
            <p className="cursor-pointer hover:text-white">News</p>
            <p className="cursor-pointer hover:text-white">Careers</p>
            <p className="cursor-pointer hover:text-white">
              Sustainable development
            </p>
          </div>
        </div>
        <div className="flex items-end flex-col gap-4">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener"
            className="flex items-center gap-4 cursor-pointer"
          >
            <p className=" font-semibold text-2xs">FACEBOOK</p>
            <div className="bg-white w-7 h-7 flex justify-center items-center">
              <Image
                src="/devices/iMac/facebook_black.svg"
                width={11}
                height={11}
              />
            </div>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener"
            className="flex items-center gap-4"
          >
            <p className="text-white font-semibold text-2xs">INSTAGRAM</p>
            <div className="bg-white w-7 h-7 flex justify-center items-center">
              <Image
                src="/devices/iMac/instagram_black.svg"
                width={11}
                height={11}
              />
            </div>
          </a>
        </div>
      </div>
      <div className="bg-white px-4 text-gray-500 flex justify-between w-full text-2xs py-2 mt-16  font-semibold">
        <div className="flex  gap-4">
          <div className="flex gap-1">
            <Image src="/devices/iMac/pin_black.svg" width={11} height={11} />
            <p className="text-black">Canada</p>
          </div>
          <p>© 2020 SNKR, Inc Copyright</p>
        </div>
        <div className="flex gap-4 flex-none">
          <p className="hover:text-black cursor-pointer">
            Privacy and Cookie Policy
          </p>
          <p className="hover:text-black cursor-pointer">Cookie settings</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
