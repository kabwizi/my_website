import React from "react";
import BigTitle from "./BigTitle";
import SmallTitle from "./SmallTitle";
import { useData } from "../WebsiteMainContext";

function SectionService() {
  const context = useData();

  return (
    <section className="screenMaxSize mt-16 ">
      {context ? (
        <>
          <BigTitle
            textColor="BLACK"
            icon1="/main/positive_dynamics.svg"
            title={
              context.data.language[context.data.languageIndex].section2.parent
                .title
            }
            description={
              context.data.language[context.data.languageIndex].section2.parent
                .description
            }
          />
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-20 gap-y-16 mt-16">
            <SmallTitle
              textColor="BLACK"
              icon="/main/website.svg"
              title={
                context.data.language[context.data.languageIndex].section2.child
                  .child1.title
              }
              description={
                context.data.language[context.data.languageIndex].section2.child
                  .child1.description
              }
            />
            <SmallTitle
              textColor="BLACK"
              icon="/main/mobile.svg"
              title={
                context.data.language[context.data.languageIndex].section2.child
                  .child2.title
              }
              description={
                context.data.language[context.data.languageIndex].section2.child
                  .child2.description
              }
            />
            <SmallTitle
              textColor="BLACK"
              icon="/main/designer_pen.svg"
              title={
                context.data.language[context.data.languageIndex].section2.child
                  .child3.title
              }
              description={
                context.data.language[context.data.languageIndex].section2.child
                  .child3.description
              }
            />
            <SmallTitle
              textColor="BLACK"
              icon="/main/direction_sign.svg"
              title={
                context.data.language[context.data.languageIndex].section2.child
                  .child4.title
              }
              description={
                context.data.language[context.data.languageIndex].section2.child
                  .child4.description
              }
            />
          </div>
        </>
      ) : null}
    </section>
  );
}

export default SectionService;
