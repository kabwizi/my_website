import React from "react";
import Image from "next/image";

function SearchBar() {
  return (
    <div className="flex justify-between rounded-full px-4 py-1 border">
      <div className="flex gap-4">
        <div className="block sm:hidden">
          <Image src="/seo/search_bleu.svg" width={10} height={10} />
        </div>
        <p className="text-sm">Serge kabwizi</p>
      </div>
      <div className="flex gap-3">
        <Image src="/seo/cancel_gray.svg" width={10} height={10} />
        <div className="hidden sm:flex gap-3 border-l pl-3">
          <Image src="/seo/audio_bleu.svg" width={10} height={10} />
          <Image src="/seo/search_bleu.svg" width={10} height={10} />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
