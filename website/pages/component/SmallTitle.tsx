import React from "react";
import Image from "next/image";

function SmallTitle({
  icon,
  title,
  description,
  textColor,
}: {
  icon?: string;
  title: string;
  description: string;
  textColor: "WHITE" | "BLACK";
}) {
  return (
    <div className={textColor === "WHITE" ? "text-white" : "text-black"}>
      {icon ? (
        <Image src={icon} width={25} height={25} alt="small title icon" />
      ) : null}
      <h3 className="text-3xl font-black">{title}</h3>
      <p
        className={`mt-4 font-semibold ${
          textColor === "WHITE" ? "text-gray-400" : "text-gray-500"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

export default SmallTitle;
