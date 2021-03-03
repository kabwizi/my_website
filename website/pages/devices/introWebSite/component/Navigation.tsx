import Image from "next/image";
import React from "react";

function Navigation() {
  return (
    <div className="flex gap-6 mt-3">
      <Image
        src="/devices/introWebSite/arrow_left_black.svg"
        height={13}
        width={13}
        alt="icon arrow back"
      />
      <Image
        src="/devices/introWebSite/trash_black.svg"
        height={13}
        width={13}
        alt="icon trash"
      />
      <Image
        src="/devices/introWebSite/check_circle_black.svg"
        height={14}
        width={14}
        alt="icon check"
      />
      <Image
        src="/devices/introWebSite/clock_black.svg"
        height={13}
        width={13}
        alt="icon clock"
      />
      <Image
        src="/devices/introWebSite/mail_black.svg"
        height={13}
        width={13}
        alt="icon mail"
      />
      <Image
        src="/devices/introWebSite/archive_black.svg"
        height={14}
        width={14}
        alt="icon archive"
      />
    </div>
  );
}

export default Navigation;
