import Image from "next/image";
import React from "react";

function SearchSection() {
  return (
    <div className="flex gap-4 items-center">
      <div className="bg-gray-50 bg-opacity-50 flex-1 p-2 rounded-lg flex gap-4 items-center">
        <Image
          src="/devices/introWebSite/search_black.svg"
          height={14}
          width={13}
          alt="icon search"
        />
        <p className="text-gray-500 text-xs">Recherché dans les messages</p>
      </div>
      <div className="w-16 flex gap-2 flex-none">
        <Image
          src="/devices/introWebSite/question_black.svg"
          height={14}
          width={14}
          alt="icon question"
        />
        <Image
          src="/devices/introWebSite/setting_black.svg"
          height={16}
          width={16}
          alt="icon setting"
        />
      </div>
    </div>
  );
}

export default SearchSection;
