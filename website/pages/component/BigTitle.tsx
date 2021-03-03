import React from "react";
import Image from "next/image";

function BigTitle({
  icon1,
  icon2,
  icon3,
  title,
  description,
  textColor,
}: {
  icon1: string;
  icon2?: string;
  icon3?: string;
  title: string;
  description: string;
  textColor: "WHITE" | "BLACK" | "CONTACT";
}) {
  return (
    <div
      className={
        textColor === "WHITE" || textColor == "CONTACT"
          ? "text-white"
          : "text-black"
      }
    >
      <div className="flex gap-5">
        <Image src={icon1} width={70} height={70} alt="big title icon" />
        {icon2 ? <Image src={icon2} width={70} height={70} /> : null}
        {icon3 ? <Image src={icon3} width={70} height={70} /> : null}
      </div>
      <h2 className="text-6xl font-black">{title}</h2>
      <p className={`mt-4 font-semibold ${returnTextColor(textColor)}`}>
        {description}
      </p>
    </div>
  );
}

function returnTextColor(textColor: string) {
  if (textColor === "WHITE") {
    return "text-gray-400";
  } else if (textColor === "CONTACT") {
    return "text-white";
  } else {
    return "text-gray-500";
  }
}

export default BigTitle;
