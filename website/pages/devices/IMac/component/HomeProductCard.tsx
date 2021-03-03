import React from "react";
import Image from "next/image";
import { IProduct } from "../IMacContext";
import { useData } from "../IMacContext";
import ReductionBaner from "./ReductionBaner";

function HomeProductCard({ product }: { product: IProduct }) {
  const context = useData();

  return product ? (
    <div
      className="cursor-pointer productContainer"
      onClick={() => {
        context?.dispatchData({
          type: "CHANGE_CURRENT_PRODUCT",
          payload: { product: product },
        });
        context?.dispatchData({
          type: "CHANGE_PAGE",
          payload: { page: 1 },
        });
      }}
    >
      <div className="relative w-72 h-60 flex justify-end items-start mb-3 shadow-lg">
        <Image src={product.src[0]} layout="fill" objectFit="cover" />
        {product.discount ? (
          <ReductionBaner text={product.discount.toString()} />
        ) : null}
      </div>
      <div className="flex gap-1 ">
        {product.src.map((e, index) => (
          <div key={index}>{<Image src={e} width={40} height={40} />}</div>
        ))}
      </div>
      <div className="flex justify-between font-bold">
        <p className="text-2xs">{product.brand}</p>
        <p className="text-2xs">{product.price}CAD</p>
      </div>
      <div className="flex justify-between text-sm text-gray-500">
        <p className="text-3xs">{product.title}</p>
        <p className="text-3xs">{product.quantity} in stock</p>
      </div>
    </div>
  ) : null;
}

export default HomeProductCard;
