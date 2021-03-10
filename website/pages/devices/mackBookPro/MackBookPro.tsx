import React, { useEffect, useRef } from "react";
import Style from "../../../styles/scroller.module.css";
import Navigation from "./component/Navigation";
import Font from "../../../styles/font.module.css";
import { useData } from "./MackBookProContext";
import UseMe from "../../component/UseMe";

function MackBookPro() {
  const context = useData();

  const bodyDivRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    bodyDivRef.current?.scrollBy({ left: 0, top: -1500 });
  }, [context?.data.currentPageIndex]);

  return (
    <div className={`macP ${Style.thinScrollbar} ${Font.fontMacBookPro}`}>
      <UseMe
        direction="RIGHT"
        position="-top-10 -right-4"
        textColor="text-white"
        bgColor="bg-yellow-500 bg-opacity-50"
      />
      <div className="macP-screen-container">
        <div className="macP-screen-border">
          <div className="macP-camera">
            <div className="macP-camera-reflet"></div>
          </div>
          <div
            ref={bodyDivRef}
            className={`macP-screen ${Style.fireFoxThinScrollbarY} overflow-y-scroll overflow-x-hidden`}
          >
            <Navigation />
          </div>
        </div>
        <p className="macP-logo">MackBook Pro</p>
      </div>
      <div className="macP-bottom">
        <div className="macP-keyboard">
          <div className="macP-keyboard-notch"></div>
        </div>
      </div>
    </div>
  );
}

export default MackBookPro;
