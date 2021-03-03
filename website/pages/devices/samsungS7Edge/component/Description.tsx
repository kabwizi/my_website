import Image from "next/image";
import React from "react";

function Description() {
  return (
    <div className="mt-3">
      <div>
        <div className="flex justify-between items-center">
          <p className="font-semibold">À propos de ce jeu</p>
          <Image
            src="/devices/samsungS7Edge/arrow_right_gray.svg"
            width={10}
            height={10}
          />
        </div>
      </div>
      <div className="mt-1">
        <p className="text-2xs text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
    </div>
  );
}

export default Description;
