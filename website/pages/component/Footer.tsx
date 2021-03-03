import React from "react";
import { useData } from "../WebsiteMainContext";

function Footer() {
  const context = useData();

  return (
    <section className="bg-black text-white py-5 w-full text-center">
      <p className="font-semibold">
        {context?.data.language[context.data.languageIndex].footer}
      </p>
    </section>
  );
}

export default Footer;
