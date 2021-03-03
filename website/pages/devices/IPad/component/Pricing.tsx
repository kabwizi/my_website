import React from "react";
import NumberTitle from "./NumberTitle";
import PriceCard from "./PriceCard";

function Pricing({
  PricingRef,
}: {
  PricingRef: React.MutableRefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      ref={PricingRef}
      className="relative flex flex-col items-center mt-52 z-10"
    >
      <div className="mr-32">
        <NumberTitle title="PRICING PLANS" titleColor="BLACK" number="06" />
      </div>
      <div className="flex justify-around w-full mt-10">
        <PriceCard />
        <PriceCard />
        <PriceCard />
      </div>
    </div>
  );
}

export default Pricing;
