import React, { useState, useEffect } from "react";
import Image from "next/image";
import AddOrRemoveQuantity from "../component/AddOrRemoveQuantity";
import ProductCard from "../component/ProductCard";
import { useData } from "../IMacContext";
import ReactImageMagnify from "react-image-magnify";

function Product() {
  const context = useData();
  const [productColor, setProductColor] = useState();
  const [quantity, setQuantity] = useState(1);

  const [size, setSize] = useState(6.5);

  useEffect(() => {
    if (context) setProductColor(context.data.currentProduct.color[0]);
  }, []);

  return context ? (
    <div className="z-10 relative px-5">
      <div className="relative h-72 w-full">
        <Image
          src="/devices/iMac/img/sport_collection_banner.png"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="flex items-center gap-14 mt-8">
        <div className="flex flex-col gap-4">
          {context?.data.currentProduct?.src
            .slice(1, context.data.currentProduct.src.length)
            .map((e, index) => (
              <div key={index} className="relative h-24 w-24 shadow">
                <Image src={e} layout="fill" objectFit="cover" />
              </div>
            ))}
        </div>
        <div className="relative h-96 w-96 flex-none shadow-xl">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src: context.data.currentProduct.src[0],
              },
              largeImage: {
                src: context.data.currentProduct.src[0],
                width: 500,
                height: 500,
              },
            }}
          />
        </div>
        <div>
          <h1 className="font-bold text-2xl">
            {context?.data.currentProduct?.title}
          </h1>
          <p className="font-bold text-gray-400 text-xs">
            {context?.data.currentProduct?.brand}
          </p>
          <div className="flex mt-1">
            <Image src="/devices/common/star_full.svg" height={10} width={10} />
            <Image src="/devices/common/star_full.svg" height={10} width={10} />
            <Image src="/devices/common/star_full.svg" height={10} width={10} />
            <Image src="/devices/common/star_half.svg" height={10} width={10} />
          </div>
          <div className="flex items-end my-2">
            <p className="font-bold text-2xl">
              {context?.data.currentProduct?.price}
            </p>
            <p className="text-xs">CAD</p>
          </div>
          <p className="font-semibold text-xs">Description</p>
          <p className="text-gray-500  text-2xs mt-1">
            {context?.data.currentProduct?.description}
          </p>
          <p className="font-semibold mt-2 mb-1  text-xs">Available colors</p>
          <div className="flex gap-2 pt-1">
            {context?.data.currentProduct?.color.map((e) => (
              <div
                key={e}
                onClick={() => setProductColor(e)}
                className={`${e} ${
                  e === productColor ? "border-2 border-yellow-500" : ""
                } w-6 h-6  rounded-full`}
              ></div>
            ))}
          </div>
          <div className="flex flex-col  items-start gap-2 mt-4">
            <p className="font-semibold text-xs">Size</p>
            <div className="grid grid-cols-6">
              {context?.data.currentProduct.size.map((e) => (
                <div
                  key={e}
                  onClick={() => setSize(e)}
                  className={`w-10 h-7 border flex items-center justify-center text-3xs cursor-pointer ${
                    e === size ? "bg-black text-white" : ""
                  }`}
                >
                  {e}
                </div>
              ))}
            </div>
            <AddOrRemoveQuantity
              quantity={quantity}
              setQuantity={setQuantity}
            />
          </div>
          <div className="flex gap-1 flex-col w-full mt-10 text-2xs">
            <div className="flex gap-2">
              <Image
                src="/devices/iMac/img/shipping_truck_black.svg"
                width={18}
                height={18}
              />
              <p>Free Shipping Over $50</p>
            </div>
            <div className="flex gap-2">
              <Image
                src="/devices/iMac/img/return_black.svg"
                width={15}
                height={15}
              />
              <p>Free Returns & Exchanges</p>
            </div>
          </div>
          <div
            onClick={() => {
              context.dispatchData({
                type: "ADD_TO_BAG",
                payload: {
                  product: {
                    brand: context.data.currentProduct.brand,
                    color: [productColor],
                    description: context.data.currentProduct.description,
                    price: context.data.currentProduct.price * quantity,
                    quantity: quantity,
                    size: [size.toString()],
                    src: context.data.currentProduct.src,
                    title: context.data.currentProduct.title,
                  },
                },
              });
            }}
            className="bg-black cursor-pointer text-white flex justify-center font-semibold gap-4 py-2 shadow-lg mt-10"
          >
            <p className=" text-2xs">ADD TO CARD</p>
            <Image src="/devices/iMac/arrow_rigth.svg" width={7} height={7} />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-5 mt-20 mb-5">
        <p className="font-bold text-xs">OTHER ARTICLE THA MAY INTERSET YOU</p>
      </div>
      <div className="grid grid-cols-4 gap-4 ">
        {context.data.product.slice(0, 4).map((e, index) => (
          <div key={index}>
            <ProductCard product={e} />
          </div>
        ))}
      </div>
    </div>
  ) : null;
}

export default Product;
