import React, { useRef } from "react";
import SectionIntro from "../component/SectionIntro";
import SectionService from "../component/SectionService";
import SectionTakeAction from "../component/SectionTakeAction";
import SectionBlack from "../component/SectionBlack";
import Contact from "../component/Contact";
import Pricing from "../component/Pricing";
import Footer from "../component/Footer";

function Home() {
  const serviceRef = useRef<HTMLDivElement | null>(null);
  const PricingRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const topContainerRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <SectionIntro
        serviceRef={serviceRef}
        PricingRef={PricingRef}
        contactRef={contactRef}
        topContainerRef={topContainerRef}
      />
      <div className="px-5">
        <SectionTakeAction />
        <SectionService serviceRef={serviceRef} />
      </div>
      <div className="relative">
        <SectionBlack />
        <p className="strokText-white transform -rotate-90 absolute text-9xl sideTextSize -right-1/2 mr-12 top-1/4">
          TAKE CONTROL
        </p>
      </div>
      <div className="px-5 relative">
        <p className="strokText-black transform -rotate-90 absolute text-9xl sideTextSize -left-1/2 ml-8 -z-10 top-72">
          TAKE CONTROL
        </p>
        <Pricing PricingRef={PricingRef} />
        <Contact contactRef={contactRef} />
      </div>
      <Footer topContainerRef={topContainerRef} />
    </>
  );
}

export default Home;
