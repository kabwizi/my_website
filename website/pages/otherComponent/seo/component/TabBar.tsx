import React from "react";
import Image from "next/image";

function TabBar() {
  return (
    <div className="flex items-center justify-between border-b mt-4 text-sm text-gray-500">
      <div className="flex items-center gap-2 border-b-2 border-blue-600 pb-2">
        <div className="hidden sm:block">
          <Image src="/seo/search_bleu.svg" width={14} height={14} />
        </div>
        <p>Tous</p>
      </div>
      <div className="flex items-center gap-2  pb-2">
        <div className="hidden sm:block">
          <Image src="/seo/image_gray.svg" width={14} height={14} />
        </div>
        <p>Image</p>
      </div>
      <div className="flex  items-center gap-2  pb-2">
        <div className="hidden sm:block">
          <Image src="/seo/video_gray.svg" width={14} height={14} />
        </div>
        <p>Vidéo</p>
      </div>
      <div className="flex  items-center gap-2  pb-2">
        <div className="hidden sm:block">
          <Image src="/seo/vertical_dots_gray.svg" width={14} height={14} />
        </div>
        <p>Plus</p>
      </div>
      <p className="hidden sm:block pb-2">Paramètre</p>
      <p className=" pb-2">Outils</p>
    </div>
  );
}

export default TabBar;
