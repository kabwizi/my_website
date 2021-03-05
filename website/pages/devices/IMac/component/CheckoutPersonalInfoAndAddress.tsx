import React from "react";

function CheckoutPersonalInfoAndAddress({
  setCurrentStep,
}: {
  setCurrentStep: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="felx-1">
      <p className="font-bold">DELIVERY ADDRESS</p>
      <div className="flex flex-col gap-4 border px-4 pb-4 pt-2 mt-4">
        <p className="font-semibold text-xs">PERSONAL INFO</p>
        <div className="flex w-full space-x-4 ">
          <input
            className="border flex-1 text-xs px-4 py-2"
            type="text"
            placeholder="First name"
          />
          <input
            className="border flex-1 text-xs px-4 py-2"
            type="text"
            placeholder="Lastname"
          />
        </div>
        <input
          className="border text-xs px-4 py-2"
          type="text"
          placeholder="E-mail"
        />
        <input
          className="border text-xs px-4 py-2"
          type="text"
          placeholder="Phone Number"
        />
      </div>
      <div className="flex border px-4 pb-4 pt-2 flex-col mt-4 gap-4">
        <p className="font-semibold text-xs">ADDRESS</p>
        <input
          className="border text-xs px-4 py-2"
          type="text"
          placeholder="Address"
        />
        <input
          className="border text-xs px-4 py-2"
          type="text"
          placeholder="City"
        />
        <input
          className="border text-xs px-4 py-2"
          type="text"
          placeholder="Prostal Code"
        />
      </div>
      <div className="flex gap-2 mt-4">
        <input type="checkbox" />
        <p className="text-2xs text-gray-500 w-96">
          Le lorem ipsum est, en imprimerie, une suite de mots sans.
        </p>
      </div>
      <div className="flex gap-2 mt-4">
        <input type="checkbox" />
        <p className="text-2xs text-gray-500 w-96">
          Le lorem ipsum est, en imprimerie, une suite de mots sans
          signification utilisée à titre provisoire pour calibrer une mise en
          page, le texte définitif venant remplacer le faux-texte dès qu'il est
          prêt ou que la mise en page est achevée. Généralement, on utilise un
          texte en faux latin, le Lorem ipsum ou Lipsum.
        </p>
      </div>
      <div
        onClick={() => setCurrentStep("PAYMENT")}
        className="bg-black cursor-pointer mt-4 shadow text-white text-2xs text-center py-2 font-semibold"
      >
        PAYMENT
      </div>
    </div>
  );
}

export default CheckoutPersonalInfoAndAddress;
