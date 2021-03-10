import React from "react";
import Navigation from "./component/Navigation";
import Style from "../../../styles/scroller.module.css";
import SamsungS20UContext from "./SamsungS20UContext";
import UseMe from "../../component/UseMe";

function SamsungS20U() {
  return (
    <div className={`relative samS20U-border ${Style.noScrollbar}`}>
      <UseMe
        direction="LEFT"
        position="-top-10 -left-28"
        textColor="text-white"
        bgColor="bg-Purple-darkest bg-opacity-90"
      />
      <div className="samS20U">
        <div
          className={`${Style.fireFoxThinNoScrollbar} samS20U-screen select-none overflow-y-scroll`}
        >
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
