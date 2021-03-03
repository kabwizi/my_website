import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useData } from "../SamsungS20UContext";

function AddNewCreditCard() {
  const context = useData();
  const [cardNumber, setCardNumber] = useState<string>("");
  const [cardStartDate, setCardStartDate] = useState<string>("");
  const [cardEndDate, setCardEndDate] = useState<string>("");
  const [cardName, setCardName] = useState<string>("");
  const [cardType, setCardType] = useState<"VISA" | "MASTERCARD">("VISA");
  const cardNumberRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (cardNumberRef.current) cardNumberRef.current.focus();
  }, []);

  return (
    <div className="bg-white rounded-lg w-72 p-4 shadow-2xl overflow-hidden">
      <div className="w-full flex items-center justify-between">
        <Image
          src="/devices/samsungS20U/sim_card_purple.svg"
          height={20}
          width={25}
        />
        {cardType === "VISA" ? (
          <Image src="/devices/samsungS20U/visa.svg" height={35} width={35} />
        ) : (
          <Image
            src="/devices/samsungS20U/masterCard.svg"
            height={30}
            width={30}
          />
        )}
      </div>
      <input
        ref={cardNumberRef}
        onChange={(e) => {
          if (!isNaN(Number(e.currentTarget.value))) {
            setCardType(
              e.currentTarget.value.startsWith("4") ? "VISA" : "MASTERCARD"
            );
            setCardNumber(e.currentTarget.value);
          }
        }}
        className={`outline-none mt-1 mb-2 w-full text-xs bg-gray-50 py-1 rounded-md pl-2 ${
          cardNumber ? "cardNumberLetterSpacing" : ""
        } `}
        type="text"
        maxLength={14}
        value={cardNumber}
        placeholder="Entrer le numéro de carte"
      />
      <div className="flex gap-5">
        <div className="w-16 flex flex-col justify-start">
          <p className="text-2xs text-gray-900 font-bold">Month / year</p>
          <input
            className="outline-none mt-1 w-full text-xs bg-gray-50 py-1 rounded-md pl-2"
            type="text"
            placeholder="## / ##"
            value={cardStartDate}
            maxLength={5}
            onChange={(e) => {
              if (!isNaN(Number(e.currentTarget.value.replace("/", "")))) {
                if (e.currentTarget.value.length > 2) {
                  setCardStartDate(
                    e.currentTarget.value.slice(0, 2) +
                      "/" +
                      e.currentTarget.value.slice(
                        3,
                        e.currentTarget.value.length
                      )
                  );
                } else {
                  setCardStartDate(e.currentTarget.value);
                }
              }
            }}
          />
        </div>
        <div className="w-16 flex flex-col justify-start">
          <p className="text-2xs text-gray-900 font-bold">Month / year</p>
          <input
            className="outline-none mt-1 w-full text-xs bg-gray-50 py-1 rounded-md pl-2"
            type="text"
            placeholder="## / ##"
            value={cardEndDate}
            maxLength={5}
            onChange={(e) => {
              if (!isNaN(Number(e.currentTarget.value.replace("/", "")))) {
                if (e.currentTarget.value.length > 2) {
                  setCardEndDate(
                    e.currentTarget.value.slice(0, 2) +
                      "/" +
                      e.currentTarget.value.slice(
                        3,
                        e.currentTarget.value.length
                      )
                  );
                } else {
                  setCardEndDate(e.currentTarget.value);
                }
              }
            }}
          />
        </div>
      </div>
      <input
        className="outline-none mt-3 mb-3 w-full text-xs bg-gray-50 py-1 rounded-md pl-2"
        type="text"
        placeholder="Nom du proprietaire de la carte"
        maxLength={25}
        value={cardName}
        onChange={(e) => setCardName(e.target.value)}
      />
      <div className="flex justify-end gap-2 text-sm font-semibold">
        <motion.p
          whileHover={{ scale: 1.1 }}
          onClick={() => {
            if (context)
              context.dispatchData({
                type: "SHOW_ADD_CREDIT_CARD",
                action: { showAddCreditCardValue: false },
              });
          }}
          className="bg-Purple-darkest rounded-md px-4 py-1 text-white text-2xs cursor-pointer"
        >
          Annuler
        </motion.p>
        <motion.p
          whileHover={{ scale: 1.1 }}
          onClick={() => {
            if (
              cardEndDate.length == 5 &&
              cardStartDate.length == 5 &&
              cardName.length > 0 &&
              cardNumber.length > 10
            ) {
              if (context) {
                context.dispatchData({
                  type: "SHOW_ADD_CREDIT_CARD",
                  action: { showAddCreditCardValue: false },
                });
                context.dispatchData({
                  type: "ADD_NEW_CARD",
                  action: {
                    card: {
                      cardType: cardType,
                      endDate: cardEndDate,
                      startDate: cardStartDate,
                      name: cardName.toLocaleUpperCase(),
                      lastDigit: cardNumber.slice(10, 14),
                    },
                  },
                });
              }
              setCardEndDate("");
              setCardName("");
              setCardNumber("");
              setCardStartDate("");
            }
          }}
          className="bg-Purple-darkest rounded-md px-4 py-1 text-white text-2xs cursor-pointer"
        >
          Enregistrer
        </motion.p>
      </div>
    </div>
  );
}

export default AddNewCreditCard;
