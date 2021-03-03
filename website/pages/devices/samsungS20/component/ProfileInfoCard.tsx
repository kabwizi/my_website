import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function ProfileInfoCard({
  label,
  subLabel,
  leftIcon,
  showEditButton,
  setShowEdit,
}: {
  label: string;
  subLabel: string;
  leftIcon: string;
  showEditButton: boolean;
  setShowEdit: React.Dispatch<
    React.SetStateAction<{
      showEdit: boolean;
      type: string;
    }>
  >;
}) {
  return (
    <div className=" w-full">
      <div className="flex items-center w-full">
        <div className="flex items-center mr-5">
          <Image src={leftIcon} width={20} height={20} />
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-gray-600">{label}</h2>
          <p className="font-bold">{subLabel}</p>
        </div>
        {showEditButton ? (
          <motion.div
            whileHover={{ scale: 1.2 }}
            onClick={() => setShowEdit({ showEdit: true, type: "NAME" })}
            className="bg-purple-400 cursor-pointer w-7 h-7 flex justify-center items-center rounded-full shadow-lg"
          >
            <Image
              src="/devices/samsungS20/pen_white.svg"
              width={14}
              height={14}
            />
          </motion.div>
        ) : null}
      </div>
    </div>
  );
}

export default ProfileInfoCard;
