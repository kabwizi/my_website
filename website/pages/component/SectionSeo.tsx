import React from "react";
import Seo from "../otherComponent/seo/Seo";
import SeoCircleNumber from "../otherComponent/seo/SeoCircleNumber";
import BigTitle from "./BigTitle";
import { useData } from "../WebsiteMainContext";

function SectionSeo() {
  const context = useData();

  return (
    <div className="pt-16">
      {context ? (
        <>
          <BigTitle
            textColor="WHITE"
            icon1="/main/search.svg"
            title={
              context.data.language[context.data.languageIndex].section5.parent
                .title
            }
            description={
              context.data.language[context.data.languageIndex].section5.parent
                .description
            }
          />
          <div className="flex flex-col lg:flex-row gap-16 mt-16">
            <Seo />
            <div className="flex-none grid grid-cols-2 gap-10">
              <SeoCircleNumber
                title={
                  context.data.language[context.data.languageIndex].section5
                    .child.child1
                }
              />
              <SeoCircleNumber
                title={
                  context.data.language[context.data.languageIndex].section5
                    .child.child2
                }
              />
              <SeoCircleNumber
                title={
                  context.data.language[context.data.languageIndex].section5
                    .child.child3
                }
              />
              <SeoCircleNumber
                title={
                  context.data.language[context.data.languageIndex].section5
                    .child.child4
                }
              />
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default SectionSeo;
