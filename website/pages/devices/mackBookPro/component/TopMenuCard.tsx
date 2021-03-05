import React from "react";
import Image from "next/image";
import { IRecipe } from "../MackBookProContext";
import { useData } from "../MackBookProContext";
import Time from "./Time";
import Level from "./Level";
import Creator from "./Creator";
import Badge from "./Badge";

function TopMenuCard({ recipe }: { recipe: IRecipe }) {
  const context = useData();

  return recipe ? (
    <div
      className="topMenuCard flex cursor-pointer justify-center relative h-56 w-44 shadow-md"
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
    >
      {recipe ? (
        <Image
          className="imageScale"
          src={recipe.src}
          layout="fill"
          objectFit="cover"
        />
      ) : null}

      <div className="bg-white topMenuCardText mx-2 p-2 absolute -bottom-5 shadow-md w-40 overflow-hidden">
        <div className="flex gap-3">
          <Level level={recipe.level} />
          <Time time={recipe.time} />
        </div>
        <p className="font-semibold text-2xs">{recipe.title}</p>
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

export default TopMenuCard;
