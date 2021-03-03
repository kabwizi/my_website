import React from "react";

function AddOrRemoveQuantity({
  quantity,
  setQuantity,
}: {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="bg-white flex gap-4 items-center select-none">
      <div
        onClick={() =>
          setQuantity((prev) => {
            return prev + 1;
          })
        }
        className="flex cursor-pointer justify-center items-center w-7 h-7 shadow text-xs"
      >
        +
      </div>
      <p className="text-2xs">{quantity}</p>
      <div
        onClick={() => {
          if (quantity > 1) {
            setQuantity((prev) => {
              return prev - 1;
            });
          }
        }}
        className="bg-white  cursor-pointer flex justify-center items-center w-7 h-7 shadow text-xs"
      >
        -
      </div>
    </div>
  );
}

export default AddOrRemoveQuantity;
