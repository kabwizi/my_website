import Image from "next/image";
import React from "react";
import Message from "./Message";
import Navigation from "./Navigation";
import SearchSection from "./SearchSection";
import { useData } from "../../../WebsiteMainContext";

function RightSide() {
  const context = useData();
  return (
    <div className="flex-1">
      <SearchSection />
      <Navigation />
      <div className="bg-gray-50 bg-opacity-50 w-full h-full mt-2 rounded-lg px-6 py-4">
        <div className="flex justify-between">
          <h2 className="font-semibold">
            Création d’un site web et d’une application mobile
          </h2>
          <div className="flex gap-2 items-center">
            <Image
              src="/devices/introWebSite/print_black.svg"
              height={12}
              width={12}
              alt="icon print"
            />
            <Image
              src="/devices/introWebSite/maximize_mail_black.svg"
              height={12}
              width={12}
              alt="icon maximize"
            />
          </div>
        </div>
        <Message
          userName="Ana Gouchi Pou"
          attachment={true}
          src="/devices/introWebSite/img/anagouchi.png"
          message={
            context?.data.language[context.data.languageIndex]
              .sectionIntroPhoneAndWebsite.website.message1!
          }
        />
        <Message
          userName="Serge Kabwizi"
          attachment={false}
          src="/devices/introWebSite/img/sergekabwizi.png"
          message={
            context?.data.language[context.data.languageIndex]
              .sectionIntroPhoneAndWebsite.website.message2!
          }
        />
      </div>
    </div>
  );
}

export default RightSide;
