import React from "react";
import { useData } from "../MackBookProContext";
import InstagramPicture from "./InstagramPicture";
import Home from "../pages/Home";
import Description from "../pages/Description";
import Navbar from "./Navbar";
import Contact from "../pages/Contact";
import About from "../pages/About";

function Navigation() {
  const context = useData();
  const pages = [<Home />, <About />, <Contact />, <Description />];

  return (
    <div className="px-8">
      <Navbar isFooter={false} />
      {pages[context?.data.currentPageIndex!]}
      <InstagramPicture />
      <Navbar isFooter={true} />
    </div>
  );
}

export default Navigation;
