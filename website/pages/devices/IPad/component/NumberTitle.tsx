import React from "react";

function NumberTitle({
  title,
  titleColor,
  number,
  description,
}: {
  title?: string;
  titleColor: "WHITE" | "BLACK";
  number: string;
  description?: string;
}) {
  return (
    <div className="relative ml-28 mt-20 ">
      <p className="bg-yellow-500 bg-gradient-to-t from-red-400  text-transparent bg-clip-text text-8xl font-black absolute -top-16 -left-20 -z-10">
        {number}
      </p>
      <p
        className={`relative text-4xl z-10 ${
          titleColor === "WHITE" ? "strokText-white" : "strokText-black"
        }`}
      >
        {title}
      </p>
      {description ? <p className="text-2xs">{description}</p> : null}
    </div>
  );
}

export default NumberTitle;
