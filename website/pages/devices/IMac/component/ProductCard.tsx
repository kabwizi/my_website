import React from "react";
import Image from "next/image";
import { IProduct } from "../IMacContext";
import { useData } from "../IMacContext";
import ReductionBaner from "./ReductionBaner";

function ProductCard({ product }: { product: IProduct }) {
  const context = useData();

  return product ? (
    <div className="relative group ProductAddToCard cursor-pointer productContainer h-76">
      <div className="flex justify-end w-full absolute">
        <div
          className="p-1 flex relative z-20"
          onClick={() => {
            context?.dispatchData({
              type: "ADD_TO_BAG",
              payload: {
                product: {
                  brand: product.brand!,
                  color: [product.color[0]!],
                  description: product.description!,
                  price: product.price!,
                  quantity: 1,
                  size: [product.size[0]!],
                  src: product.src!,
                  title: product.title!,
                  discount: product.discount,
                  id: product.id,
                  sexe: product.sexe,
                  typeOfShoes: product.typeOfShoes,
                },
              },
            });
          }}
        >
          <div className="bg-black h-8 w-8 z-10 flex justify-center items-center">
            <Image
              src="/devices/iMac/shopping_caddy.svg"
              width={12}
              height={12}
            />
          </div>
          <p className="addToCardProductCardButton flex bg-black h-8 w-24 z-10 justify-center items-center text-2xs text-white right-9">
            Add to card
          </p>
        </div>
      </div>
      <div
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
        <div className="relative w-full h-52 flex justify-end items-start mb-3 shadow-lg">
          <Image src={product.src[0]} layout="fill" objectFit="cover" />
          {product.discount ? (
            <ReductionBaner text={product.discount.toString()} />
          ) : null}
        </div>
        <div className="productOtherImg flex gap-1 overflow-hidden">
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
    </div>
  ) : null;
}

export default ProductCard;
