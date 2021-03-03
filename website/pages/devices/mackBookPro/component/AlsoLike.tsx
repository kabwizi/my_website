import React from "react";
import SmallMenuVertical from "./SmallMenuVertical";
import { useData } from "../MackBookProContext";

function AlsoLike() {
  const context = useData();

  return (
    <div className="pt-5">
      <div className="flex items-center mb-2">
        <p className="font-semibold pr-5 text-xs">You may also like</p>
        <div className="border-yellow-500 border-t flex-1 mt-1"></div>
      </div>
      <div className="flex gap-5">
        {context?.data.recipes
          .filter((e) => e.type === "LUNCH")
          .map((e, index) => (
            <div key={index}>
              <SmallMenuVertical recipe={e} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default AlsoLike;
