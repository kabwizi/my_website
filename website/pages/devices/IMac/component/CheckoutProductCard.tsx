import React from "react";
import Image from "next/image";
import { IProduct } from "../IMacContext";

function CheckoutProductCard({ product }: { product: IProduct }) {
  return product ? (
    <div className="flex items-center gap-4">
      <div className="relative w-20 h-20 shadow-md">
        <Image src={product.src[0]} layout="fill" objectFit="cover" />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <p className="font-bold text-sm">{product.title}</p>
          <p className="text-xs text-gray-500">{product.brand}</p>
          <p className="font-bold text-sm">{product.price} CAD</p>
        </div>
      </div>
    </div>
  ) : null;
}

export default CheckoutProductCard;
