import React, { useRef, useState } from "react";
import BigTitle from "./BigTitle";
import Image from "next/image";
import { motion } from "framer-motion";
import LanguageCard from "./LanguageCard";
import { useData } from "../WebsiteMainContext";

function SectionLanguage() {
  const context = useData();
  const [extend, setExtend] = useState<boolean>(false);

  return (
    <section className="screenMaxSize mt-16">
      {context ? (
        <BigTitle
          textColor="BLACK"
          icon1="/main/language.svg"
          title={
            context?.data.language[context.data.languageIndex].section7.parent
              .title
          }
          description={
            context?.data.language[context.data.languageIndex].section7.parent
              .description
          }
        />
      ) : null}

      <motion.div
        initial={{ height: "300px" }}
        animate={{ height: extend ? "" : "300px" }}
        className={`bg-gray-50 w-full mt-7 p-5 justify-around flex flex-wrap gap-x-5 gap-y-10 fireFoxMainScrollbarY overflow-y-auto shadow-inner`}
      >
        <LanguageCard
          language={[
            {
              link: "https://nextjs.org/",
              src: "/main/programmingLanguage/nextjs.svg",
            },
            {
              link: "https://fr.reactjs.org/",
              src: "/main/programmingLanguage/reactjs.svg",
            },
          ]}
        />
        <LanguageCard
          language={[
            {
              link: "https://www.mysql.com/fr/",
              src: "/main/programmingLanguage/mysql.svg",
            },
            {
              link: "https://firebase.google.com/",
              src: "/main/programmingLanguage/firebase.svg",
            },
          ]}
        />
        <LanguageCard
          language={[
            {
              link: "https://tailwindcss.com/",
              src: "/main/programmingLanguage/tailwindcss.svg",
            },
            {
              link: "https://getbootstrap.com/",
              src: "/main/programmingLanguage/bootstrap.svg",
            },
            {
              link: "https://materializecss.com/",
              src: "/main/programmingLanguage/materialize.svg",
            },
          ]}
        />
        <LanguageCard
          language={[
            {
              link: "https://fr.wikipedia.org/wiki/HTML5",
              src: "/main/programmingLanguage/html5.svg",
            },
            {
              link: "https://www.w3schools.com/whatis/whatis_css.asp",
              src: "/main/programmingLanguage/css3.svg",
            },
          ]}
        />
        <LanguageCard
          language={[
            {
              link: "https://jquery.com/",
              src: "/main/programmingLanguage/jquery.svg",
            },
            {
              link: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
              src: "/main/programmingLanguage/javascripte.svg",
            },
            {
              link: "https://www.typescriptlang.org/",
              src: "/main/programmingLanguage/typeScripte.svg",
            },
            {
              link: "https://www.java.com/fr/about/whatis_java.jsp",
              src: "/main/programmingLanguage/java.svg",
            },
          ]}
        />
        <LanguageCard
          language={[
            {
              link: "https://fr-ca.wordpress.org/",
              src: "/main/programmingLanguage/wordpress.svg",
            },
            {
              link: "https://fr.shopify.ca/",
              src: "/main/programmingLanguage/shopify.svg",
            },
          ]}
        />
        <LanguageCard
          language={[
            {
              link: "https://stripe.com/fr-ca",
              src: "/main/programmingLanguage/stripe.svg",
            },
            {
              link: "https://www.paypal.com/ca/home",
              src: "/main/programmingLanguage/paypal.svg",
            },
          ]}
        />
        <LanguageCard
          language={[
            {
              link: "https://flutter.dev/",
              src: "/main/programmingLanguage/flutter.svg",
            },
            {
              link: "https://dart.dev/",
              src: "/main/programmingLanguage/dart.svg",
            },
          ]}
        />
        <LanguageCard
          language={[
            {
              link: "https://nodejs.org/en/",
              src: "/main/programmingLanguage/nodejs.svg",
            },
            {
              link: "https://www.php.net/",
              src: "/main/programmingLanguage/php.svg",
            },
          ]}
        />
        <LanguageCard
          language={[
            {
              link: "https://www.figma.com/",
              src: "/main/programmingLanguage/figma.svg",
            },
          ]}
        />
        <LanguageCard
          language={[
            {
              link: "https://git-scm.com/",
              src: "/main/programmingLanguage/git.svg",
            },
          ]}
        />
        <LanguageCard
          language={[
            {
              link: "https://www.framer.com/motion/",
              src: "/main/programmingLanguage/framer.svg",
            },
          ]}
        />
        <LanguageCard
          language={[
            {
              link: "https://firebase.google.com/docs/auth",
              src: "/main/programmingLanguage/firebase_auth.svg",
            },
          ]}
        />
        <LanguageCard
          language={[
            {
              link: "https://firebase.google.com/docs/hosting",
              src: "/main/programmingLanguage/firebase_hosting.svg",
            },
            {
              link: "https://cpanel.net/",
              src: "/main/programmingLanguage/cpanel.svg",
            },
            {
              link: "https://vercel.com/docs",
              src: "/main/programmingLanguage/vercel.svg",
            },
          ]}
        />
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.2 }}
        className="flex justify-center mt-5"
      >
        <div
          onClick={() => setExtend(!extend)}
          className="bg-white shadow-lg w-72 h-10 flex items-center justify-center rounded-md cursor-pointer"
        >
          <Image
            className={extend ? "transform rotate-180" : ""}
            src="/main/programmingLanguage/arrow_bottom_language.svg"
            width={25}
            height={25}
          />
        </div>
      </motion.div>
    </section>
  );
}

export default SectionLanguage;
