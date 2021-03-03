import React from "react";
import Image from "next/image";
import { IRecipe } from "../MackBookProContext";
import Time from "./Time";
import Level from "./Level";
import { motion } from "framer-motion";

function SmallMenuHorizontal({ recipe }: { recipe: IRecipe }) {
  return recipe ? (
    <motion.div
      whileHover={{ backgroundColor: "#FEF8DD" }}
      className="bg-white bigMenuHorizontal rounded-sm px-2 py-1 relative cursor-pointer flex gap-1 items-center "
    >
      <div className="relative w-12 h-12 flex-none">
        {recipe ? (
          <Image
            className="imageScale"
            src={recipe.src}
            layout="fill"
            objectFit="cover"
          />
        ) : null}
      </div>
      <div className="">
        <div className="flex gap-3">
          <Level level={recipe.level} />
          <Time time={recipe.time} />
        </div>
        <div className="flex gap-2 items-center">
          <h2 className="font-semibold text-2xs ">{recipe.title}</h2>
          <div className="bg-yellow-400 px-2 py-1 text-white text-4xs font-semibold rounded-sm">
            {recipe.type}
          </div>
        </div>
        <div
          className="text-3xs text-gray-500  h-20 overflow-hidden mb-1"
          dangerouslySetInnerHTML={{
            __html: recipe.description,
          }}
        ></div>
      </div>
    </motion.div>
  ) : null;
}

export default SmallMenuHorizontal;
