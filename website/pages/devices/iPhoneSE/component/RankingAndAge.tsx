import React from "react";
import Image from "next/image";

function RankingAndAge() {
  return (
    <div className="flex justify-between border-b pb-3 mt-4">
      <div>
        <div>
          <p className="font-semibold text-gray-500 inline text-lg mr-1">4.7</p>
          <Image
            className=""
            src="/devices/iPhoneSE/start_full_gray.svg"
            width={13}
            height={13}
          />
          <Image
            className=""
            src="/devices/iPhoneSE/start_full_gray.svg"
            width={13}
            height={13}
          />
          <Image
            className=""
            src="/devices/iPhoneSE/start_full_gray.svg"
            width={13}
            height={13}
          />
          <Image
            className=""
            src="/devices/iPhoneSE/start_full_gray.svg"
            width={13}
            height={13}
          />
          <Image
            className=""
            src="/devices/iPhoneSE/start_half_gray.svg"
            width={13}
            height={13}
          />
        </div>
        <p className="text-2xs text-gray-500">3.86k Ratings</p>
      </div>
      <div className="text-center">
        <p className="font-semibold text-gray-500 inline text-lg mr-1">#1</p>
        <p className="text-2xs text-gray-500">description</p>
      </div>
      <div className="text-center">
        <p className="font-semibold text-gray-500 inline text-lg mr-1">4+</p>
        <p className="text-2xs text-gray-500">Age</p>
      </div>
    </div>
  );
}

export default RankingAndAge;
