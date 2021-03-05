import React from "react";
import Image from "next/image";
import { IRecipe } from "../MackBookProContext";
import { useData } from "../MackBookProContext";
import Creator from "./Creator";
import Level from "./Level";
import Time from "./Time";
import Badge from "./Badge";

function SmallMenuVertical({ recipe }: { recipe: IRecipe }) {
  const context = useData();

  return recipe ? (
    <div
      onClick={() => {
        context?.dispatchData({
          type: "CHANGE_RECIPE",
          payload: { recipe: recipe },
        });
        context?.dispatchData({
          type: "CHANGE_PAGE",
          payload: { page: 3 },
        });
      }}
      className="bg-white smallMenuVertical relative flex flex-col cursor-pointer items-center shadow-sm w-48"
    >
      <div className="relative w-full h-24 flex-none">
        <Image
          className="imageScale"
          src={recipe.src}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-3">
        <div className="flex gap-3">
          <Level level={recipe.level} />
          <Time time={recipe.time} />
        </div>
        <p className="font-semibold text-2xs">{recipe.title} </p>
        <div
          className="text-3xs text-gray-500  h-14 overflow-hidden mb-1"
          dangerouslySetInnerHTML={{
            __html: recipe.description,
          }}
        ></div>
        <Creator user={recipe.user} />
      </div>
      <Badge type={recipe.type} />
    </div>
  ) : null;
}

export default SmallMenuVertical;
