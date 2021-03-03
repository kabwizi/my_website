import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useData } from "../SamsungS20Context";

function ModifyPictureCard({
  setShowEdit,
}: {
  setShowEdit: React.Dispatch<
    React.SetStateAction<{
      showEdit: boolean;
      type: string;
    }>
  >;
}) {
  const context = useData();

  return (
    <motion.div
      initial={{ height: "0px", opacity: 1 }}
      animate={{ height: "70px" }}
      exit={{ height: "1px", opacity: 0, y: "20px" }}
      className="bg-white absolute bottom-0 w-full p-4 shadow-2xl overflow-hidden"
    >
      <div className="flex justify-around items-center">
        <motion.div
          whileHover={{ scale: 1.2 }}
          onClick={() =>
            context?.dispatchData({
              type: "CHANGE_PAGE",
              payload: { page: 3 },
            })
          }
          className="flex flex-col items-center"
        >
          <Image
            className="cursor-pointer"
            src="/devices/samsungS20/camera_purple.svg"
            width={38}
            height={38}
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="flex flex-col items-center"
        >
          <Image
            className="cursor-pointer"
            src="/devices/samsungS20/images_purple.svg"
            width={30}
            height={30}
          />
          <input
            accept=".jpg, .png, .jpeg"
            onChange={(e) => {
              if (e.target.files) {
                const url = URL.createObjectURL(e.target.files[0]);
                context?.dispatchData({
                  type: "CHANGE_CURRENT_USER",
                  payload: {
                    user: {
                      ...context.data.currentUser,
                      src: url,
                    },
                  },
                });
                setShowEdit({ showEdit: false, type: "" });
              }
            }}
            className="w-6 absolute outline-none cursor-pointer inputTypeFileWithIcon"
            type="file"
            size={2}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ModifyPictureCard;
