import React from "react";
import Image from "next/image";
import { IRecipe } from "../MackBookProContext";
import { useData } from "../MackBookProContext";
import Level from "./Level";
import Time from "./Time";
import Creator from "./Creator";
import Badge from "./Badge";

function BigMenuVertical({ recipe }: { recipe: IRecipe }) {
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
      className="bg-white bigMenuVertical relative flex flex-col cursor-pointer gap-2 items-center shadow-sm"
    >
      <div className="relative w-full h-52 flex-none">
        <Image
          className="imageScale"
          src={recipe.src}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="px-4 pb-4">
        <div className="flex gap-3">
          <Level level={recipe.level} />
          <Time time={recipe.time} />
        </div>
        <p className="font-semibold text-2xs mt-1">{recipe.title}</p>
        <div
          className="text-3xs text-gray-500  h-20 overflow-hidden mb-1"
          dangerouslySetInnerHTML={{
            __html: recipe.description,
          }}
        ></div>
        <p className="font-semibold text-2xs  mt-1">Ingredients</p>
        <div className="flex gap-x-1 flex-wrap">
          {recipe.ingredients.map((e, index) => (
            <p key={index} className="text-3xs text-gray-500">
              {e}
            </p>
          ))}
        </div>
        <Creator user={recipe.user} />
      </div>
      <Badge type={recipe.type} />
    </div>
  ) : null;
}

export default BigMenuVertical;
