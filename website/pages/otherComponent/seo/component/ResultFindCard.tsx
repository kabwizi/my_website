import React from "react";

function ResultFindCard({
  title,
  link,
  description,
}: {
  title: string;
  link: string;
  description: string;
}) {
  return (
    <div>
      <p className="font-bold text-purple-700">{title}</p>
      <p className="text-green-700 text-sm">{link}</p>
      <p className="text-gray-600  text-sm">{description}</p>
    </div>
  );
}

export default ResultFindCard;
