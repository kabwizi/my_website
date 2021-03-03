import React from "react";
import TopMenuCard from "../component/TopMenuCard";
import BigMenuVertical from "../component/BigMenuVertical";
import BigMenuHorizontal from "../component/BigMenuHorizontal";
import SmallMenuVertical from "../component/SmallMenuVertical";
import StikySideAbout from "../component/StikySideAbout";
import Pagination from "../component/Pagination";
import { useData } from "../MackBookProContext";

function Home() {
  const context = useData();
  return (
    <div className="px-5">
      <div className="flex gap-5 mt-5">
        {context?.data.recipes
          .filter((e) => e.type === "BREAKFAST")
          .map((e, index) => (
            <div key={index}>
              <TopMenuCard recipe={e} />
            </div>
          ))}
      </div>
      <div className="flex mt-10 gap-5">
        <div className="flex-1 flex flex-col gap-5">
          {context?.data.recipes
            .filter((e) => e.type === "HORIZONTAL")
            .map((e, index) => (
              <div key={index}>
                <BigMenuHorizontal recipe={e} />
              </div>
            ))}
          <div className="flex gap-5">
            <div className="flex flex-col gap-5">
              {context?.data.recipes
                .filter((e) => e.type === "LUNCH")
                .map((e, index) => (
                  <div key={index}>
                    <SmallMenuVertical recipe={e} />
                  </div>
                ))}
            </div>
            <div className="flex flex-col gap-5">
              {context?.data.recipes
                .filter((e) => e.type === "DINNER")
                .map((e, index) => (
                  <div key={index}>
                    <BigMenuVertical recipe={e} />
                  </div>
                ))}
            </div>
          </div>
        </div>
        <StikySideAbout />
      </div>
      <Pagination />
    </div>
  );
}

export default Home;
