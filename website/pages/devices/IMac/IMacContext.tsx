import React, { Dispatch, useReducer, useContext } from "react";

type typeOfShoes = "RUNING" | "WALKING" | "ALL";
export type allBrand = "NIKE" | "ADIDAS" | "FILS" | "VANS" | "OTHER" | "ALL";
type allSex = "WOMEN" | "MEN" | "ALL";

export interface IProduct {
  discount: number | undefined;
  id: number;
  title: string;
  price: number;
  description: string;
  quantity: number;
  src: string[];
  brand: allBrand;
  size: number[];
  color: string[];
  typeOfShoes: typeOfShoes[];
  sexe: allSex;
}

export interface IAction {
  type:
    | "CHANGE_PAGE"
    | "CHANGE_CURRENT_PRODUCT"
    | "ADD_TO_BAG"
    | "CHANGE_SHOW_BAG"
    | "ADD_QUANTITY_TO_BAG"
    | "REDUCE_QUANTITY_TO_BAG"
    | "REMOVE_PRODUCT_FROM_BAG"
    | "CHANGE_PRICE_RANGE"
    | "CHANGE_SHOW_LOGIN"
    | "CHANGE_FILTERS";
  payload: IPayload;
}

export interface IPayload {
  page?: number;
  product?: IProduct;
  showBag?: boolean;
  priceRange?: number;
  showLogin?: boolean;
  filters?: IFilters;
}

export interface IFilters {
  color: string[];
  size: number[];
  typeOfShoes: typeOfShoes;
  brand: string;
  sexe: allSex;
  price: number;
}

export interface IData {
  currentPageIndex: number;
  product: IProduct[];
  currentProduct: IProduct | undefined;
  bag: IProduct[];
  showBag: boolean;
  total: number;
  color: string[];
  size: number[];
  showLogin: boolean;
  filters: IFilters;
}

function calcTotal(product: IProduct[]): number {
  let total: number = 0;
  product.forEach((element) => {
    total = (total + element.price) * element.quantity;
  });
  return total;
}

function reducer(state: IData, action: IAction) {
  switch (action.type) {
    case "CHANGE_PAGE":
      return {
        ...state,
        currentPageIndex: action.payload.page!,
      };
    case "CHANGE_CURRENT_PRODUCT":
      return {
        ...state,
        currentProduct: action.payload.product!,
      };
    case "ADD_TO_BAG":
      return {
        ...state,
        bag: [...state.bag, action.payload.product!],
        showBag: true,
        total: calcTotal(state.bag.concat(action.payload.product!)),
      };
    case "CHANGE_SHOW_BAG":
      return {
        ...state,
        showBag: action.payload.showBag!,
        total: calcTotal(state.bag),
      };
    case "CHANGE_SHOW_LOGIN":
      return {
        ...state,
        showLogin: action.payload.showLogin!,
      };
    case "REDUCE_QUANTITY_TO_BAG":
      return {
        ...state,
        bag: addOrRemoveToBag(state, action, "REDUCE"),
        total: calcTotal(addOrRemoveToBag(state, action, "REDUCE")),
      };
    case "ADD_QUANTITY_TO_BAG":
      return {
        ...state,
        bag: addOrRemoveToBag(state, action, "ADD"),
        total: calcTotal(addOrRemoveToBag(state, action, "ADD")),
      };
    case "REMOVE_PRODUCT_FROM_BAG":
      return {
        ...state,
        bag: state.bag.filter((e) => e.title !== action.payload.product?.title),
        total: calcTotal(
          state.bag.filter((e) => e.title !== action.payload.product?.title)
        ),
      };
    case "CHANGE_PRICE_RANGE":
      return {
        ...state,
        filters: action.payload.filters!,
      };
    case "CHANGE_FILTERS":
      return {
        ...state,
        filters: action.payload.filters!,
      };
    default:
      return {
        ...state,
      };
  }
}

function addOrRemoveToBag(
  state: IData,
  action: IAction,
  operator: "ADD" | "REDUCE"
) {
  return state.bag.map((e) => {
    if (e.title === action.payload.product?.title) {
      return {
        ...e,
        quantity: operator === "ADD" ? e.quantity + 1 : e.quantity - 1,
      };
    } else {
      return e;
    }
  });
}

const myCOntext = React.createContext<{
  data: IData;
  dispatchData: Dispatch<IAction>;
} | null>(null);

export default function IMacContext({ children }: any) {
  const [data, dispatch] = useReducer(reducer, initialState);
  return (
    <myCOntext.Provider value={{ data: data, dispatchData: dispatch }}>
      {children}
    </myCOntext.Provider>
  );
}

const initialState: IData = {
  currentPageIndex: 0,
  currentProduct: undefined,
  bag: [],
  showBag: false,
  total: 0,
  showLogin: false,
  size: [6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
  color: [
    "bg-black",
    "bg-white",
    "bg-red-500",
    "bg-gray-500",
    "bg-yellow-500",
    "bg-green-500",
    "bg-pink-500",
  ],
  filters: {
    brand: "ALL",
    typeOfShoes: "ALL",
    color: [],
    size: [],
    sexe: "ALL",
    price: 500,
  },
  product: [
    {
      discount: undefined,
      id: 1,
      description:
        "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
      price: 77.8,
      quantity: 7,
      brand: "OTHER",
      src: [
        "/devices/iMac/img/product_1.png",
        "/devices/iMac/img/product_1.png",
        "/devices/iMac/img/product_1.png",
      ],
      title: "Quest 3 Shield",
      color: ["bg-green-500"],
      size: [6.5, 7.5, 8, 9, 10, 10.5, 13],
      typeOfShoes: ["WALKING"],
      sexe: "MEN",
    },
    {
      discount: 10,
      id: 2,
      description:
        "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
      price: 143.57,
      quantity: 1,
      brand: "NIKE",
      src: [
        "/devices/iMac/img/product_2.png",
        "/devices/iMac/img/product_2.png",
        "/devices/iMac/img/product_2.png",
        "/devices/iMac/img/product_2.png",
        "/devices/iMac/img/product_2.png",
      ],
      title: "Nike Zoom Rival XC",
      color: ["bg-red-500"],
      size: [6, 6.5, 7, 8.5, 9, 9.5],
      typeOfShoes: ["RUNING"],
      sexe: "ALL",
    },
    {
      discount: 50,
      id: 3,
      description:
        "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
      price: 149.56,
      quantity: 1,
      brand: "NIKE",
      src: [
        "/devices/iMac/img/product_3.png",
        "/devices/iMac/img/product_3.png",
      ],
      title: "Nike Quest 3 Shield",
      color: ["bg-gray-500"],
      size: [6.5, 7, 7.5, 8, 8.5, 9, 9.5],
      typeOfShoes: ["WALKING"],
      sexe: "ALL",
    },
    {
      discount: undefined,
      id: 4,
      description:
        "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
      price: 182.99,
      quantity: 1,
      brand: "NIKE",
      src: [
        "/devices/iMac/img/product_4.png",
        "/devices/iMac/img/product_4.png",
        "/devices/iMac/img/product_4.png",
        "/devices/iMac/img/product_4.png",
      ],
      title: "Nike Air Max Bella TR 3",
      color: ["bg-black"],
      size: [6, 6.5, 7, 8.5, 9, 9.5],
      sexe: "ALL",
      typeOfShoes: ["RUNING"],
    },
    {
      discount: undefined,
      id: 5,
      description:
        "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
      price: 117.44,
      quantity: 1,
      brand: "NIKE",
      src: [
        "/devices/iMac/img/product_5.png",
        "/devices/iMac/img/product_5.png",
        "/devices/iMac/img/product_5.png",
        "/devices/iMac/img/product_5.png",
        "/devices/iMac/img/product_5.png",
      ],
      title: "Air Jordan 1 Mid",
      color: ["bg-white", "bg-red-500"],
      size: [6, 6.5, 7, 8.5, 9, 9.5, 10],
      sexe: "MEN",
      typeOfShoes: ["WALKING"],
    },
    {
      discount: 10,
      id: 6,
      description:
        "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
      price: 169.99,
      quantity: 1,
      brand: "NIKE",
      src: ["/devices/iMac/img/product_6.png"],
      title: "Nike Metcon 6 AMP",
      color: ["bg-white", "bg-orange-500"],
      size: [6, 6.5, 7, 8.5, 9, 9.5, 10],
      sexe: "ALL",
      typeOfShoes: ["WALKING", "RUNING"],
    },
    {
      discount: undefined,
      id: 7,
      description:
        "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
      price: 148.88,
      quantity: 1,
      brand: "ADIDAS",
      src: [
        "/devices/iMac/img/product_7.png",
        "/devices/iMac/img/product_7.png",
        "/devices/iMac/img/product_7.png",
      ],
      title: "ULTRABOOST 4.0 DNA",
      color: ["bg-pink-500", "bg-blue-500"],
      size: [6, 6.5, 7, 8.5, 9, 9.5, 10],
      sexe: "ALL",
      typeOfShoes: ["WALKING", "RUNING"],
    },
    {
      discount: undefined,
      id: 8,
      description:
        "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
      price: 205.98,
      quantity: 1,
      brand: "FILS",
      src: [
        "/devices/iMac/img/product_8.png",
        "/devices/iMac/img/product_8.png",
        "/devices/iMac/img/product_8.png",
      ],
      title: "Disruptor II ",
      color: ["bg-white"],
      size: [6, 6.5, 7, 8.5, 9, 9.5, 10],
      sexe: "ALL",
      typeOfShoes: ["WALKING"],
    },
    {
      discount: undefined,
      id: 9,
      description:
        "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
      price: 89.45,
      quantity: 1,
      brand: "VANS",
      src: [
        "/devices/iMac/img/product_9.png",
        "/devices/iMac/img/product_9.png",
        "/devices/iMac/img/product_9.png",
        "/devices/iMac/img/product_9.png",
        "/devices/iMac/img/product_9.png",
      ],
      title: "Old Skool",
      color: ["bg-red-500"],
      size: [6, 6.5, 7, 8.5, 9, 9.5, 10],
      sexe: "ALL",
      typeOfShoes: ["WALKING"],
    },
    {
      discount: 50,
      id: 10,
      description:
        "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
      price: 175.48,
      quantity: 1,
      brand: "NIKE",
      src: [
        "/devices/iMac/img/product_10.png",
        "/devices/iMac/img/product_10.png",
      ],
      title: "Nike Free Metcon",
      color: ["bg-blue-500"],
      size: [6, 6.5, 7, 8.5, 9, 9.5, 10],
      sexe: "ALL",
      typeOfShoes: ["WALKING", "RUNING"],
    },
    {
      discount: 80,
      id: 11,
      description:
        "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
      price: 127.69,
      quantity: 1,
      brand: "NIKE",
      src: [
        "/devices/iMac/img/product_11.png",
        "/devices/iMac/img/product_11.png",
        "/devices/iMac/img/product_11.png",
      ],
      title: "Nike Flex Essential TR Leather",
      color: ["bg-gray-500"],
      size: [6, 6.5, 7, 8.5, 9, 9.5, 10],
      sexe: "ALL",
      typeOfShoes: ["WALKING", "RUNING"],
    },
    {
      discount: undefined,
      id: 12,
      description:
        "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
      price: 189.32,
      quantity: 1,
      brand: "NIKE",
      src: [
        "/devices/iMac/img/product_12.png",
        "/devices/iMac/img/product_12.png",
        "/devices/iMac/img/product_12.png",
        "/devices/iMac/img/product_12.png",
        "/devices/iMac/img/product_12.png",
      ],
      title: "Nike React Escape Run",
      color: ["bg-gray-500"],
      size: [6, 6.5, 7, 8.5, 9, 9.5, 10],
      sexe: "ALL",
      typeOfShoes: ["WALKING"],
    },
    {
      discount: 10,
      id: 13,
      description:
        "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
      price: 215.99,
      quantity: 1,
      brand: "NIKE",
      src: [
        "/devices/iMac/img/product_13.png",
        "/devices/iMac/img/product_13.png",
        "/devices/iMac/img/product_13.png",
      ],
      title: "Nike Air Force",
      color: ["bg-white"],
      size: [6, 6.5, 7, 8.5, 9, 9.5, 10],
      sexe: "ALL",
      typeOfShoes: ["WALKING"],
    },
    {
      discount: undefined,
      id: 14,
      description:
        "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
      price: 198.99,
      quantity: 1,
      brand: "NIKE",
      src: ["/devices/iMac/img/product_14.png"],
      title: "Nike Air Max Plus Premium",
      color: ["bg-white"],
      size: [6, 6.5, 7, 8.5, 9, 9.5, 10],
      sexe: "MEN",
      typeOfShoes: ["WALKING"],
    },
  ],
};
export const useData = () => {
  return useContext(myCOntext);
};
