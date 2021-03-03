import React from "react";

function Badge({ type }: { type: string }) {
  return (
    <div className="bg-yellow-400 badge rounded-sm opacity-0 px-2 py-1 absolute top-1 left-1 text-white text-4xs font-semibold">
      {type}
    </div>
  );
}

export default Badge;
