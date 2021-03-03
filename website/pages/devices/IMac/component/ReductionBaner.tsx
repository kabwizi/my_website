import React from "react";

function ReductionBaner({ text }: { text: string }) {
  return (
    <div className="bg-white px-2 absolute left-1 top-1 text-3xs">-{text}%</div>
  );
}

export default ReductionBaner;
