import Image from "next/image";
import React from "react";
import GmailLogo from "./GmailLogo";
import LogoAndTextButton from "./LogoAndTextButton";

function LeftSide() {
  return (
    <div className="flex justify-end h-full w-80 flex-none">
      <div className="flex h-full w-full">
        <div className="flex-1 relative h-full w-full opacity-40">
          <Image
            src="/devices/introWebSite/gmail_pattern.svg"
            alt="gmail pattern"
            layout="fill"
          />
        </div>
        <div className="flex-none">
          <GmailLogo />

          <div className="bg-white px-4 py-2 flex gap-2 rounded-lg mt-16">
            <Image
              src="/devices/introWebSite/plus_message.svg"
              height={15}
              width={15}
              alt="icon message"
            />
            <p className="font-semibold text-xs">Nouveau message</p>
          </div>
          <LogoAndTextButton img="mailbox_black" text="Boîte de récieption" />
          <LogoAndTextButton img="plane_black" text="Message envoyé" />
          <LogoAndTextButton img="important_black" text="Important" />
          <div className="border-t flex items-center gap-2 pt-3 mt-16">
            <Image
              className="rounded-full"
              src="/devices/introWebSite/img/sergekabwizi.png"
              height={25}
              width={25}
              alt="serge image"
            />
            <p className="text-2xs font-semibold">Serge Kabwizi</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
