import React, { useState } from "react";
import { useData } from "../SamsungS20Context";
import Image from "next/image";
import ProfileInfoCard from "../component/ProfileInfoCard";
import { AnimatePresence, motion } from "framer-motion";
import ModifyNameCard from "../component/ModifyNameCard";
import ModifyPictureCard from "../component/ModifyPictureCard";

function Profile() {
  const context = useData();
  const [showEdit, setShowEdit] = useState({ showEdit: false, type: "" });

  return (
    <motion.div
      initial={{ x: "100px" }}
      animate={{ x: "0px" }}
      className="relative flex flex-col items-center w-full gap-8 p-5  flex-1 "
    >
      <div className="relative mb-5">
        <div className="relative w-44 h-44 rounded-full overflow-hidden shadow-xl">
          {context?.data.currentUser.src.startsWith("/") ? (
            <Image
              src={context?.data.currentUser.src}
              layout="fill"
              objectFit="cover"
            />
          ) : (
            <img
              className="h-full w-full object-cover"
              src={context?.data.currentUser.src}
              alt="profile picture"
            />
          )}
        </div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          onClick={() =>
            setShowEdit({ showEdit: true, type: "PROFILE_PICTURE" })
          }
          className="bg-purple-400 cursor-pointer w-7 h-7 flex justify-center items-center rounded-full shadow-lg absolute bottom-4 right-4"
        >
          <Image
            src="/devices/samsungS20/camera_white.svg"
            width={14}
            height={14}
          />
        </motion.div>
      </div>

      <ProfileInfoCard
        setShowEdit={setShowEdit}
        label="Full name"
        showEditButton={true}
        subLabel={context?.data.currentUser.fullName!}
        leftIcon="/devices/samsungS20/user_purple.svg"
      />
      <ProfileInfoCard
        setShowEdit={setShowEdit}
        label="Phone number"
        showEditButton={false}
        subLabel={context?.data.currentUser.phoneNumber!}
        leftIcon="/devices/samsungS20/phone_purple.svg"
      />
      <AnimatePresence>
        {showEdit.showEdit ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowEdit({ showEdit: false, type: "" })}
            className="bg-black  bg-opacity-50 absolute inset-0 flex items-end"
          ></motion.div>
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {showEdit.type == "NAME" ? (
          <ModifyNameCard setShowEdit={setShowEdit} />
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {showEdit.type == "PROFILE_PICTURE" ? (
          <ModifyPictureCard setShowEdit={setShowEdit} />
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}

export default Profile;
