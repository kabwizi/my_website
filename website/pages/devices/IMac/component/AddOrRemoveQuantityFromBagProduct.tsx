import React from "react";
import { IProduct } from "../IMacContext";
import { useData } from "../IMacContext";

function AddOrRemoveQuantityFromBagProduct({ product }: { product: IProduct }) {
  const context = useData();
  return product ? (
    <div className="bg-white flex gap-4 items-center select-none">
      <div
        onClick={() =>
          context?.dispatchData({
            type: "ADD_QUANTITY_TO_BAG",
            payload: { product: product },
          })
        }
        className="flex   cursor-pointer justify-center items-center w-7 h-7  shadow text-2xs"
      >
        +
      </div>
      <p className="text-2xs">{product.quantity}</p>
      <div
        onClick={() =>
          context?.dispatchData({
            type: "REDUCE_QUANTITY_TO_BAG",
            payload: { product: product },
          })
        }
        className="bg-white  cursor-pointer flex justify-center items-center w-7 h-7 shadow text-2xs"
      >
        -
      </div>
    </div>
  ) : null;
}

export default AddOrRemoveQuantityFromBagProduct;
