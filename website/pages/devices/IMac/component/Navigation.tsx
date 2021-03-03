import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "../pages/Home";
import { useData } from "../IMacContext";
import Product from "../pages/Product";
import SideBar from "./SideBar";
import Checkout from "../pages/Checkout";
import Shop from "../pages/Shop";
import LogInContainer from "./LogInContainer";
import { AnimatePresence, motion } from "framer-motion";

function Navigation() {
  const context = useData();

  const page = [<Home />, <Product />, <Checkout />, <Shop />];
  return (
    <div className="relative h-full">
      <Navbar />
      {context ? page[context.data.currentPageIndex!] : null}
      <Footer />
      <AnimatePresence>
        {context?.data.showBag || context?.data.showLogin ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              context?.dispatchData({
                type: "CHANGE_SHOW_BAG",
                payload: { showBag: false },
              });
            }}
            className="bg-black bg-opacity-50 fixed z-30 inset-0 flex justify-end"
          ></motion.div>
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {context?.data.showBag ? <SideBar /> : null}
      </AnimatePresence>
      <AnimatePresence>
        {context?.data.showLogin ? <LogInContainer /> : null}
      </AnimatePresence>
    </div>
  );
}

export default Navigation;
