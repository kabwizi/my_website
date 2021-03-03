import React from "react";
import Navigation from "./component/Navigation";
import TopAppInfo from "./component/TopAppInfo";
import RankingAndAge from "./component/RankingAndAge";
import Description from "./component/Description";
import Preview from "./component/Preview";
import StatusHeader from "./component/StatusHeader";
import InAppPurchaseCard from "./component/InAppPurchaseCard";

function Home() {
  return (
    <div>
      <StatusHeader />
      <div className="px-1">
        <Navigation />
        <TopAppInfo />
        <RankingAndAge />
        <Description />
        <Preview />
      </div>
    </div>
  );
}

export default Home;
