import React from "react";
import Image from "next/image";

function Navigation() {
  return (
    <div className="flex justify-between gap-1 mt-1">
      <Image
        className=""
        src="/devices/samsungS7Edge/arrow_left_gray.svg"
        width={18}
        height={18}
      />
      <div className="flex gap-4">
        <div>
          <Image
            className=""
            src="/devices/samsungS7Edge/search_gray.svg"
            width={14}
            height={14}
          />
        </div>
        <div>
          <Image
            className=""
            src="/devices/samsungS7Edge/vertical_dots_gray.svg"
            width={14}
            height={14}
          />
        </div>
      </div>
    </div>
  );
}

export default Navigation;
