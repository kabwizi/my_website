import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import IntroPhone from "../devices/introPhone/IntroPhone";
import IntroWebSite from "../devices/introWebSite/IntroWebSite";
import { useData } from "../WebsiteMainContext";

function SectionIntro({
  contactRef,
}: {
  contactRef: React.MutableRefObject<HTMLDivElement | null>;
}) {
  const context = useData();

  return (
    <section className="relative w-full py-10 flex justify-center text-white">
      <div className="screenMaxSize flex-col lg:flex-row flex gap-40 z-20 items-center py-10 justify-between">
        <div className="py-16 flex-1">
          <h1 className="text-7xl font-black">
            {
              context?.data.language[context.data.languageIndex].section1.parent
                .title
            }
          </h1>
          <p className="mt-5 text-lg font-semibold">
            {
              context?.data.language[context.data.languageIndex].section1.parent
                .description
            }
          </p>
          <motion.div
            whileHover={{ scale: 1.1 }}
            onClick={() =>
              contactRef.current?.scrollIntoView({ behavior: "smooth" })
            }
            className="baseButtonWitheStyleTailwind w-40 h-10 flex items-center font-semibold mt-3 text-black"
          >
            {
              context?.data.language[context.data.languageIndex].section1.parent
                .buttonText
            }
          </motion.div>
        </div>
        <div className="hidden lg:block relative flex-1 w-full h-full">
          <div className="absolute top-0 ">
            <IntroWebSite />
          </div>
          <div className="absolute z-20 top-10 -left-12">
            <IntroPhone />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionIntro;
