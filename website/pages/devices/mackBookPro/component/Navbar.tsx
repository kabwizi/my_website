import React, { useRef, useState } from "react";
import { IAction, IData, IRecipe, useData } from "../MackBookProContext";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import SocialMedia from "./SocialMedia";
import SmallMenuHorizontal from "./SmallMenuHorizontal";

function Navbar({ isFooter }: { isFooter: boolean }) {
  const context = useData();
  const [search, setSearch] = useState<IRecipe[] | null>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      {!isFooter ? (
        <div
          onClick={() =>
            context?.dispatchData({
              type: "CHANGE_PAGE",
              payload: { page: 0 },
            })
          }
          className="w-full flex cursor-pointer justify-center relative h-16 mt-5"
        >
          <Image src="/devices/macBookPro/logo1.svg" layout="fill" />
        </div>
      ) : null}

      <div
        className={`bg-white mx-5 relative flex justify-center items-center shadow-sm ${
          isFooter ? "" : "mt-10"
        }`}
      >
        <div className=" absolute left-0">
          <SocialMedia />
        </div>
        <div className="flex gap-5 text-2xs">
          <NavItem
            context={context}
            label="HOME"
            page={0}
            isFooter={isFooter}
          />
          <NavItem
            context={context}
            label="ABOUT"
            page={1}
            isFooter={isFooter}
          />
          <NavItem
            context={context}
            label="CONTACT"
            page={2}
            isFooter={isFooter}
          />
        </div>
        <div className="h-full flex items-center absolute right-0 text-2xs">
          {isFooter ? (
            <p>© 2020 Copyright</p>
          ) : (
            <div className="relative flex h-full">
              <div className="flex items-center">
                <label className="text-3xs">
                  Search
                  <input
                    ref={searchRef}
                    onChange={(a) => {
                      if (context && a.currentTarget.value.trim() !== "") {
                        setSearch(
                          context?.data.recipes.filter(
                            (e) =>
                              e.title
                                .toLocaleLowerCase()
                                .startsWith(
                                  a.currentTarget.value.toLocaleLowerCase()
                                ) ||
                              e.type
                                .toLocaleLowerCase()
                                .startsWith(a.currentTarget.value)
                          )
                        );
                      } else {
                        setSearch(null);
                      }
                    }}
                    className=" border-gray-100 text-3xs w-24 px-2 py-1 outline-none"
                    type="text"
                    placeholder="Search menu..."
                  />
                </label>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="bg-yellow-400 cursor-pointer w-10 h-10 rounded-sm flex justify-center items-center shadow-sm "
                >
                  <Image
                    src="/devices/macBookPro/search_white.svg"
                    width={12}
                    height={12}
                  />
                </motion.div>
              </div>
              <AnimatePresence>
                {search ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="bg-white flex flex-col shadow rounded-sm w-72 absolute z-20 right-10 top-8 max-h-52 overflow-y-auto"
                  >
                    {search.map((e) => (
                      <div
                        key={e.title}
                        onClick={() => {
                          context?.dispatchData({
                            type: "CHANGE_RECIPE",
                            payload: { recipe: e },
                          });
                          context?.dispatchData({
                            type: "CHANGE_PAGE",
                            payload: { page: 3 },
                          });
                          if (searchRef.current) searchRef.current.value = "";
                          setSearch(null);
                        }}
                      >
                        <SmallMenuHorizontal recipe={e} />
                      </div>
                    ))}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function NavItem({
  context,
  page,
  label,
  isFooter,
}: {
  context: {
    data: IData;
    dispatchData: React.Dispatch<IAction>;
  } | null;
  page: number;
  label: string;
  isFooter: boolean;
}) {
  return (
    <motion.p
      whileHover={{
        scale: !isFooter ? 1.1 : 1,
        color: !isFooter ? "#000" : "#5C5C5C",
      }}
      initial={{
        borderBottomWidth:
          context?.data.currentPageIndex === page && !isFooter ? 2 : 0,
        borderBottomStyle:
          context?.data.currentPageIndex === page && !isFooter
            ? "solid"
            : "none",
        borderBottomColor:
          context?.data.currentPageIndex === page && !isFooter
            ? "#fbbf24"
            : "#fff",
        color:
          context?.data.currentPageIndex === page && !isFooter
            ? "#000"
            : "#5C5C5C",
      }}
      animate={{
        borderBottomWidth:
          context?.data.currentPageIndex === page && !isFooter ? 2 : 0,
        borderBottomStyle:
          context?.data.currentPageIndex === page && !isFooter
            ? "solid"
            : "none",
        borderBottomColor:
          context?.data.currentPageIndex === page && !isFooter
            ? "#fbbf24"
            : "#fff",
        color:
          context?.data.currentPageIndex === page && !isFooter
            ? "#000"
            : "#5C5C5C",
      }}
      onClick={() =>
        context?.dispatchData({
          type: "CHANGE_PAGE",
          payload: { page: page },
        })
      }
      className={`font-extrabold cursor-pointer py-2 text-center w-10 border-b-2  ${
        context?.data.currentPageIndex === page ? "text-black" : "text-gray-500"
      }`}
    >
      {label}
    </motion.p>
  );
}

export default Navbar;
