import { useData } from "../SamsungS20UContext";
import React, { Dispatch, useState } from "react";
import Image from "next/image";
import Map from "../pages/Map";
import Wallet from "../pages/Wallet";
import Profile from "../pages/Profile";
import StatusHeader from "./StatusHeader";
import Home from "../pages/Home";
import BuyMenuCard from "./BuyMenuCard";
import { AnimatePresence, motion } from "framer-motion";
import { IData, IAction } from "../SamsungS20UContext";

export interface IItem {
  label: string;
  appBar?: JSX.Element;
}

function Navigation() {
  const context = useData();
  const [showPopUp, setShowPopUp] = useState(false);
  let pages = [<Wallet />, <Map />, <Profile />, <Home />];

  const navigationItems: IItem[] = [
    {
      label: "/devices/samsungS20U/wallet_white.svg",
      appBar: walletAppBar(showPopUp, setShowPopUp, context!),
    },
    {
      label: "/devices/samsungS20U/location_white.svg",
    },
    {
      label: "/devices/samsungS20U/user_white.svg",
      appBar: homeAppBar(),
    },
  ];

  return (
    <div className="relative flex flex-col h-full w-full text-Purple-darkest">
      {context ? (
        context.data.currentPageIndex === 3 ? (
          <StatusHeader />
        ) : navigationItems[context.data.currentPageIndex].appBar ? (
          <StatusHeader
            children={navigationItems[context.data.currentPageIndex].appBar}
          />
        ) : null
      ) : null}

      <div className="flex-1 relative overflow-y-scroll">
        {pages.map((e, index) => (
          <div
            key={index}
            className={
              index === context?.data.currentPageIndex
                ? " flex flex-col h-full overflow-y-scroll"
                : "hidden"
            }
          >
            {e}
          </div>
        ))}
        <AnimatePresence>
          {context?.data.menuToBuy ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              exit={{ opacity: 0 }}
              onClick={() =>
                context?.dispatchData({
                  type: "BUY_MENU",
                  action: { menu: undefined },
                })
              }
              className="bg-black bg-opacity-50 absolute inset-0"
            ></motion.div>
          ) : null}
        </AnimatePresence>
        <AnimatePresence>
          {context?.data.menuToBuy ? (
            <motion.div
              initial={{ height: "0px", opacity: 1 }}
              animate={{ height: "215px", y: "-35px" }}
              exit={{ height: "1px", opacity: 0, y: "200px" }}
              className="absolute bottom-0 flex justify-center w-full"
            >
              <BuyMenuCard />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
      <div className="bg-Purple-darkest  relative flex flex-none justify-around py-1 shadow-2xl">
        {navigationItems.map((e, index) => (
          <motion.div
            initial={{ y: "0px" }}
            animate={{
              y: context?.data.currentPageIndex == index ? "-30px" : "0px",
            }}
            whileHover={{ scale: 1.1 }}
            key={index}
            onClick={() =>
              context?.dispatchData({
                type: "CHANGE_PAGE",
                action: { page: index },
              })
            }
            className={
              "bg-Purple-darkest flex items-center justify-center rounded-full h-12 w-12 shadow-2xl cursor-pointer"
            }
          >
            <Image src={e.label} height={20} width={20} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function walletAppBar(
  showPopUp: boolean,
  setShowPopUp: React.Dispatch<React.SetStateAction<boolean>>,
  context: { data: IData; dispatchData: Dispatch<IAction> }
) {
  return (
    <div className="flex justify-center relative pt-1 pb-3 shadow-sm">
      <h1 className="font-bold">Wallet</h1>
      <motion.div whileHover={{ scale: 1.2 }} className="absolute left-2">
        <Image
          className="cursor-pointer"
          onClick={() =>
            context?.dispatchData({
              type: "CHANGE_PAGE",
              action: { page: 1 },
            })
          }
          src="/devices/samsungS20U/arrow_left_purple.svg"
          height={12}
          width={12}
        />
      </motion.div>
      <div className="absolute right-2">
        <motion.div
          onClick={() => setShowPopUp(!showPopUp)}
          whileHover={{ scale: 1.2 }}
        >
          <Image
            className="cursor-pointer"
            src="/devices/samsungS20U/three_dot_purple.svg"
            height={14}
            width={14}
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          onClick={() => {
            setShowPopUp(!showPopUp);
            context.dispatchData({
              type: "SHOW_ADD_CREDIT_CARD",
              action: { showAddCreditCardValue: true },
            });
          }}
          className={`bg-white cursor-pointer rounded-sm shadow-md w-28 flex justify-center absolute text-2xs font-semibold text-gray-600 p-2 z-10 right-3 ${
            showPopUp ? "flex" : "hidden"
          }`}
        >
          <p>Add credit card</p>
        </motion.div>
      </div>
    </div>
  );
}

function homeAppBar() {
  const context = useData();
  return (
    <div className="flex justify-center relative  pt-1 pb-3 shadow-sm">
      <h1 className="font-bold">Profile</h1>
      <motion.div whileHover={{ scale: 1.2 }} className="absolute left-2">
        <Image
          className="cursor-pointer"
          onClick={() =>
            context?.dispatchData({
              type: "CHANGE_PAGE",
              action: { page: 1 },
            })
          }
          src="/devices/samsungS20U/arrow_left_purple.svg"
          height={12}
          width={12}
        />
      </motion.div>
    </div>
  );
}

export default Navigation;
