import React from "react";
import CheckoutProductCard from "./CheckoutProductCard";
import { useData } from "../IMacContext";

function CheckoutOrderDetails() {
  const context = useData();

  return (
    <div className="w-72">
      <div>
        <h2 className="font-bold">ORDER DETAILS</h2>
        <div className="space-y-4 mt-4">
          {context?.data.bag.map((e, index) => (
            <div key={index}>
              <CheckoutProductCard product={e} />
            </div>
          ))}
        </div>
      </div>
      <h2 className="font-bold  mt-10">ORDER SUMMARY</h2>
      <div className="pt-2 text-xs font-semibold text-gray-500 space-y-2">
        <div className="flex justify-between">
          <p>Sub-total</p> <p> C$ 710.00</p>
        </div>
        <div className="flex justify-between ">
          <p>Taxes</p> <p> C$ 710.00</p>
        </div>
        <div className="flex justify-between border-t py-2">
          <p>Total</p> <p> C$ 710.00</p>
        </div>
      </div>
    </div>
  );
}

export default CheckoutOrderDetails;
