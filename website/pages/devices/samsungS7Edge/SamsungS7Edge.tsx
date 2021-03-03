import React from "react";
import Home from "./Home";
import Scroll from "../../../styles/scroller.module.css";
import InAppPurchaseCard from "./component/InAppPurchaseCard";
import Image from "next/image";

function SamsungS7Edge() {
  return (
    <div className={`samsungS7Edge ${Scroll.noScrollbar}`}>
      <div className="samsungS7Edge-top-element">
        <div className="samsungS7Edge-micro"></div>
        <div className="samsungS7Edge-top-logo">
          <Image
            src="/devices/samsungS7Edge/samsung_logo_gray.svg"
            width={100}
            height={10}
          />
        </div>
        <div className="samsungS7Edge-camera">
          <div className="samsungS7Edge-camera-reflet"></div>
        </div>
      </div>
      <div className="samsungS7Edge-screen relative overflow-hidden">
        <Home />
        <InAppPurchaseCard />
      </div>
      <div className="samsungS7Edge-rBtn"></div>
      <div className="samsungS7Edge-btn samsungS7Edge-lBtn1"></div>
      <div className="samsungS7Edge-btn samsungS7Edge-lBtn2"></div>
      <div className="samsungS7Edge-button-border">
        <div className="samsungS7Edge-button"></div>
      </div>
    </div>
  );
}

export default SamsungS7Edge;
