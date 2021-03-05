import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import React, { useState } from "react";

function CheckoutPaymentInformation({
  setCurrentStep,
}: {
  setCurrentStep: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [paymentType, setPaymentType] = useState("CREDIT");
  return (
    <div>
      <p className="font-bold">PAYMENT INFORMTION</p>
      <div className="flex flex-col border px-4 pb-4 pt-2 mt-4">
        <p className="font-semibold text-xs">DO YOU HAVE A PROMO CODE?</p>
        <input
          className="border flex-1 text-xs px-4 py-2 mt-4"
          type="text"
          placeholder="Promo Code"
        />
      </div>
      <AnimateSharedLayout>
        <motion.div
          layout
          className="flex flex-col gap-4 border px-4 pb-4 pt-2 mt-4"
        >
          <div className="flex gap-4 items-center">
            <input
              onChange={(e) => setPaymentType(e.currentTarget.value)}
              checked={paymentType === "CREDIT"}
              type="radio"
              name="payment"
              value="CREDIT"
            />
            <p className="font-semibold text-xs">CREDIT CARD</p>
          </div>
          <AnimatePresence>
            {paymentType === "CREDIT" ? (
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, height: 0 }}
                className="flex flex-col gap-4"
              >
                <input
                  className="border text-xs px-4 py-2"
                  type="text"
                  placeholder="Card number"
                />
                <input
                  className="border text-xs px-4 py-2"
                  type="text"
                  placeholder="Name on card"
                />
                <div className="flex w-full space-x-4 ">
                  <input
                    className="border flex-1 text-xs px-4 py-2"
                    type="text"
                    placeholder="MM/YY"
                  />
                  <input
                    className="border flex-1 text-xs px-4 py-2"
                    type="text"
                    placeholder="CVV"
                  />
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>
      </AnimateSharedLayout>
      <AnimateSharedLayout>
        <motion.div
          layout
          className="flex flex-col gap-4 border px-4 pb-4 pt-2 mt-4"
        >
          <div className="flex gap-4 items-center">
            <input
              onChange={(e) => setPaymentType(e.currentTarget.value)}
              checked={paymentType === "PAYPAL"}
              type="radio"
              name="payment"
              value="PAYPAL"
            />
            <p className="font-semibold text-xs">PAYPAL</p>
          </div>
          <AnimatePresence>
            {paymentType === "PAYPAL" ? (
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, height: 0 }}
              >
                <p className="text-2xs text-gray-500">
                  You will be redirected to PayPal, where you can pay and
                  complete your order.
                </p>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>
      </AnimateSharedLayout>
      <div
        onClick={() => setCurrentStep("ORDER COMPLETE")}
        className="bg-black cursor-pointer mt-4 shadow text-white text-2xs text-center py-2 font-semibold"
      >
        PAYMENT
      </div>
    </div>
  );
}

export default CheckoutPaymentInformation;
