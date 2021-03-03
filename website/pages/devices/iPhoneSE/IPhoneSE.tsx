import React from "react";
import Home from "./Home";
import Scroll from "../../../styles/scroller.module.css";
import InAppPurchaseCard from "./component/InAppPurchaseCard";

function IPhoneSE() {
  return (
    <div className={`iPhSE ${Scroll.noScrollbar}`}>
      <div className="iPhSE-top-element">
        <div className="iPhSE-sensor"></div>
        <div className="iPhSE-micro"></div>
        <div className="iPhSE-camera">
          <div className="iPhSE-camera-reflet"></div>
        </div>
      </div>
      <div className="iPhSE-screen relative overflow-hidden">
        <Home />
        <InAppPurchaseCard />
      </div>
      <div className="iPhSE-rBtn"></div>
      <div className="iPhSE-btn iPhSE-lBtn1"></div>
      <div className="iPhSE-btn iPhSE-lBtn2"></div>
      <div className="iPhSE-btn iPhSE-lBtn3"></div>
      <div className="iPhSE-button-border">
        <div className="iPhSE-button"></div>
      </div>
    </div>
  );
}

export default IPhoneSE;
