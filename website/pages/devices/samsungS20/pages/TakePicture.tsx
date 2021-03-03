import { motion } from "framer-motion";
import React, { useCallback, useRef } from "react";
import Webcam from "react-webcam";
import { useData } from "../SamsungS20Context";
import Image from "next/image";

const videoConstraints = {
  width: 300,
  height: 595,
  facingMode: "user",
};
function TakePicture() {
  const context = useData();
  const webcamRef = useRef<Webcam | null>(null);
  const capture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        fetch(imageSrc)
          .then((res) => res.blob())
          .then((blob) => {
            const file = new File([blob], "File name", { type: "image/png" });
            const url = URL.createObjectURL(file);
            context?.dispatchData({
              type: "CHANGE_CURRENT_USER",
              payload: {
                user: {
                  ...context.data.currentUser,
                  src: url,
                },
              },
            });
            context?.dispatchData({
              type: "CHANGE_PAGE",
              payload: { page: 0 },
            });
          });
      }
    }
  }, [webcamRef]);

  return (
    <div className="bg-black relative h-full">
      <Webcam
        audio={false}
        height={595}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={300}
        videoConstraints={videoConstraints}
      />
      <motion.div
        whileHover={{ scale: 1.2 }}
        onClick={() =>
          context?.dispatchData({ type: "CHANGE_PAGE", payload: { page: 0 } })
        }
        className="bg-white bg-opacity-40 flex items-center justify-center rounded-full w-10 h-10 absolute top-3 left-3 pr-1 cursor-pointer"
      >
        <Image
          className="cursor-pointer"
          src="/devices/samsungS20/arrow_left_white.svg"
          width={16}
          height={16}
        />
      </motion.div>
      <div className="flex justify-center items-center pb-1 bottom-0 absolute w-full">
        <div className="bg-white hover:bg-opacity-20 bg-opacity-40 p-2 rounded-full">
          <motion.div
            whileHover={{ scale: 1.2 }}
            onClick={capture}
            className="bg-white cursor-pointer rounded-full w-10 h-10"
          ></motion.div>
        </div>
      </div>
    </div>
  );
}

export default TakePicture;
