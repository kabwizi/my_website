import React from "react";
import Navigation from "./component/Navigation";
import style from "../../../styles/scroller.module.css";
import SamsungS20Context from "./SamsungS20Context";

function SamsungS20() {
  return (
    <div className={`samS20-border ${style.noScrollbar}`}>
      <div className="samS20">
        <div className="samS20-screen  overflow-hidden select-none">
          <SamsungS20Context>
            <Navigation />
          </SamsungS20Context>
        </div>
        <div className="samS20-camera">
          <div className="samS20-camera-reflet"></div>
        </div>
        <div className="samS20-btn samS20-rBtn1"></div>
        <div className="samS20-btn samS20-rBtn2"></div>
      </div>
    </div>
  );
}

export default SamsungS20;
