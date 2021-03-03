import React from "react";
import Image from "next/image";
import { ICreditCard } from "../SamsungS20UContext";
import { useData } from "../SamsungS20UContext";
import { motion } from "framer-motion";

function CreditCard({ card, active }: { card: ICreditCard; active?: boolean }) {
  const context = useData();

  return card ? (
    <motion.div
      id="WalletContainer"
      whileHover={{ scale: 1.05 }}
      onClick={() =>
        context?.dispatchData({
          type: "CHANGE_ACTIVE_CREDIT_CARD",
          action: { lastDigit: card.lastDigit },
        })
      }
      className={`relative p-3 rounded-lg shadow-md cursor-pointer ${
        active ? "bg-pink-50" : ""
      }`}
    >
      <div className="w-full flex items-center justify-between">
        <Image
          src="/devices/samsungS20U/sim_card_purple.svg"
          height={30}
          width={35}
        />
        {card && card.cardType === "VISA" ? (
          <Image src="/devices/samsungS20U/visa.svg" height={55} width={55} />
        ) : (
          <Image
            src="/devices/samsungS20U/masterCard.svg"
            height={45}
            width={45}
          />
        )}
      </div>
      <div className="flex justify-between mb-2">
        <p className="text-xl">....</p>
        <p className="text-xl">....</p>
        <p className="text-xl">....</p>
        <p className="text-xl">....</p>
        <p className="font-semibold">{card.lastDigit}</p>
      </div>
      <div className="flex gap-5 mb-2">
        <div className="text-center">
          <p className="text-2xs text-gray-400">Month / year</p>
          <p className="font-semibold">{card.startDate}</p>
        </div>
        <div className="text-center">
          <p className="text-2xs text-gray-400">Month / year</p>
          <p className="font-semibold">{card.endDate}</p>
        </div>
      </div>
      <p className="text-center text-sm font-semibold">{card.name}</p>
      <motion.div
        id="walletTrash"
        whileHover={{ scale: 1.2, backgroundColor: "#F54848" }}
        onClick={(e) => {
          e.stopPropagation();
          context?.dispatchData({
            type: "REMOVE_WALLET",
            action: { lastDigit: card.lastDigit },
          });
        }}
        className="bg-Purple-darkest w-8 h-8 rounded-full flex items-center justify-center absolute bottom-1 right-1"
      >
        <Image
          src="/devices/samsungS20U/trash_white.svg"
          height={15}
          width={15}
        />
      </motion.div>
    </motion.div>
  ) : null;
}

export default CreditCard;
