import React from "react";
import Image from "next/image";
import { IProduct } from "../IMacContext";
import AddOrRemoveQuantityFromBagProduct from "./AddOrRemoveQuantityFromBagProduct";
import { useData } from "../IMacContext";

function SideBarProductCard({ product }: { product: IProduct }) {
  const context = useData();
  return product ? (
    <div className="flex gap-4">
      <div className="relative w-14 h-14 shadow-md">
        <Image src={product.src[0]} layout="fill" objectFit="cover" />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between">
            <div>
              <p className="font-bold text-2xs">{product.title}</p>
              <p className="text-3xs text-gray-500">{product.brand}</p>
            </div>
            <p className="font-bold text-2xs">{product.price} CAD</p>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <AddOrRemoveQuantityFromBagProduct product={product} />
            <Image
              className="cursor-pointer"
              onClick={() =>
                context?.dispatchData({
                  type: "REMOVE_PRODUCT_FROM_BAG",
                  payload: { product: product },
                })
              }
              src="/devices/iMac/trash_black.svg"
              width={10}
              height={10}
            />
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default SideBarProductCard;
