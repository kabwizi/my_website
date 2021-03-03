import React from "react";
import Navigation from "./component/Navigation";
import style from "../../../styles/scroller.module.css";
import SamsungS20UContext from "./SamsungS20UContext";

function SamsungS20U() {
  return (
    <div className={`samS20U-border ${style.noScrollbar}`}>
      <div className="samS20U">
        <div className="samS20U-screen select-none overflow-y-scroll">
          <SamsungS20UContext>
            <Navigation />
          </SamsungS20UContext>
        </div>
        <div className="samS20U-camera">
          <div className="samS20U-camera-reflet"></div>
        </div>
        <div className="samS20U-btn samS20U-rBtn1"></div>
        <div className="samS20U-btn samS20U-rBtn2"></div>
      </div>
    </div>
  );
}

export default SamsungS20U;
