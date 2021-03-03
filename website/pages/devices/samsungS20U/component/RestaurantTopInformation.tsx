import React from "react";
import Image from "next/image";
import { useData } from "../SamsungS20UContext";

function RestaurantTopInformation() {
  const context = useData();
  return (
    <div className="relative text-white">
      {context?.data.currentRestaurant ? (
        <div>
          <Image
            src={context.data.currentRestaurant.src}
            height={200}
            width={300}
            objectFit="cover"
          />
          <div className="bg-gradient-to-t from-gray-900 p-2 absolute inset-0 w-full h-full flex items-end">
            <div className="w-full">
              <h1 className="font-bold text-xl">
                {context?.data.currentRestaurant.title}
              </h1>
              <div className="flex items-center gap-2">
                <div>
                  <Image
                    src="/devices/common/star_full.svg"
                    height={13}
                    width={13}
                  />
                  <Image
                    src="/devices/common/star_full.svg"
                    height={13}
                    width={13}
                  />
                  <Image
                    src="/devices/common/star_full.svg"
                    height={13}
                    width={13}
                  />
                  <Image
                    src="/devices/common/star_full.svg"
                    height={13}
                    width={13}
                  />
                  <Image
                    src="/devices/common/star_half_white.svg"
                    height={13}
                    width={13}
                  />
                </div>
                <p className="text-xs">142 reviews</p>
              </div>
              <div className="flex justify-between w-full">
                <div className="flex gap-2">
                  <Image
                    src="/devices/samsungS20U/location_white.svg"
                    height={8}
                    width={8}
                  />
                  <p className="text-xs">
                    {context?.data.currentRestaurant.address}
                  </p>
                </div>
                <div className="text-xs">
                  {context.data.currentRestaurant.km}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default RestaurantTopInformation;
