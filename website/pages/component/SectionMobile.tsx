import React from "react";
import IPhone12 from "../devices/iPhone12/IPhone12";
import IPhoneSE from "../devices/iPhoneSE/IPhoneSE";
import SamsungS20U from "../devices/samsungS20U/SamsungS20U";
import SamsungS20 from "../devices/samsungS20/SamsungS20";
import BigTitle from "./BigTitle";
import SmallTitle from "./SmallTitle";
import IPhone12Context from "../devices/iPhone12/IPhone12Context";
import SamsungS7Edge from "../devices/samsungS7Edge/SamsungS7Edge";
import { useData } from "../WebsiteMainContext";
import UseMe from "./UseMe";

function SectionMobile() {
  const context = useData();

  return (
    <>
      {context ? (
        <BigTitle
          textColor="WHITE"
          icon1="/main/apple.svg"
          icon2="/main/android.svg"
          title={
            context.data.language[context.data.languageIndex].section3.parent
              .title
          }
          description={
            context.data.language[context.data.languageIndex].section3.parent
              .description
          }
        />
      ) : null}
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-16 gap-16">
        {/**=============== COL 1 ==============**/}
        <div>
          <div className="relative flex justify-center">
            <UseMe
              direction="RIGHT"
              position="-top-8 -right-12"
              textColor="text-white"
              bgColor="bg-pink-400 bg-opacity-50"
            />
            <IPhone12Context>
              <IPhone12 />
            </IPhone12Context>
          </div>
          <div>
            <div className="my-16">
              {context ? (
                <SmallTitle
                  textColor="WHITE"
                  title={
                    context.data.language[context.data.languageIndex].section3
                      .child.child1.title
                  }
                  description={
                    context.data.language[context.data.languageIndex].section3
                      .child.child1.description
                  }
                />
              ) : null}
            </div>
            <div className="flex justify-center relative">
              <UseMe
                direction="RIGHT"
                position="-top-8 -right-12"
                textColor="text-white"
                bgColor="bg-SamsungS20Color-samsungS500Orange  bg-opacity-50"
              />
              <SamsungS20 />
            </div>
          </div>
        </div>
        {/**=============== COL 2 ==============**/}
        <div>
          <div className="mb-16">
            {context ? (
              <SmallTitle
                textColor="WHITE"
                title={
                  context.data.language[context.data.languageIndex].section3
                    .child.child2.title
                }
                description={
                  context.data.language[context.data.languageIndex].section3
                    .child.child2.description
                }
              />
            ) : null}
          </div>
          <div className="flex justify-center relative">
            <UseMe
              direction="LEFT"
              position="-top-10 -left-12"
              textColor="text-white"
              bgColor="bg-Purple-darkest bg-opacity-90"
            />
            <SamsungS20U />
          </div>
          <div>
            <div className="my-16">
              {context ? (
                <SmallTitle
                  textColor="WHITE"
                  title={
                    context?.data.language[context.data.languageIndex].section3
                      .child.child3.title
                  }
                  description={
                    context?.data.language[context.data.languageIndex].section3
                      .child.child3.description
                  }
                />
              ) : null}
            </div>
            <div className="relative flex justify-center items-center">
              <div className="relative z-10 right-10 ">
                <IPhoneSE />
              </div>
              <div className="absolute -right-4 md:right-20 lg:-right-36 -top-10 -z-10">
                <SamsungS7Edge />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionMobile;
