import React, { useEffect, useRef, useState } from "react";
import IMac from "../devices/IMac/IMac";
import IPad from "../devices/IPad/IPad";
import MackBookPro from "../devices/mackBookPro/MackBookPro";
import BigTitle from "./BigTitle";
import SmallTitle from "./SmallTitle";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import MackBookProContext from "../devices/mackBookPro/MackBookProContext";
import IMacContext from "../devices/IMac/IMacContext";
import { useData } from "../WebsiteMainContext";
import UseMe from "./UseMe";

function SectionWeb() {
  const context = useData();

  const iMacRef = useRef<HTMLDivElement | null>(null);
  const macBookProRef = useRef<HTMLDivElement | null>(null);
  const iPadRef = useRef<HTMLDivElement | null>(null);

  const iMacIsOnScreen = useOnScreen(iMacRef, "0px -0px -600px -0px");
  const macBookProIsOnScreen = useOnScreen(
    macBookProRef,
    "0px -0px -500px -0px"
  );
  const iPadRefIsOnScreen = useOnScreen(iPadRef, "0px -0px -500px -0px");

  return (
    <div className="pt-40">
      {context ? (
        <BigTitle
          textColor="WHITE"
          icon1="/main/monitor.svg"
          icon2="/main/laptop.svg"
          icon3="/main/tablet_and_phone.svg"
          title={
            context.data.language[context.data.languageIndex].section4.parent
              .title
          }
          description={
            context.data.language[context.data.languageIndex].section4.parent
              .description
          }
        />
      ) : null}

      <div className="space-y-16 mt-16">
        {/**=================IMAC============== */}
        <AnimateSharedLayout>
          <motion.div layout className="flex items-start justify-center gap-16">
            <AnimatePresence>
              {!iMacIsOnScreen ? (
                <motion.div
                  layout
                  exit={{ opacity: 0 }}
                  className="w-80 flex-none"
                >
                  {context ? (
                    <SmallTitle
                      textColor="WHITE"
                      title={
                        context.data.language[context.data.languageIndex]
                          .section4.child.child1.title
                      }
                      description={
                        context.data.language[context.data.languageIndex]
                          .section4.child.child1.description
                      }
                    />
                  ) : null}
                </motion.div>
              ) : null}
            </AnimatePresence>
            <div className="relative iMacSizeMainCss flex-1">
              <motion.div ref={iMacRef} layout className={`left-0 absolute`}>
                <UseMe
                  direction="LEFT"
                  position="-top-10 -left-28"
                  textColor="text-white"
                  bgColor="bg-gray-200 bg-opacity-50"
                />
                <IMacContext>
                  <IMac />
                </IMacContext>
              </motion.div>
            </div>
          </motion.div>
        </AnimateSharedLayout>

        {/**=================MACKBOOK============== */}
        <AnimateSharedLayout>
          <motion.div layout className="flex items-start justify-center gap-16">
            <div className="relative mackbookSizeMainCss flex-1">
              <motion.div
                ref={macBookProRef}
                layout
                className={`right-0 absolute`}
              >
                <UseMe
                  direction="RIGHT"
                  position="-top-10 -right-4"
                  textColor="text-white"
                  bgColor="bg-yellow-500 bg-opacity-50"
                />
                <MackBookProContext>
                  <MackBookPro />
                </MackBookProContext>
              </motion.div>
            </div>
            <AnimatePresence>
              {!macBookProIsOnScreen ? (
                <motion.div
                  layout
                  exit={{ opacity: 0 }}
                  className="w-80 flex-none"
                >
                  {context ? (
                    <SmallTitle
                      textColor="WHITE"
                      title={
                        context.data.language[context.data.languageIndex]
                          .section4.child.child2.title
                      }
                      description={
                        context.data.language[context.data.languageIndex]
                          .section4.child.child2.description
                      }
                    />
                  ) : null}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.div>
        </AnimateSharedLayout>
        {/**=================IPAD============== */}
        <AnimateSharedLayout>
          <motion.div layout className="flex items-start justify-center gap-16">
            <AnimatePresence>
              {!iPadRefIsOnScreen ? (
                <motion.div exit={{ opacity: 0 }} className="w-80 flex-none">
                  {context ? (
                    <SmallTitle
                      textColor="WHITE"
                      title={
                        context.data.language[context.data.languageIndex]
                          .section4.child.child3.title
                      }
                      description={
                        context.data.language[context.data.languageIndex]
                          .section4.child.child3.description
                      }
                    />
                  ) : null}
                </motion.div>
              ) : null}
            </AnimatePresence>
            <div className="relative iPadSizeMainCss flex-1">
              <motion.div ref={iPadRef} layout className="absolute left-0">
                <UseMe
                  direction="LEFT"
                  position="-top-10 -left-28"
                  textColor="text-white"
                  bgColor="bg-yellow-800 bg-opacity-50"
                />
                <IPad />
              </motion.div>
            </div>
          </motion.div>
        </AnimateSharedLayout>
      </div>
    </div>
  );

  // Hook
  function useOnScreen(
    ref: React.MutableRefObject<HTMLDivElement | null>,
    rootMargin = "-300px"
  ) {
    // State and setter for storing whether element is visible
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          // Update our state when observer callback fires
          setIntersecting(entry.isIntersecting);
        },
        {
          rootMargin,
        }
      );
      if (ref.current) {
        observer.observe(ref.current);
      }
      return () => {
        observer.unobserve(ref.current!);
      };
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return isIntersecting;
  }
}

export default SectionWeb;
