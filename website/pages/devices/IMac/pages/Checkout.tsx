import Image from "next/image";
import React, { useState } from "react";
import CheckoutCurrentPageAnimation from "../component/CheckoutCurrentPageAnimation";
import CheckoutOrderDetails from "../component/CheckoutOrderDetails";
import CheckoutPaymentInformation from "../component/CheckoutPaymentInformation";
import CheckoutPersonalInfoAndAddress from "../component/CheckoutPersonalInfoAndAddress";
import { useData } from "../IMacContext";

function Checkout() {
  const context = useData();
  const steps: string[] = ["BAG", "PAYMENT", "ORDER COMPLETE"];
  const [currentStep, setCurrentStep] = useState<string>("BAG");

  const bagAndPaymentLayout = [
    <CheckoutPersonalInfoAndAddress setCurrentStep={setCurrentStep} />,
    <CheckoutPaymentInformation setCurrentStep={setCurrentStep} />,
  ];

  return context && context.data.bag.length < 1 ? (
    <div className="bg-gray-50 h-96 flex justify-center items-center mt-20">
      <div>
        <Image
          className="opacity-5"
          src="/devices/iMac/empty_shoes.svg"
          width={500}
          height={500}
        />
      </div>
      <p className="absolute text-lg font-semibold text-gray-700">
        Add your first SNKR
      </p>
    </div>
  ) : (
    <div className="relative z-20 h-full mt-16 mb-60">
      <CheckoutCurrentPageAnimation
        steps={steps}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
      <div className="flex justify-center gap-16 h-full mt-16">
        {bagAndPaymentLayout[steps.indexOf(currentStep)]}
        <CheckoutOrderDetails />
      </div>
    </div>
  );
}

export default Checkout;
