import { AnimateSharedLayout, motion } from "framer-motion";
import React from "react";

function CheckoutCurrentPageAnimation({
  steps,
  currentStep,
  setCurrentStep,
}: {
  steps: string[];
  currentStep: string;
  setCurrentStep: React.Dispatch<React.SetStateAction<string>>;
}) {
  return steps ? (
    <div className="flex justify-center text-xs">
      <AnimateSharedLayout>
        {steps.map((e, index) => (
          <div
            key={index}
            className="relative w-40"
            onClick={() => setCurrentStep(e)}
          >
            <div
              className={`relative flex justify-center gap-2 px-4 z-10 ${
                e === currentStep ? "text-white" : ""
              }`}
            >
              <p
                className={`${
                  e === currentStep
                    ? "bg-white text-black"
                    : "bg-black text-white"
                } text-2xs rounded-full w-4 h-4 flex justify-center items-center`}
              >
                {index}
              </p>
              <p>{e}</p>
            </div>

            {e === currentStep && (
              <motion.div
                className="border-2 bg-black -z-10 border-black -top-1 h-6 absolute w-full"
                layoutId="underline"
              />
            )}
          </div>
        ))}
      </AnimateSharedLayout>
    </div>
  ) : null;
}

export default CheckoutCurrentPageAnimation;
