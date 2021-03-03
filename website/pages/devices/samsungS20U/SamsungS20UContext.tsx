import React, { Dispatch, useContext, useReducer } from "react";

interface IPayload {
  id?: string;
  page?: number;
  restaurant?: IRestaurant;
  menu?: IMenu;
  lastDigit?: string;
  showAddCreditCardValue?: boolean;
  card?: ICreditCard;
}
export interface ICreditCard {
  name: string;
  lastDigit: string;
  startDate: string;
  endDate: string;
  cardType: "VISA" | "MASTERCARD";
}

export interface IUser {
  firstName: string;
  lastName: string;
  creditCard: ICreditCard[];
  creditCardActiveLastDigit: string;
}

export interface IAction {
  type:
    | "CHANGE_PAGE"
    | "CHANGE_CURRENT_RESTAURANT"
    | "BUY_MENU"
    | "ADD_QUANTITY"
    | "REDUCE_QUANTITY"
    | "ADD_PAST_PURCHASE"
    | "CHANGE_ACTIVE_CREDIT_CARD"
    | "REMOVE_WALLET"
    | "SHOW_ADD_CREDIT_CARD"
    | "ADD_NEW_CARD";
  action: IPayload;
}

export interface IMenu {
  title: string;
  rating: number;
  ingredientList: string[];
  src: string;
  price: number;
  quantity: number;
}

export interface IRestaurant {
  id: string;
  title: string;
  address: string;
  rating: number;
  menuList: IMenu[];
  src: string;
  km: string;
  location: {
    latitude: number;
    longitude: number;
  };
}

export interface IData {
  data: IRestaurant[];
  currentPageIndex: number;
  currentRestaurant: IRestaurant | undefined;
  menuToBuy: IMenu | undefined;
  pastPurchase: IMenu[];
  user: IUser;
  showAddCreditCard: boolean;
}

const myContext = React.createContext<
  | {
      data: IData;
      dispatchData: Dispatch<IAction>;
    }
  | undefined
>(undefined);

export default function SamsungS20UContext({ children }: any) {
  function reducer(state: IData, action: IAction) {
    switch (action.type) {
      case "CHANGE_PAGE":
        return { ...state, currentPageIndex: action.action.page! };
      case "CHANGE_CURRENT_RESTAURANT":
        return { ...state, currentRestaurant: action.action.restaurant! };
      case "BUY_MENU":
        return { ...state, menuToBuy: action.action.menu! };
      case "ADD_QUANTITY":
        return {
          ...state,
          menuToBuy: {
            ...state.menuToBuy!,
            quantity: state.menuToBuy?.quantity! + 1,
          },
        };
      case "REDUCE_QUANTITY":
        if (state.menuToBuy?.quantity! > 1) {
          return {
            ...state,
            menuToBuy: {
              ...state.menuToBuy!,
              quantity: state.menuToBuy?.quantity! - 1,
            },
          };
        } else {
          return { ...state };
        }
      case "ADD_PAST_PURCHASE":
        return {
          ...state,
          pastPurchase: state.pastPurchase.concat(action.action.menu!),
        };
      case "CHANGE_ACTIVE_CREDIT_CARD":
        return {
          ...state,
          user: {
            ...state.user,
            creditCardActiveLastDigit: action.action.lastDigit!,
          },
        };
      case "REMOVE_WALLET":
        return {
          ...state,
          user: {
            ...state.user,
            creditCard: state.user.creditCard.filter(
              (e) => e.lastDigit !== action.action.lastDigit
            ),
          },
        };
      case "SHOW_ADD_CREDIT_CARD":
        return {
          ...state,
          showAddCreditCard: action.action.showAddCreditCardValue!,
        };
      case "ADD_NEW_CARD":
        return {
          ...state,
          user: {
            ...state.user,
            creditCard: action.action.card
              ? state.user.creditCard.concat({
                  cardType: action.action.card.cardType,
                  lastDigit: action.action.card.lastDigit,
                  name: action.action.card.name,
                  startDate: action.action.card.startDate,
                  endDate: action.action.card.endDate,
                })
              : state.user.creditCard,
          },
        };
      default:
        return { ...state };
    }
  }

  const currentUser: IUser = {
    firstName: "Ana",
    lastName: "Gouchi-Pou",
    creditCardActiveLastDigit: "4758",
    creditCard: [
      {
        cardType: "VISA",
        name: "ANA GOUCHI POU",
        lastDigit: "4758",
        startDate: "04/20",
        endDate: "04/25",
      },
      {
        cardType: "MASTERCARD",
        name: "ANA GOUCHI POU",
        lastDigit: "8192",
        startDate: "08/20",
        endDate: "08/25",
      },
    ],
  };

  const initialState: IData = {
    user: currentUser,
    currentPageIndex: 1,
    currentRestaurant: undefined,
    menuToBuy: undefined,
    pastPurchase: [],
    showAddCreditCard: false,
    data: [
      /** restaurant 1*/
      {
        id: "restaurant_1",
        address: "333 murray st Ottawa",
        km: "3.1km",
        location: { latitude: 45.460122, longitude: -75.757143 },
        rating: 4,
        src: "/devices/samsungS20U/img/restaurant_1.png",
        title: "Le Matignon",
        menuList: [
          {
            title: "Sandwitch au poulet",
            src: "/devices/samsungS20U/img/menu_1.png",
            price: 15,
            rating: 4,
            ingredientList: ["Poulet", "Mayounnaise"],
            quantity: 1,
          },
          {
            title: "Pizza du mali",
            src: "/devices/samsungS20U/img/menu_2.png",
            price: 25,
            rating: 4,
            ingredientList: ["Poulet", "Mayounnaise"],
            quantity: 1,
          },
          {
            title: "Sandwitch au poulet",
            src: "/devices/samsungS20U/img/menu_3.png",
            price: 15,
            rating: 4,
            ingredientList: ["Poulet", "Mayounnaise"],
            quantity: 1,
          },
          {
            title: "Sandwitch au poulet",
            src: "/devices/samsungS20U/img/menu_4.png",
            price: 15,
            rating: 4,
            ingredientList: ["Poulet", "Mayounnaise"],
            quantity: 1,
          },
          {
            title: "Sandwitch au poulet",
            src: "/devices/samsungS20U/img/menu_5.png",
            price: 15,
            rating: 4,
            ingredientList: ["Poulet", "Mayounnaise"],
            quantity: 1,
          },
          {
            title: "Sandwitch au poulet",
            src: "/devices/samsungS20U/img/menu_6.png",
            price: 15,
            rating: 4,
            ingredientList: ["Poulet", "Mayounnaise"],
            quantity: 1,
          },
        ],
      },
      /** restaurant 2*/
      {
        id: "restaurant_2",
        address: "333 murray st Ottawa",
        km: "3.1km",
        location: { latitude: 45.452175, longitude: -75.755212 },
        rating: 4,
        src: "/devices/samsungS20U/img/restaurant_2.png",
        title: "Le Matignon",
        menuList: [
          {
            title: "Sandwitch au poulet",
            src: "/devices/samsungS20U/img/menu_1.png",
            price: 15,
            rating: 4,
            ingredientList: ["Poulet", "Mayounnaise"],
            quantity: 1,
          },
          {
            title: "Pizza du mali",
            src: "/devices/samsungS20U/img/menu_2.png",
            price: 25,
            rating: 4,
            ingredientList: ["Poulet", "Mayounnaise"],
            quantity: 1,
          },
          {
            title: "Sandwitch au poulet",
            src: "/devices/samsungS20U/img/menu_3.png",
            price: 15,
            rating: 4,
            ingredientList: ["Poulet", "Mayounnaise"],
            quantity: 1,
          },
          {
            title: "Sandwitch au poulet",
            src: "/devices/samsungS20U/img/menu_4.png",
            price: 15,
            rating: 4,
            ingredientList: ["Poulet", "Mayounnaise"],
            quantity: 1,
          },
          {
            title: "Sandwitch au poulet",
            src: "/devices/samsungS20U/img/menu_5.png",
            price: 15,
            rating: 4,
            ingredientList: ["Poulet", "Mayounnaise"],
            quantity: 1,
          },
          {
            title: "Sandwitch au poulet",
            src: "/devices/samsungS20U/img/menu_6.png",
            price: 15,
            rating: 4,
            ingredientList: ["Poulet", "Mayounnaise"],
            quantity: 1,
          },
        ],
      },
      /** restaurant 3*/
      {
        id: "restaurant_3",
        address: "333 murray st Ottawa",
        km: "3.1km",
        location: { latitude: 45.436247, longitude: -75.721073 },
        rating: 4,
        src: "/devices/samsungS20U/img/restaurant_3.png",
        title: "Le Matignon",
        menuList: [
          {
            title: "Sandwitch au poulet",
            src: "/devices/samsungS20U/img/menu_1.png",
            price: 15,
            rating: 4,
            ingredientList: ["Poulet", "Mayounnaise"],
            quantity: 1,
          },
          {
            title: "Pizza du mali",
            src: "/devices/samsungS20U/img/menu_2.png",
            price: 25,
            rating: 4,
            ingredientList: ["Poulet", "Mayounnaise"],
            quantity: 1,
          },
          {
            title: "Sandwitch au poulet",
            src: "/devices/samsungS20U/img/menu_3.png",
            price: 15,
            rating: 4,
            ingredientList: ["Poulet", "Mayounnaise"],
            quantity: 1,
          },
          {
            title: "Sandwitch au poulet",
            src: "/devices/samsungS20U/img/menu_4.png",
            price: 15,
            rating: 4,
            ingredientList: ["Poulet", "Mayounnaise"],
            quantity: 1,
          },
          {
            title: "Sandwitch au poulet",
            src: "/devices/samsungS20U/img/menu_5.png",
            price: 15,
            rating: 4,
            ingredientList: ["Poulet", "Mayounnaise"],
            quantity: 1,
          },
          {
            title: "Sandwitch au poulet",
            src: "/devices/samsungS20U/img/menu_6.png",
            price: 15,
            rating: 4,
            ingredientList: ["Poulet", "Mayounnaise"],
            quantity: 1,
          },
        ],
      },
      /** restaurant 4*/
      {
        id: "restaurant_4",
        address: "333 murray st Ottawa",
        km: "3.1km",
        location: { latitude: 45.430457, longitude: -75.711471 },
        rating: 4,
        src: "/devices/samsungS20U/img/restaurant_4.png",
        title: "Le Matignon",
        menuList: [
          {
            title: "Sandwitch au poulet",
            src: "/devices/samsungS20U/img/menu_1.png",
            price: 15,
            rating: 4,
            ingredientList: ["Poulet", "Mayounnaise"],
            quantity: 1,
          },
          {
            title: "Pizza du mali",
            src: "/devices/samsungS20U/img/menu_2.png",
            price: 25,
            rating: 4,
            ingredientList: ["Poulet", "Mayounnaise"],
            quantity: 1,
          },
          {
            title: "Sandwitch au poulet",
            src: "/devices/samsungS20U/img/menu_3.png",
            price: 15,
            rating: 4,
            ingredientList: ["Poulet", "Mayounnaise"],
            quantity: 1,
          },
          {
            title: "Sandwitch au poulet",
            src: "/devices/samsungS20U/img/menu_4.png",
            price: 15,
            rating: 4,
            ingredientList: ["Poulet", "Mayounnaise"],
            quantity: 1,
          },
          {
            title: "Sandwitch au poulet",
            src: "/devices/samsungS20U/img/menu_5.png",
            price: 15,
            rating: 4,
            ingredientList: ["Poulet", "Mayounnaise"],
            quantity: 1,
          },
          {
            title: "Sandwitch au poulet",
            src: "/devices/samsungS20U/img/menu_6.png",
            price: 15,
            rating: 4,
            ingredientList: ["Poulet", "Mayounnaise"],
            quantity: 1,
          },
        ],
      },
      /** restaurant 5*/
      {
        id: "restaurant_5",
        address: "333 murray st Ottawa",
        km: "3.1km",
        location: { latitude: 45.431248, longitude: -75.689638 },
        rating: 4,
        src: "/devices/samsungS20U/img/restaurant_5.png",
        title: "Le Matignon",
        menuList: [
          {
            title: "Sandwitch au poulet",
            src: "/devices/samsungS20U/img/menu_1.png",
            price: 15,
            rating: 4,
            ingredientList: ["Poulet", "Mayounnaise"],
            quantity: 1,
          },
          {
            title: "Pizza du mali",
            src: "/devices/samsungS20U/img/menu_2.png",
            price: 25,
            rating: 4,
            ingredientList: ["Poulet", "Mayounnaise"],
            quantity: 1,
          },
          {
            title: "Sandwitch au poulet",
            src: "/devices/samsungS20U/img/menu_3.png",
            price: 15,
            rating: 4,
            ingredientList: ["Poulet", "Mayounnaise"],
            quantity: 1,
          },
          {
            title: "Sandwitch au poulet",
            src: "/devices/samsungS20U/img/menu_4.png",
            price: 15,
            rating: 4,
            ingredientList: ["Poulet", "Mayounnaise"],
            quantity: 1,
          },
          {
            title: "Sandwitch au poulet",
            src: "/devices/samsungS20U/img/menu_5.png",
            price: 15,
            rating: 4,
            ingredientList: ["Poulet", "Mayounnaise"],
            quantity: 1,
          },
          {
            title: "Sandwitch au poulet",
            src: "/devices/samsungS20U/img/menu_6.png",
            price: 15,
            rating: 4,
            ingredientList: ["Poulet", "Mayounnaise"],
            quantity: 1,
          },
        ],
      },
      /** restaurant 6*/
      {
        id: "restaurant_6",
        address: "333 murray st Ottawa",
        km: "3.1km",
        location: { latitude: 45.416843, longitude: -75.696494 },
        rating: 4,
        src: "/devices/samsungS20U/img/restaurant_6.png",
        title: "Le Matignon",
        menuList: [
          {
            title: "Sandwitch au poulet",
            src: "/devices/samsungS20U/img/menu_1.png",
            price: 15,
            rating: 4,
            ingredientList: ["Poulet", "Mayounnaise"],
            quantity: 1,
          },
          {
            title: "Pizza du mali",
            src: "/devices/samsungS20U/img/menu_2.png",
            price: 25,
            rating: 4,
            ingredientList: ["Poulet", "Mayounnaise"],
            quantity: 1,
          },
          {
            title: "Sandwitch au poulet",
            src: "/devices/samsungS20U/img/menu_3.png",
            price: 15,
            rating: 4,
            ingredientList: ["Poulet", "Mayounnaise"],
            quantity: 1,
          },
          {
            title: "Sandwitch au poulet",
            src: "/devices/samsungS20U/img/menu_4.png",
            price: 15,
            rating: 4,
            ingredientList: ["Poulet", "Mayounnaise"],
            quantity: 1,
          },
          {
            title: "Sandwitch au poulet",
            src: "/devices/samsungS20U/img/menu_5.png",
            price: 15,
            rating: 4,
            ingredientList: ["Poulet", "Mayounnaise"],
            quantity: 1,
          },
          {
            title: "Sandwitch au poulet",
            src: "/devices/samsungS20U/img/menu_6.png",
            price: 15,
            rating: 4,
            ingredientList: ["Poulet", "Mayounnaise"],
            quantity: 1,
          },
        ],
      },
      /** restaurant 7*/
      {
        id: "restaurant_7",
        address: "333 murray st Ottawa",
        km: "3.1km",
        location: { latitude: 45.482558, longitude: -75.704026 },
        rating: 4,
        src: "/devices/samsungS20U/img/restaurant_7.png",
        title: "Le Matignon",
        menuList: [
          {
            title: "Sandwitch au poulet",
            src: "/devices/samsungS20U/img/menu_1.png",
            price: 15,
            rating: 4,
            ingredientList: ["Poulet", "Mayounnaise"],
            quantity: 1,
          },
          {
            title: "Pizza du mali",
            src: "/devices/samsungS20U/img/menu_2.png",
            price: 25,
            rating: 4,
            ingredientList: ["Poulet", "Mayounnaise"],
            quantity: 1,
          },
          {
            title: "Sandwitch au poulet",
            src: "/devices/samsungS20U/img/menu_3.png",
            price: 15,
            rating: 4,
            ingredientList: ["Poulet", "Mayounnaise"],
            quantity: 1,
          },
          {
            title: "Sandwitch au poulet",
            src: "/devices/samsungS20U/img/menu_4.png",
            price: 15,
            rating: 4,
            ingredientList: ["Poulet", "Mayounnaise"],
            quantity: 1,
          },
          {
            title: "Sandwitch au poulet",
            src: "/devices/samsungS20U/img/menu_5.png",
            price: 15,
            rating: 4,
            ingredientList: ["Poulet", "Mayounnaise"],
            quantity: 1,
          },
          {
            title: "Sandwitch au poulet",
            src: "/devices/samsungS20U/img/menu_6.png",
            price: 15,
            rating: 4,
            ingredientList: ["Poulet", "Mayounnaise"],
            quantity: 1,
          },
        ],
      },
    ],
  };

  const [data, dispatch] = useReducer(reducer, initialState);
  return (
    <myContext.Provider value={{ data, dispatchData: dispatch }}>
      {children}
    </myContext.Provider>
  );
}

export const useData = () => {
  return useContext(myContext);
};
