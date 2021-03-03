import React from "react";
import LeftSide from "./component/LeftSide";
import RightSide from "./component/RightSide";
import TopNavigationWindows from "./component/TopNavigationWindows";

function IntroWebSite() {
  return (
    <div className="introWebSite-container text-black overflow-hidden shadow-2xl">
      <TopNavigationWindows />
      <div className="introWebSite p-2">
        <div className="flex h-full gap-4 mt-2">
          <LeftSide />
          <RightSide />
        </div>
      </div>
    </div>
  );
}

export default IntroWebSite;
