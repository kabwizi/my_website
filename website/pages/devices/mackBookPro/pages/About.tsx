import React from "react";
import Image from "next/image";
import Font from "../../../../styles/font.module.css";
import { useData } from "../MackBookProContext";

function About() {
  const context = useData();
  return (
    <div className="flex mt-10 gap-5 px-16">
      <div className="relative  flex-1 border border-yellow-400 p-4">
        <p
          className={`bg-white px-4 ${Font.userName} absolute font-semibold text-xs left-1 -top-2`}
        >
          Bonjour! je m'appelle full name
        </p>
        <p className="text-2xs text-justify ">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source.
          <br />
          Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
          Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written
          in 45 BC. This book is a treatise on the theory of ethics, very
          popular during the Renaissance. The first line of Lorem Ipsum, "Lorem
          ipsum dolor sit amet..", comes from a line in section 1.10.32. The
          standard chunk of Lorem Ipsum used since the 1500s is reproduced below
          for those interested. <br /> <br />
          Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
          Cicero are also reproduced in their exact original form, accompanied
          by English versions from the 1914 translation by H.
          <br />
          Rackham.
        </p>
      </div>
      <div className="relative flex-1">
        {context ? (
          <Image src={context.data.admin.src} layout="fill" objectFit="cover" />
        ) : null}
      </div>
    </div>
  );
}

export default About;
