import React from "react";

function Description() {
  return (
    <div className="mt-2">
      <div>
        <div className="flex justify-between items-center">
          <p className="font-bold">What's New</p>
          <p className="text-blue-600 text-sm">Version History</p>
        </div>
        <div className="flex  justify-between">
          <p className="text-xs text-gray-500 mt-2">Version 2.1</p>
          <p className="text-xs text-gray-500 mt-2">14h ago</p>
        </div>
      </div>
      <div className="border-b pb-3 mt-2">
        <p className="text-xs">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <p className="text-xs text-blue-600">more</p>
      </div>
    </div>
  );
}

export default Description;
