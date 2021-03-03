import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
interface ILanguage {
  link: string;
  src: string;
}
function LanguageCard({ language }: { language: ILanguage[] }) {
  return language ? (
    <motion.div whileHover={{ scale: 1.1 }} className="languageGroupCard">
      {language.map((e, index) => (
        <div key={index}>
          <Image
            onClick={() => window.open(e.link, "_blank")}
            className="cursor-pointer"
            src={e.src}
            width={70}
            height={70}
          />
        </div>
      ))}
    </motion.div>
  ) : null;
}

export default LanguageCard;
