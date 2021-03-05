import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

function ContactFileInput({
  file,
  setValue,
  placeholder,
  label,
}: {
  file: File | null;
  setValue: React.Dispatch<React.SetStateAction<File | null>>;
  placeholder: string;
  label: string;
}) {
  return (
    <div>
      <label
        className="font-semibold text-sm text-white"
        htmlFor="attachmentId"
      >
        {label}
      </label>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-white my-2 overflow-hidden cursor-pointer flex gap-4 items-center relative py-2 rounded-md outline-none shadow-xl font-semibold w-full"
      >
        <div className=" flex-none flex items-center border-r border-gray-600 px-4">
          <Image
            src="/main/attachment_black.svg"
            width={16}
            height={16}
            alt="icon attachment"
          />
        </div>
        <p className={`flex-1 ${file ? "text-green-600" : "text-black"}`}>
          {placeholder}
        </p>
        <input
          id="attachmentId"
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              const url = URL.createObjectURL(e.target.files[0]);
              setValue(e.target.files[0]);
            } else {
              setValue(null);
            }
          }}
          className="absolute cursor-pointer opacity-0 outline-none w-full"
          type="file"
        />
      </motion.div>
    </div>
  );
}

export default ContactFileInput;
