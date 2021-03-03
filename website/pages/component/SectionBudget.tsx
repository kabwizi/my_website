import React from "react";
import BigTitle from "./BigTitle";
import { useData } from "../WebsiteMainContext";

function SectionBudget() {
  const context = useData();
  return (
    <section className="screenMaxSize mt-16">
      <BigTitle
        textColor="BLACK"
        icon1="/main/money.svg"
        title={
          context?.data.language[context.data.languageIndex].section8.parent
            .title!
        }
        description={
          context?.data.language[context.data.languageIndex].section8.parent
            .description!
        }
      />
    </section>
  );
}

export default SectionBudget;
