import Image from "next/image";
import React from "react";

function GmailLogo() {
  return (
    <div className="flex gap-2 items-center ml-4">
      <Image
        src="/devices/introWebSite/gmail_logo.svg"
        height={30}
        width={30}
        alt="gmail logo"
      />
      <p className="font-semibold text-gray-500">Gmail</p>
    </div>
  );
}

export default GmailLogo;
