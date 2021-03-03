import React from "react";
import Navigation from "./component/Navigation";
import TopAppInfo from "./component/TopAppInfo";
import RankingAndAge from "./component/RankingAndAge";
import Description from "./component/Description";
import Preview from "./component/Preview";
import StatusHeader from "./component/StatusHeader";

function Home() {
  return (
    <div>
      <StatusHeader />
      <div className="px-3">
        <Navigation />
        <TopAppInfo />
        <RankingAndAge />
        <div className="bg-green-700 text-white text-center rounded text-xs py-2 mt-3">
          9,49 $ CA
        </div>
        <Preview />
        <Description />
      </div>
    </div>
  );
}

export default Home;
