import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Style from "../../../styles/scroller.module.css";
import Navigation from "./component/Navigation";
import { useData } from "./IMacContext";
import UseMe from "../../component/UseMe";

function IMac() {
  const context = useData();

  const bodyDivRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (bodyDivRef.current)
      bodyDivRef.current.scrollBy({ left: 0, top: -1500 });
  }, [context && context.data.currentPageIndex]);

  return (
    <div className={`relative iMac`}>
      <UseMe
        direction="LEFT"
        position="-top-10 -left-28"
        textColor="text-white"
        bgColor="bg-gray-200 bg-opacity-50"
      />
      <div className="iMac-screen-container">
        <div className="iMac-screen-border">
          <div className={`iMac-screen transform ${Style.thinScrollbar}`}>
            <div
              ref={bodyDivRef}
              className={` ${Style.fireFoxThinScrollbarY} overflow-y-scroll h-full`}
            >
              <Navigation />
            </div>
          </div>
        </div>
        <div className="iMac-logo">
          <Image
            src="/devices/iMac/apple_monitor_logo.svg"
            alt="Picture of the author"
            width={50}
            height={50}
          />
        </div>
      </div>
      <Image
        src="/devices/iMac/iMac_stand.svg"
        alt="Picture of the author"
        width={300}
        height={110}
      />
    </div>
  );
}

export default IMac;
