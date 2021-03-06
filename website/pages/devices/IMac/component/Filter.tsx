import React, { useState } from "react";
import { useData } from "../IMacContext";

function Filter() {
  const context = useData();
  const [size, setSize] = useState(context ? context.data.filters.size : [6.5]);
  const [color, setColor] = useState(
    context ? context.data.filters.color : ["bg-black"]
  );

  return (
    <div className="py-8 pr-24 space-y-3 text-2xs">
      <div className="space-y-2">
        <p className="font-extrabold text-5xl pb-10">Filter</p>
        <p
          onClick={() => {
            if (context)
              context.dispatchData({
                type: "CHANGE_FILTERS",
                payload: {
                  filters: { ...context.data.filters, brand: "ALL" },
                },
              });
          }}
          className={`hover:text-gray-500 cursor-pointer ${
            context && context.data.filters.brand === "ALL" ? "underline" : ""
          }`}
        >
          All
        </p>
        <p
          onClick={() => {
            if (context)
              context.dispatchData({
                type: "CHANGE_FILTERS",
                payload: {
                  filters: {
                    ...context.data.filters,
                    brand: "NIKE",
                  },
                },
              });
          }}
          className={`hover:text-gray-500 cursor-pointer ${
            context && context.data.filters.brand === "NIKE" ? "underline" : ""
          }`}
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
                    ...context.data.filters,
                    brand: "ADIDAS",
                  },
                },
              });
          }}
          className={`hover:text-gray-500 cursor-pointer ${
            context && context.data.filters.brand === "ADIDAS"
              ? "underline"
              : ""
          }`}
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
                    ...context.data.filters,
                    brand: "VANS",
                  },
                },
              });
          }}
          className={`hover:text-gray-500 cursor-pointer ${
            context && context.data.filters.brand === "VANS" ? "underline" : ""
          }`}
        >
          Vans
        </p>
        <p
          onClick={() => {
            if (context)
              context.dispatchData({
                type: "CHANGE_FILTERS",
                payload: {
                  filters: { ...context.data.filters, brand: "FILS" },
                },
              });
          }}
          className={`hover:text-gray-500 cursor-pointer ${
            context && context.data.filters.brand === "FILS" ? "underline" : ""
          }`}
        >
          Fils
        </p>
        <p
          onClick={() => {
            if (context)
              context.dispatchData({
                type: "CHANGE_FILTERS",
                payload: {
                  filters: { ...context.data.filters, brand: "OTHER" },
                },
              });
          }}
          className={`hover:text-gray-500 cursor-pointer ${
            context && context.data.filters.brand === "OTHER" ? "underline" : ""
          }`}
        >
          Others
        </p>
      </div>
      <div>
        <p className="font-extrabold text-lg">Type of shoes</p>
        <div className="flex items-start flex-col gap-2 mt-2">
          <p
            onClick={() => {
              if (context)
                context.dispatchData({
                  type: "CHANGE_FILTERS",
                  payload: {
                    filters: { ...context.data.filters, typeOfShoes: "ALL" },
                  },
                });
            }}
            className={`hover:text-gray-500 cursor-pointer ${
              context && context.data.filters.typeOfShoes === "ALL"
                ? "underline"
                : ""
            }`}
          >
            All
          </p>
          <p
            onClick={() => {
              if (context)
                context.dispatchData({
                  type: "CHANGE_FILTERS",
                  payload: {
                    filters: { ...context.data.filters, typeOfShoes: "RUNING" },
                  },
                });
            }}
            className={`hover:text-gray-500 cursor-pointer  ${
              context && context.data.filters.typeOfShoes === "RUNING"
                ? "underline"
                : ""
            }`}
          >
            Runing
          </p>
          <p
            onClick={() => {
              if (context)
                context.dispatchData({
                  type: "CHANGE_FILTERS",
                  payload: {
                    filters: {
                      ...context.data.filters,
                      typeOfShoes: "WALKING",
                    },
                  },
                });
            }}
            className={`hover:text-gray-500 cursor-pointer ${
              context && context.data.filters.typeOfShoes === "WALKING"
                ? "underline"
                : ""
            }`}
          >
            Walking
          </p>
        </div>
      </div>
      <p className="font-extrabold text-lg">Size</p>
      <div className="grid grid-cols-3">
        {context?.data.size.map((e) => (
          <div
            key={e}
            onClick={() => {
              if (size.includes(e)) {
                setSize(size.filter((element) => element !== e));
                context.dispatchData({
                  type: "CHANGE_FILTERS",
                  payload: {
                    filters: {
                      ...context.data.filters,
                      size: size.filter((element) => element !== e),
                    },
                  },
                });
              } else {
                setSize((prev) => {
                  context.dispatchData({
                    type: "CHANGE_FILTERS",
                    payload: {
                      filters: { ...context.data.filters, size: [...prev, e] },
                    },
                  });
                  return [...prev, e];
                });
              }
            }}
            className={`hover:bg-gray-50 w-10 h-7 border flex items-center justify-center text-3xs cursor-pointer ${
              size.includes(e) ? "bg-black text-white" : ""
            }`}
          >
            {e.toString()}
          </div>
        ))}
      </div>
      <p className="font-extrabold text-lg">Color</p>
      <div className="grid grid-cols-4 gap-y-1">
        {context?.data.color.map((e) => (
          <div
            key={e}
            onClick={() => {
              if (color.includes(e)) {
                setColor(color.filter((element) => element !== e));
                context.dispatchData({
                  type: "CHANGE_FILTERS",
                  payload: {
                    filters: {
                      ...context.data.filters,
                      color: color.filter((element) => element !== e),
                    },
                  },
                });
              } else {
                setColor((prev) => {
                  context.dispatchData({
                    type: "CHANGE_FILTERS",
                    payload: {
                      filters: {
                        ...context.data.filters,
                        color: [...prev, e],
                      },
                    },
                  });
                  return [...prev, e];
                });
              }
            }}
            className={`${e} ${e === "bg-white" ? "border" : ""} ${
              color.includes(e) ? "border-2 border-yellow-500" : ""
            } w-6 h-6 rounded-full `}
          ></div>
        ))}
      </div>
      <div>
        <p className="font-extrabold text-lg">PRICE</p>
        <input
          onChange={(e) =>
            context?.dispatchData({
              type: "CHANGE_PRICE_RANGE",
              payload: {
                filters: {
                  ...context.data.filters,
                  price: Number(e.target.value),
                },
              },
            })
          }
          className="slider-IMac w-full"
          type="range"
          step="50"
          min="0"
          max="500"
        />
        <div className="flex justify-between text-2xs">
          <p className="text-3xs">{context?.data.filters.price.toString()}</p>
          <p className="text-3xs">500</p>
        </div>
      </div>
    </div>
  );
}

export default Filter;
