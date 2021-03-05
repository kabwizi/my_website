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

function SectionMobile() {
  const context = useData();

  return (
    <div>
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
              <div className="relative z-10 right-4 -bottom-6">
                <IPhoneSE />
              </div>
              <div className="absolute -right-8 md:right-20 lg:-right-36 -top-8 -z-10">
                <SamsungS7Edge />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionMobile;
