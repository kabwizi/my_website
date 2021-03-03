import React from "react";
import Image from "next/image";
import { useData } from "../IMacContext";

function Navbar() {
  const context = useData();
  return (
    <div className="px-5 relative flex justify-between items-center  z-30">
      <h1
        onClick={() =>
          context?.dispatchData({ type: "CHANGE_PAGE", payload: { page: 0 } })
        }
        className="font-black text-7xl cursor-pointer"
      >
        SNKR
      </h1>
      <div className="flex gap-8 text-2xs font-semibold">
        <ul className="flex gap-7">
          <li className="menuParent">
            <div
              onClick={() =>
                context?.dispatchData({
                  type: "CHANGE_PAGE",
                  payload: { page: 3 },
                })
              }
            >
              <p
                className="cursor-pointer"
                onClick={() =>
                  context?.dispatchData({
                    type: "CHANGE_PAGE",
                    payload: { page: 3 },
                  })
                }
              >
                SHOP
              </p>
            </div>
            <ul className="menuParentChild shadow-lg overflow-hidden">
              <li>
                <div>
                  <p className="font-bold">RUNNING</p>
                  <div className="relative w-36 h-20 mt-2">
                    <Image
                      src="/devices/iMac/img/runing_collection_menu.png"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="text-gray-500 space-y-1 mt-1">
                    <p
                      onClick={() => {
                        if (context)
                          context.dispatchData({
                            type: "CHANGE_FILTERS",
                            payload: {
                              filters: {
                                brand: "NIKE",
                                color: context.data.filters.color,
                                sexe: context.data.filters.sexe,
                                size: context.data.filters.size,
                                typeOfShoes: "RUNING",
                              },
                            },
                          });
                        context?.dispatchData({
                          type: "CHANGE_PAGE",
                          payload: { page: 3 },
                        });
                      }}
                      className="border-white cursor-pointer  border-b hover:border-gray-200 "
                    >
                      Nike
                    </p>
                    <p
                      onClick={() => {
                        if (context)
                          context.dispatchData({
                            type: "CHANGE_FILTERS",
                            payload: {
                              filters: {
                                brand: "ADIDAS",
                                color: context.data.filters.color,
                                sexe: context.data.filters.sexe,
                                size: context.data.filters.size,
                                typeOfShoes: "RUNING",
                              },
                            },
                          });
                        context?.dispatchData({
                          type: "CHANGE_PAGE",
                          payload: { page: 3 },
                        });
                      }}
                      className="border-white border-b cursor-pointer hover:border-gray-200 "
                    >
                      Adidas
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <p className="font-bold">WALKING</p>
                  <div className="relative w-36 h-20 mt-2">
                    <Image
                      src="/devices/iMac/img/walking_collection_menu.png"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="text-gray-500 space-y-1 mt-1">
                    <p
                      onClick={() => {
                        if (context)
                          context.dispatchData({
                            type: "CHANGE_FILTERS",
                            payload: {
                              filters: {
                                brand: "NIKE",
                                color: context.data.filters.color,
                                sexe: context.data.filters.sexe,
                                size: context.data.filters.size,
                                typeOfShoes: "WALKING",
                              },
                            },
                          });
                        context?.dispatchData({
                          type: "CHANGE_PAGE",
                          payload: { page: 3 },
                        });
                      }}
                      className="border-white cursor-pointer border-b hover:border-gray-200 "
                    >
                      Nike
                    </p>
                    <p
                      onClick={() => {
                        if (context)
                          context.dispatchData({
                            type: "CHANGE_FILTERS",
                            payload: {
                              filters: {
                                brand: "ADIDAS",
                                color: context.data.filters.color,
                                sexe: context.data.filters.sexe,
                                size: context.data.filters.size,
                                typeOfShoes: "WALKING",
                              },
                            },
                          });
                        context?.dispatchData({
                          type: "CHANGE_PAGE",
                          payload: { page: 3 },
                        });
                      }}
                      className="border-white border-b cursor-pointer hover:border-gray-200 "
                    >
                      Adidas
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <p className="font-bold">ALL</p>
                <div className="text-gray-500 space-y-1 mt-1">
                  <p
                    onClick={() => {
                      if (context)
                        context.dispatchData({
                          type: "CHANGE_FILTERS",
                          payload: {
                            filters: {
                              brand: "NIKE",
                              color: context.data.filters.color,
                              sexe: context.data.filters.sexe,
                              size: context.data.filters.size,
                              typeOfShoes: "ALL",
                            },
                          },
                        });
                      context?.dispatchData({
                        type: "CHANGE_PAGE",
                        payload: { page: 3 },
                      });
                    }}
                    className="border-white cursor-pointer border-b hover:border-gray-200 "
                  >
                    Nike
                  </p>
                  <p
                    onClick={() => {
                      if (context)
                        context.dispatchData({
                          type: "CHANGE_FILTERS",
                          payload: {
                            filters: {
                              brand: "ADIDAS",
                              color: context.data.filters.color,
                              sexe: context.data.filters.sexe,
                              size: context.data.filters.size,
                              typeOfShoes: "ALL",
                            },
                          },
                        });
                      context?.dispatchData({
                        type: "CHANGE_PAGE",
                        payload: { page: 3 },
                      });
                    }}
                    className="border-white border-b cursor-pointer hover:border-gray-200 "
                  >
                    Adidas
                  </p>
                  <p
                    onClick={() => {
                      if (context)
                        context.dispatchData({
                          type: "CHANGE_FILTERS",
                          payload: {
                            filters: {
                              brand: "VANS",
                              color: context.data.filters.color,
                              sexe: context.data.filters.sexe,
                              size: context.data.filters.size,
                              typeOfShoes: "ALL",
                            },
                          },
                        });
                      context?.dispatchData({
                        type: "CHANGE_PAGE",
                        payload: { page: 3 },
                      });
                    }}
                    className="border-white border-b cursor-pointer hover:border-gray-200 "
                  >
                    Vans
                  </p>
                  <p
                    onClick={() => {
                      if (context)
                        context.dispatchData({
                          type: "CHANGE_FILTERS",
                          payload: {
                            filters: {
                              brand: "FILS",
                              color: context.data.filters.color,
                              sexe: context.data.filters.sexe,
                              size: context.data.filters.size,
                              typeOfShoes: "ALL",
                            },
                          },
                        });
                      context?.dispatchData({
                        type: "CHANGE_PAGE",
                        payload: { page: 3 },
                      });
                    }}
                    className="border-white border-b cursor-pointer hover:border-gray-200 "
                  >
                    Fils
                  </p>
                  <p
                    onClick={() => {
                      if (context)
                        context.dispatchData({
                          type: "CHANGE_FILTERS",
                          payload: {
                            filters: {
                              brand: "OTHER",
                              color: context.data.filters.color,
                              sexe: context.data.filters.sexe,
                              size: context.data.filters.size,
                              typeOfShoes: "ALL",
                            },
                          },
                        });
                      context?.dispatchData({
                        type: "CHANGE_PAGE",
                        payload: { page: 3 },
                      });
                    }}
                    className="border-white border-b cursor-pointer hover:border-gray-200 "
                  >
                    Others
                  </p>
                </div>
              </li>
            </ul>
          </li>
          <li
            onClick={() =>
              context?.dispatchData({
                type: "CHANGE_PAGE",
                payload: { page: 2 },
              })
            }
            className="cursor-pointer"
          >
            CHECKOUT
          </li>
          <li
            onClick={() =>
              context?.dispatchData({
                type: "CHANGE_SHOW_LOGIN",
                payload: { showLogin: true },
              })
            }
            className="relative cursor-pointer"
          >
            <Image src="/devices/iMac/user_black.svg" width={12} height={12} />
          </li>
          <li
            onClick={() => {
              if (context?.data.currentPageIndex != 2) {
                context?.dispatchData({
                  type: "CHANGE_SHOW_BAG",
                  payload: { showBag: true },
                });
              }
            }}
            className="relative cursor-pointer"
          >
            <Image src="/devices/iMac/bag_black.svg" width={12} height={12} />
            <div className="bg-black rounded-full flex items-center justify-center w-4 h-4 absolute -top-3 -right-3">
              <p className="text-white text-3xs">
                {context?.data.bag.length.toString()}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
