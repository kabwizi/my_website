import React from "react";
import BigTitle from "./BigTitle";
import SmallTitle from "./SmallTitle";
import { useData } from "../WebsiteMainContext";

function SectionStep() {
  const context = useData();

  return (
    <section className="screenMaxSize">
      {context ? (
        <>
          <BigTitle
            textColor="BLACK"
            icon1="/main/step.svg"
            title={
              context.data.language[context.data.languageIndex].section6.parent
                .title
            }
            description={
              context.data.language[context.data.languageIndex].section6.parent
                .description
            }
          />
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-20 gap-y-16 mt-16">
            <SmallTitle
              textColor="BLACK"
              icon="/main/1.svg"
              title={
                context.data.language[context.data.languageIndex].section6.child
                  .child1.title
              }
              description={
                context.data.language[context.data.languageIndex].section6.child
                  .child1.description
              }
            />
            <SmallTitle
              textColor="BLACK"
              icon="/main/2.svg"
              title={
                context.data.language[context.data.languageIndex].section6.child
                  .child2.title
              }
              description={
                context.data.language[context.data.languageIndex].section6.child
                  .child2.description
              }
            />
            <SmallTitle
              textColor="BLACK"
              icon="/main/3.svg"
              title={
                context.data.language[context.data.languageIndex].section6.child
                  .child3.title
              }
              description={
                context.data.language[context.data.languageIndex].section6.child
                  .child3.description
              }
            />
            <SmallTitle
              textColor="BLACK"
              icon="/main/4.svg"
              title={
                context.data.language[context.data.languageIndex].section6.child
                  .child4.title
              }
              description={
                context.data.language[context.data.languageIndex].section6.child
                  .child4.description
              }
            />
          </div>
        </>
      ) : null}
    </section>
  );
}

export default SectionStep;
