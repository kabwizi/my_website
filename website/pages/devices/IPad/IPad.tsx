import React from "react";
import Home from "./pages/Home";
import Style from "../../../styles/scroller.module.css";
import UseMe from "../../component/UseMe";

function IPad() {
  return (
    <div className={`iPad ${Style.scrollbarIMac}`}>
      <UseMe
        direction="LEFT"
        position="-top-10 -left-28"
        textColor="text-white"
        bgColor="bg-yellow-800 bg-opacity-50"
      />
      <div className="iPad-camera">
        <div className="iPad-camera-reflet"></div>
      </div>
      <div className="iPad-screen overflow-y-scroll overflow-x-hidden">
        <Home />
      </div>
      <div className="iPad-tBtn-container">
        <div className="iPad-btn iPad-tBtn1"></div>
        <div className="iPad-btn iPad-tBtn2"></div>
      </div>
      <div className="iPad-btn iPad-lBtn"></div>
    </div>
  );
}

export default IPad;
