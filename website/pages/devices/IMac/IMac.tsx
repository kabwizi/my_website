import React, { useEffect, useRef } from "react";
import Image from "next/image";
import style from "../../../styles/scroller.module.css";
import Navigation from "./component/Navigation";
import { useData } from "./IMacContext";

function IMac() {
  const context = useData();

  const bodyDivRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (bodyDivRef.current)
      bodyDivRef.current.scrollBy({ left: 0, top: -1500 });
  }, [context && context.data.currentPageIndex]);

  return (
    <div className={`iMac`}>
      <div className="iMac-screen-container">
        <div className="iMac-screen-border">
          <div className={`iMac-screen transform ${style.scrollbarIMac}`}>
            <div ref={bodyDivRef} className={`overflow-y-scroll h-full`}>
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
