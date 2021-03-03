import { motion } from "framer-motion";
import React from "react";
import BackgroundSvg from "../../component/BackgroundSvg";
import SearchBar from "./component/SearchBar";
import SearchResult from "./component/SearchResult";
import TabBar from "./component/TabBar";

function Seo() {
  return (
    <div className="relative ">
      <div className="bg-white relative z-50 shadow-lg p-6 rounded-2xl mx-10">
        <SearchBar />
        <TabBar />
        <SearchResult />
      </div>
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: [5, -5] }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        className="h-full w-full absolute top-0 opacity-50"
      >
        <div className="relative h-full w-full rounded-2xl overflow-hidden">
          <BackgroundSvg />
        </div>
      </motion.div>
      <motion.div
        initial={{ rotate: 5 }}
        animate={{ rotate: [-5, 5] }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        className="h-full w-full absolute top-0 opacity-50"
      >
        <div className="relative h-full w-full rounded-2xl overflow-hidden">
          <BackgroundSvg />
        </div>
      </motion.div>
      <motion.div
        initial={{ rotate: 3 }}
        animate={{ rotate: [5, -5] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        className="h-full w-full absolute top-0 opacity-50"
      >
        <div className="relative h-full w-full rounded-2xl overflow-hidden">
          <BackgroundSvg />
        </div>
      </motion.div>
    </div>
  );
}

export default Seo;
