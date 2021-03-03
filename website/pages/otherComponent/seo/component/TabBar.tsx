import React from "react";
import Image from "next/image";

function TabBar() {
  return (
    <div className="flex items-center justify-between border-b mt-4 text-sm text-gray-500">
      <div className="flex items-center gap-2 border-b-2 border-blue-600 pb-2">
        <Image src="/seo/search_bleu.svg" width={14} height={14} />
        <p>Tous</p>
      </div>
      <div className="flex items-center gap-2  pb-2">
        <Image src="/seo/image_gray.svg" width={14} height={14} />
        <p>Image</p>
      </div>
      <div className="flex  items-center gap-2  pb-2">
        <Image src="/seo/video_gray.svg" width={14} height={14} />
        <p>Vidéo</p>
      </div>
      <div className="flex  items-center gap-2  pb-2">
        <Image src="/seo/vertical_dots_gray.svg" width={14} height={14} />
        <p>Plus</p>
      </div>
      <p className="pb-2">Paramètre</p>
      <p className=" pb-2">Outils</p>
    </div>
  );
}

export default TabBar;
