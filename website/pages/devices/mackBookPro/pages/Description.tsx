import React from "react";
import Image from "next/image";
import StikySideAbout from "../component/StikySideAbout";
import Direction from "../component/Direction";
import AlsoLike from "../component/AlsoLike";
import { useData } from "../MackBookProContext";
import CommentSection from "../component/CommentSection";
import LikeAndPrint from "../component/LikeAndPrint";

function Description() {
  const context = useData();

  return (
    <div className="p-5">
      <div className="flex gap-2 items-center shadow-md h-60">
        <div className="descriptionHoverScale relative w-3/5 h-full flex-none">
          <Image
            className="imageScale"
            src={context?.data.currentRecipe?.src!}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="h-full flex flex-col justify-between p-10 w-full">
          <h2 className="text-3xs text-gray-600">
            {context?.data.currentRecipe?.date.toDateString()}
          </h2>
          <h2 className="font-semibold">
            {context?.data.currentRecipe?.title}
          </h2>
          <div className="flex items-center w-full">
            <div className="border-yellow-500 border-t flex-1"></div>
            <p className="text-2xs px-5">{context?.data.currentRecipe?.type}</p>
            <div className=" border-yellow-500 border-t flex-1"></div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 mt-2">
        <div className="flex-1">
          <p
            className=" text-3xs"
            dangerouslySetInnerHTML={{
              __html: context?.data.currentRecipe?.description!,
            }}
          ></p>
          <div className=" flex w-full gap-5 mt-2">
            {context?.data.currentRecipe &&
              context.data.currentRecipe.galery.map((e, index) => {
                return (
                  <div
                    key={index}
                    className="descriptionHoverScale relative w-full h-56 shadow-md"
                  >
                    <Image
                      className="imageScale"
                      src={e}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                );
              })}
          </div>
          <h2 className="font-semibold text-2xs mt-2">Ingredients</h2>
          <div className="flex gap-1 text-3xs">
            {context?.data.currentRecipe &&
              context.data.currentRecipe.ingredients.map((e, index) => (
                <p key={index}>{e}</p>
              ))}
          </div>
          <h2 className="font-semibold mt-2 text-2xs">Direction</h2>
          <div className="flex flex-col gap-1 text-3xs">
            {context?.data.currentRecipe &&
              context.data.currentRecipe.step.map((e, index) => (
                <div key={index}>
                  <Direction index={index} step={e} />
                </div>
              ))}
          </div>
          <h2 className="font-semibold mt-2 text-2xs">Tags</h2>
          <div className="flex gap-1 text-3xs">
            {context?.data.currentRecipe &&
              context?.data.currentRecipe.ingredients.map((e, index) => (
                <p key={index}>{e}</p>
              ))}
          </div>
          <h2 className="font-semibold mt-2 text-2xs">Category</h2>
          <div className="flex gap-1 text-3xs">
            {context?.data.currentRecipe &&
              context?.data.currentRecipe.category.map((e, index) => (
                <p key={index}>{e}</p>
              ))}
          </div>
          <LikeAndPrint />
        </div>
        <div className="mt-4">
          <StikySideAbout />
        </div>
      </div>
      <AlsoLike />
      <CommentSection />
    </div>
  );
}

export default Description;
