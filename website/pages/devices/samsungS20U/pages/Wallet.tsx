import React from "react";
import Image from "next/image";
import CreditCard from "../component/CreditCard";
import { useData } from "../SamsungS20UContext";
import { AnimatePresence, motion } from "framer-motion";
import AddNewCreditCard from "../component/AddNewCreditCard";

function Wallet() {
  const context = useData();

  return (
    <div
      className={`${
        context && context.data.user.creditCard.length > 0
          ? "bg-white"
          : "bg-gray-50"
      } relative pt-4 pb-14 flex flex-col flex-1 gap-4 overflow-y-scroll`}
    >
      {context && context.data.user.creditCard.length > 0 ? (
        context?.data.user.creditCard.map((e, index) => (
          <div className="px-4" key={index}>
            <CreditCard
              card={e}
              active={
                e.lastDigit === context.data.user.creditCardActiveLastDigit
              }
            />
          </div>
        ))
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col justify-center items-center h-full"
        >
          <Image
            className=" opacity-5"
            src="/devices/samsungS20U/sim_card_purple.svg"
            height={150}
            width={150}
          />
          <p className="text-2xl font-black text-center">Add your first card</p>
        </motion.div>
      )}
      <AnimatePresence>
        {context?.data.showAddCreditCard ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              context.dispatchData({
                type: "SHOW_ADD_CREDIT_CARD",
                action: { showAddCreditCardValue: false },
              });
            }}
            className="bg-black  bg-opacity-50 absolute inset-0 flex items-end"
          ></motion.div>
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {context?.data.showAddCreditCard ? (
          <motion.div
            initial={{ height: "0px", opacity: 1 }}
            animate={{ height: "215px", y: "-35px" }}
            exit={{ height: "1px", opacity: 0, y: "200px" }}
            className="flex justify-center absolute bottom-0 left-0 right-0"
          >
            <AddNewCreditCard />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default Wallet;
