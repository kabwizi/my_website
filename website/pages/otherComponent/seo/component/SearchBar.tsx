import React from "react";
import Image from "next/image";

function SearchBar() {
  return (
    <div className="flex justify-between rounded-full px-4 py-1 border">
      <p className="text-sm">Serge kabwizi</p>
      <div className="flex gap-3">
        <Image src="/seo/cancel_gray.svg" width={10} height={10} />
        <div className="flex gap-3 border-l pl-3">
          <Image src="/seo/audio_bleu.svg" width={10} height={10} />
          <Image src="/seo/search_bleu.svg" width={10} height={10} />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
