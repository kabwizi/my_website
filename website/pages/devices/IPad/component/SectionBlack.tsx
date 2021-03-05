import React, { useRef } from "react";
import Image from "next/image";
import NumberTitle from "./NumberTitle";
import Coach from "./Coach";
import Testtimonial from "./Testtimonial";
import { motion } from "framer-motion";
import { useOnScreen } from "../../../../customHooks/CustomHooks";

function SectionBlack() {
  const sectionBlackTopImgRef = useRef<HTMLDivElement | null>(null);
  const onScreen = useOnScreen(sectionBlackTopImgRef, "-10px");

  return (
    <div className="bg-black text-white px-5 flex flex-col items-center mt-80 relative">
      <div ref={sectionBlackTopImgRef}>
        {onScreen ? (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            className="bg-white flex justify-center items-center relative -top-40 p-16"
          >
            <p className="bg-yellow-500 bg-gradient-to-t from-red-400  text-transparent bg-clip-text text-6xl font-black absolute -top-6 -z-10">
              TAKE CONTROL
            </p>
            <div className="overflow-hidden">
              <motion.div
                animate={{ scale: [1.05, 1] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="relative"
              >
                <Image
                  src="/devices/iPad/img/section_black_top_img.png"
                  height={400}
                  width={600}
                  objectFit="cover"
                />
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </div>
      <div className="flex w-full h-screen ">
        <div className="relative w-full h-full flex-1">
          <Image
            src="/devices/iPad/img/section_black_middle_left_img.png"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col flex-1 w-full h-full">
          <div className="relative flex-1 w-full h-full ">
            <Image
              src="/devices/iPad/img/section_black_middle_right_top_img.png"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative flex-1 w-full h-full ">
            <Image
              src="/devices/iPad/img/section_black_middle_right_bottom_img.png"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center w-2/3 mt-20">
        <NumberTitle
          title="MEET OUR COACHES"
          titleColor={"WHITE"}
          number="03"
        />
        <p className="text-center text-2xs">
          Mon premier objectif est votre satisfaction. Pour ce faire, je vous
          offre une totale transparence sur mes tarifs. Mes prix varient
          dépendement du temps pour la réalisation du projet, de mon expertise
          et du niveau de détails que vous souhaitez.
        </p>
      </div>
      <div className="bg-white flex w-full mt-5 p-3 gap-4 overflow-hidden">
        <Coach title="Julio Rodrigez" img={"/devices/iPad/img/coach_1.png"} />
        <Coach title="Christine Forte" img={"/devices/iPad/img/coach_2.png"} />
        <Coach title="Jeff Bison" img={"/devices/iPad/img/coach_3.png"} />
      </div>

      <div className="bg-white flex justify-center items-center relative -bottom-40 p-12 mt-20 w-3/4">
        <div className="absolute -top-40 mr-20">
          <NumberTitle title="TESTIMINIALS" titleColor={"WHITE"} number="04" />
        </div>
        <Testtimonial />
      </div>
    </div>
  );
}

export default SectionBlack;
