import React, { Dispatch, useReducer, useContext } from "react";

export interface IUserComment {
  firstName: string;
  lastName: string;
  email: string;
  src: string | null;
}

export interface IComment {
  comment: string;
  date: Date;
  user: IUserComment;
}

export interface IRecipe {
  user: IUser;
  date: Date;
  src: string;
  title: string;
  description: string;
  tags: string[];
  ingredients: string[];
  category: string[];
  level: "Easy" | "Meduim" | "Hard";
  time: string;
  step: string[];
  type: "LUNCH" | "DINNER" | "BREAKFAST" | "HORIZONTAL";
  like: number;
  print: number;
  galery: string[];
  comment: IComment[];
}

export interface IUser {
  src: string;
  firstName: string;
  lastName: string;
}

export interface IPayload {
  page?: number;
  recipe?: IRecipe;
  comment?: IComment;
}

export interface IAction {
  type: "CHANGE_PAGE" | "CHANGE_RECIPE" | "ADD_COMMENT" | "ADD_LIKE";
  payload: IPayload;
}

export interface IData {
  currentPageIndex: number;
  currentRecipe: IRecipe | undefined;
  recipes: IRecipe[];
  admin: IUser;
}

function reducer(state: IData, action: IAction) {
  switch (action.type) {
    case "CHANGE_PAGE":
      return { ...state, currentPageIndex: action.payload.page! };
    case "CHANGE_RECIPE":
      return { ...state, currentRecipe: action.payload.recipe! };
    case "ADD_COMMENT":
      return {
        ...state,
        recipes: state.recipes.map((e) => {
          if (e.title === action.payload.recipe?.title) {
            return {
              ...e,
              comment: [...e.comment, action.payload.comment!],
            };
          } else {
            return e;
          }
        }),
      };
    case "ADD_LIKE":
      return {
        ...state,
        recipes: state.recipes.map((e) => {
          if (e.title === action.payload.recipe?.title) {
            return {
              ...e,
              like: e.like + 1,
            };
          } else {
            return e;
          }
        }),
      };
    default:
      return { ...state };
  }
}

const myContext = React.createContext<{
  data: IData;
  dispatchData: Dispatch<IAction>;
} | null>(null);

export default function MackBookProContext({ children }: any) {
  const [data, dispatch] = useReducer(reducer, initialState);

  return (
    <myContext.Provider value={{ data, dispatchData: dispatch }}>
      {children}
    </myContext.Provider>
  );
}

const admin: IUser = {
  firstName: "Ana-Maria",
  lastName: "Pou",
  src: "/devices/macBookPro/img/macBookPro_admin_1.png",
};

const description = `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br/>
 It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br/><br/>
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.<br/>
Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</br>
Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>`;
const steps = [
  "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
  "Lorem ipsum dolor sit, adipiscing elit.",
  "There are many variations of passages of Lorem Ipsum available, but the majority .",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna morbi nunc diam neque porttitor consectetur.",
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
];
const tags = ["LUNCH", "DINNER", "BREAKFAST", "HORIZONTAL"];
const ingredients = [
  "Salt",
  "Pepper",
  "Tuna",
  "Tomato sauce",
  "Olive oil",
  "All-purpose flour",
  "Granulated sugar",
  "Split peas",
  "Soy sauce",
  "Paprika",
  "Mayonnaise",
];
const category = ["lunch", "soup", "eat"];
const comment = [
  {
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna morbi nunc diam neque porttitor",
    date: new Date("2021-01-01T10:00:00"),
    user: {
      email: "someEmail@gmail.com",
      firstName: "Yliun",
      lastName: "Ni",
      src: "/devices/macBookPro/img/user_picture_1.png",
    },
  },
  {
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna morbi nunc diam neque porttitor",
    date: new Date("2021-01-01T10:00:00"),
    user: {
      email: "someEmail@gmail.com",
      firstName: "Philip",
      lastName: "Ambroise",
      src: "/devices/macBookPro/img/user_picture_2.png",
    },
  },
];

const initialState: IData = {
  currentPageIndex: 0,
  currentRecipe: undefined,
  admin: admin,
  recipes: [
    /**breackfast */
    {
      user: admin,
      src: "/devices/macBookPro/img/breakfirst_1.png",
      date: new Date("2021-01-01T09:00:00"),
      description: description,
      level: "Easy",
      title: "Toasted bread egg",
      time: "35min",
      type: "BREAKFAST",
      step: steps,
      tags: tags,
      category: category,
      ingredients: ingredients,
      like: 41,
      print: 12,
      galery: [
        "/devices/macBookPro/img/description_1.png",
        "/devices/macBookPro/img/description_2.png",
      ],
      comment: comment,
    },
    {
      user: admin,
      src: "/devices/macBookPro/img/breakfirst_2.png",
      date: new Date("2021-01-01T10:00:00"),
      description: description,
      level: "Easy",
      tags: tags,
      category: category,
      ingredients: ingredients,
      title: "Fruity strawberry waffle",
      time: "35min",
      type: "BREAKFAST",
      step: steps,
      like: 41,
      print: 12,
      galery: [
        "/devices/macBookPro/img/description_1.png",
        "/devices/macBookPro/img/description_2.png",
      ],
      comment: comment,
    },
    {
      user: admin,
      src: "/devices/macBookPro/img/breakfirst_3.png",
      date: new Date("2021-01-01T10:00:00"),
      description: description,
      level: "Easy",
      tags: tags,
      category: category,
      ingredients: ingredients,
      title: "Banana creppe",
      time: "35min",
      type: "BREAKFAST",
      step: steps,
      like: 41,
      print: 12,
      galery: [
        "/devices/macBookPro/img/description_1.png",
        "/devices/macBookPro/img/description_2.png",
      ],
      comment: comment,
    },
    {
      user: admin,
      src: "/devices/macBookPro/img/breakfirst_4.png",
      date: new Date("2021-01-01T10:00:00"),
      description: description,
      level: "Easy",
      tags: tags,
      category: category,
      ingredients: ingredients,
      title: "Egg and avocado cake",
      time: "35min",
      type: "BREAKFAST",
      step: steps,
      like: 41,
      print: 12,
      galery: [
        "/devices/macBookPro/img/description_1.png",
        "/devices/macBookPro/img/description_2.png",
      ],
      comment: comment,
    },
    /**horizontal */
    {
      user: admin,
      src: "/devices/macBookPro/img/dinner_3.png",
      date: new Date("2021-01-01T10:00:00"),
      description: description,
      level: "Easy",
      tags: tags,
      category: category,
      ingredients: ingredients,
      title: "Chicken ramen",
      time: "35min",
      type: "HORIZONTAL",
      step: steps,
      like: 41,
      print: 12,
      galery: [
        "/devices/macBookPro/img/description_1.png",
        "/devices/macBookPro/img/description_2.png",
      ],
      comment: comment,
    },
    /** DINNER*/
    {
      user: admin,
      src: "/devices/macBookPro/img/dinner_1.png",
      date: new Date("2021-01-01T10:00:00"),
      description: description,
      level: "Easy",
      tags: tags,
      category: category,
      ingredients: ingredients,
      title: "Caramelized beef with potato",
      time: "35min",
      type: "DINNER",
      step: steps,
      like: 41,
      print: 12,
      galery: [
        "/devices/macBookPro/img/description_1.png",
        "/devices/macBookPro/img/description_2.png",
      ],
      comment: comment,
    },
    {
      user: admin,
      src: "/devices/macBookPro/img/dinner_2.png",
      date: new Date("2021-01-01T10:00:00"),
      description: description,
      level: "Easy",
      tags: tags,
      category: category,
      ingredients: ingredients,
      title: "Crunchy peanut with chicken",
      time: "35min",
      type: "DINNER",
      step: steps,
      like: 41,
      print: 12,
      galery: [
        "/devices/macBookPro/img/description_1.png",
        "/devices/macBookPro/img/description_2.png",
      ],
      comment: comment,
    },
    /**lunch */
    {
      user: admin,
      src: "/devices/macBookPro/img/lunch_1.png",
      date: new Date("2021-01-01T10:00:00"),
      description: description,
      level: "Easy",
      tags: tags,
      category: category,
      ingredients: ingredients,
      title: "Chicken caesar",
      time: "35min",
      type: "LUNCH",
      step: steps,
      like: 41,
      print: 12,
      galery: [
        "/devices/macBookPro/img/description_1.png",
        "/devices/macBookPro/img/description_2.png",
      ],
      comment: comment,
    },
    {
      user: admin,
      src: "/devices/macBookPro/img/lunch_2.png",
      date: new Date("2021-01-01T10:00:00"),
      description: description,
      level: "Easy",
      tags: tags,
      category: category,
      ingredients: ingredients,
      title: "Milk chocolate and strawberry",
      time: "35min",
      type: "LUNCH",
      step: steps,
      like: 41,
      print: 12,
      galery: [
        "/devices/macBookPro/img/description_1.png",
        "/devices/macBookPro/img/description_2.png",
      ],
      comment: comment,
    },
    {
      user: admin,
      src: "/devices/macBookPro/img/lunch_3.png",
      date: new Date("2021-01-01T10:00:00"),
      description: description,
      level: "Easy",
      tags: tags,
      category: category,
      ingredients: ingredients,
      title: "Roast beef rib with fries",
      time: "35min",
      type: "LUNCH",
      step: steps,
      like: 41,
      print: 12,
      galery: [
        "/devices/macBookPro/img/description_1.png",
        "/devices/macBookPro/img/description_2.png",
      ],
      comment: comment,
    },
  ],
};

export const useData = () => {
  return useContext(myContext);
};
