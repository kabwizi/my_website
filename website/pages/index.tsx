import SectionIntro from "./component/SectionIntro";
import Navigation from "./component/Navigation";
import SectionService from "./component/SectionService";
import SectionMobile from "./component/SectionMobile";
import SectionWeb from "./component/SectionWeb";
import SectionSeo from "./component/SectionSeo";
import SectionStep from "./component/SectionStep";
import SectionLanguage from "./component/SectionLanguage";
import SectionBudget from "./component/SectionBudget";
import SectionContact from "./component/SectionContact";
import Footer from "./component/Footer";
import BackgroundSvg from "./component/BackgroundSvg";
import React, { useRef } from "react";
import Head from "next/head";

export default function Home() {
  const contactRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      <Head>
        <title>Kabwizi Serge | Portfolio</title>
        <link rel="shortcut icon" type="image/svg" href="/main/language.svg" />
      </Head>
      <div className="w-full relative">
        {/**===============NAVIGATION==============**/}
        <div className="flex justify-center ">
          <Navigation />
        </div>
        {/**===============INTRO==============**/}
        <SectionIntro contactRef={contactRef} />
        {/**===============BackgroungSvg============ */}
        <BackgroundSvg />
      </div>
      {/**===============SERVICE==============**/}
      <SectionService />
      <section className="bg-black w-full flex flex-col items-center my-16 py-16">
        <div className="screenMaxSize w-full">
          {/**===============MOBILE==============**/}
          <SectionMobile />
          {/**===============WEB==============**/}
          <SectionWeb />
          {/**===============SEO==============**/}
          <SectionSeo />
        </div>
      </section>
      {/**===============STEP==============**/}
      <SectionStep />
      {/**===============LANGUAGE==============**/}
      <SectionLanguage />
      {/**===============BUDGET==============**/}
      <SectionBudget />
      <div className="w-full relative mt-20">
        {/**===============CONTACT==============**/}
        <SectionContact contactRef={contactRef} />
        {/**===============BackgroungSvg============ */}
        <BackgroundSvg />
      </div>
      {/**===============FOOTER==============**/}
      <Footer />
    </div>
  );
}
