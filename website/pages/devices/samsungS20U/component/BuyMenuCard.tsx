import React, { useState } from "react";
import MenuCard from "./MenuCard";
import { ICreditCard } from "../SamsungS20UContext";
import { useData } from "../SamsungS20UContext";
import Image from "next/image";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

function BuyMenuCard() {
  const context = useData();
  const currentCard: ICreditCard = context?.data.user.creditCard.filter(
    (e) => e.lastDigit === context.data.user.creditCardActiveLastDigit
  )[0]!;
  const [paid, setPaid] = useState(false);

  return (
    <AnimateSharedLayout>
      <motion.div
        layout
        className="bg-white rounded-md p-3 absolute bottom-0 w-72"
      >
        <AnimatePresence>
          {paid ? (
            <motion.div
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center gap-3 items-center"
            >
              <Image
                src="/devices/samsungS20U/check_green.svg"
                height={30}
                width={30}
              />
              <p className="text-green-600 font-semibold">Payement bien reçu</p>
            </motion.div>
          ) : null}
        </AnimatePresence>
        <AnimatePresence>
          {!paid ? (
            <motion.div exit={{ opacity: 0 }} layout>
              <div className="rounded-t-xl">
                <MenuCard menu={context?.data.menuToBuy!} isBuy={true} />
                <div className="space-y-2 mt-3">
                  <div className="flex justify-between items-center ">
                    <p className="font-bold text-xs">Quantity</p>
                    <div className="flex gap-2 items-center">
                      <p className="font-bold mr-2 text-xs">
                        {context?.data.menuToBuy?.quantity.toString()}
                      </p>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        onClick={() =>
                          context?.dispatchData({
                            type: "REDUCE_QUANTITY",
                            action: {},
                          })
                        }
                        className="bg-Purple-darkest flex justify-center items-center w-9 h-9 rounded-md cursor-pointer text-white shadow-md font-bold pb-1"
                      >
                        -
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        onClick={() =>
                          context?.dispatchData({
                            type: "ADD_QUANTITY",
                            action: {},
                          })
                        }
                        className="bg-Purple-darkest flex justify-center items-center w-9 h-9 rounded-md cursor-pointer text-white shadow-md pb-1"
                      >
                        +
                      </motion.div>
                    </div>
                  </div>
                  <div className="flex justify-between font-bold text-xs">
                    <p>Total</p>
                    <p>
                      {(
                        context?.data.menuToBuy?.quantity! *
                        context?.data.menuToBuy?.price!
                      ).toString()}
                      CAD
                    </p>
                  </div>
                </div>
              </div>
              {currentCard ? (
                <div className="flex items-center justify-between shadow-md px-4 my-4">
                  <div className="flex-none mt-2 mr-10">
                    {currentCard.cardType === "VISA" ? (
                      <Image
                        src="/devices/samsungS20U/visa.svg"
                        height={30}
                        width={30}
                      />
                    ) : (
                      <Image
                        src="/devices/samsungS20U/masterCard.svg"
                        height={30}
                        width={30}
                      />
                    )}
                  </div>
                  <div className="flex justify-end gap-4 flex-1 text-xs">
                    <p>....</p>
                    <p>....</p>
                    <p>....</p>
                    <p>....</p>
                    <p className="font-semibold">{currentCard.lastDigit}</p>
                  </div>
                </div>
              ) : (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  onClick={() => {
                    context?.dispatchData({
                      type: "CHANGE_PAGE",
                      action: { page: 0 },
                    });
                    context?.dispatchData({
                      type: "BUY_MENU",
                      action: { menu: undefined },
                    });
                  }}
                  className="text-red-500 text-xs cursor-pointer font-bold py-2 text-center"
                >
                  Choose a credit card first
                </motion.div>
              )}
              {currentCard ? (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  onClick={() => {
                    context?.dispatchData({
                      type: "ADD_PAST_PURCHASE",
                      action: { menu: context.data.menuToBuy },
                    });
                    setPaid(true);
                    setTimeout(() => {
                      context?.dispatchData({
                        type: "BUY_MENU",
                        action: { menu: undefined },
                      });
                    }, 3000);
                  }}
                  className="bg-Purple-darkest cursor-pointer text-center font-bold py-3 text-white rounded-md text-xs"
                >
                  Buy
                </motion.div>
              ) : null}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.div>
    </AnimateSharedLayout>
  );
}

export default BuyMenuCard;
