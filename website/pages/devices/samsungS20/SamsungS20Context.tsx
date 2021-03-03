import React, { Dispatch, useReducer, useContext } from "react";

export interface IData {
  currentUser: IUser;
  currentPageIndex: number | undefined;
  messagesList: IUser[];
  user: IUser | undefined;
}

export interface IAction {
  type:
    | "CHANGE_PAGE"
    | "ADD_MESSAGE"
    | "ADD_IMAGE"
    | "CHANGE_CURRENT_USER"
    | "READ_ALL_MESSAGES";
  payload: IPayload;
}

export interface IPayload {
  id?: string;
  page?: number;
  user?: IUser;
  message?: string;
  src?: string;
}

export interface IMessage {
  type: "IMAGE" | "MESSAGE";
  data: string;
  date: Date;
  user: IUser;
  read: boolean;
}

export interface IUser {
  fullName: string;
  phoneNumber: string;
  src: string;
  active?: boolean;
  messageList?: Array<IMessage>;
}
const myContext = React.createContext<{
  data: IData;
  dispatchData: Dispatch<IAction>;
} | null>(null);

export default function SamsungS20Context({ children }: any) {
  function reducer(state: IData, action: IAction) {
    switch (action.type) {
      case "CHANGE_PAGE":
        return {
          ...state,
          currentPageIndex: action.payload.page,
          user: action.payload.user,
        };
      case "READ_ALL_MESSAGES":
        return {
          ...state,
          messagesList: state.messagesList.map((e) => {
            if (e.fullName === action.payload.user?.fullName) {
              return {
                ...e,
                messageList: e.messageList?.map((e) => {
                  return {
                    ...e,
                    read: true,
                  };
                }),
              };
            } else {
              return e;
            }
          }),
        };
      case "CHANGE_CURRENT_USER":
        return {
          ...state,
          currentUser: action.payload.user!,
        };
      case "ADD_MESSAGE":
        return {
          ...state,
          messagesList: state.messagesList.map((e) => {
            if (e.fullName === action.payload.user?.fullName) {
              return {
                ...e,
                messageList: e.messageList?.concat({
                  type: "MESSAGE",
                  data: action.payload.message!,
                  date: new Date(),
                  user: currentUser,
                  read: true,
                }),
              };
            } else {
              return e;
            }
          }),
        };
      case "ADD_IMAGE":
        return {
          ...state,
          messagesList: state.messagesList.map((e) => {
            if (e.fullName === action.payload.user?.fullName) {
              return {
                ...e,
                messageList: e.messageList?.concat({
                  type: "IMAGE",
                  data: action.payload.src!,
                  date: new Date(),
                  user: currentUser,
                  read: true,
                }),
              };
            } else {
              return e;
            }
          }),
        };
      default:
        return {
          ...state,
        };
    }
  }

  const [data, dispatch] = useReducer(reducer, initialState);
  return (
    <myContext.Provider value={{ data: data, dispatchData: dispatch }}>
      {children}
    </myContext.Provider>
  );
}

export const useData = () => {
  return useContext(myContext);
};

/*=================initial data==================*/

let currentUser: IUser = {
  src: "/devices/samsungS20/img/user_5.png",
  fullName: "Juliette dole",
  phoneNumber: "+1 (819) 230 1622",
};
let cindy: IUser = {
  src: "/devices/samsungS20/img/user_1.png",
  fullName: "Cindy rimust",
  phoneNumber: "+1 (819) 548 4591",
  active: true,
};
let andy: IUser = {
  src: "/devices/samsungS20/img/user_2.png",
  fullName: "Andy Mackey",
  phoneNumber: "+1 (613) 441 2563",
  active: false,
};
let john: IUser = {
  src: "/devices/samsungS20/img/user_3.png",
  fullName: "john Lefourbe",
  phoneNumber: "+1 (444) 548 4591",
  active: false,
};
let florence: IUser = {
  src: "/devices/samsungS20/img/user_4.png",
  fullName: "Florence lavoie",
  phoneNumber: "+1 (819) 548 1286",
  active: true,
};
let tresor: IUser = {
  src: "/devices/samsungS20/img/user_7.png",
  fullName: "Trésor Kabwizi",
  phoneNumber: "+1 (819) 785 4156",
  active: true,
};
let laurena: IUser = {
  src: "/devices/samsungS20/img/user_6.png",
  fullName: "Laurena Karungi",
  phoneNumber: "+1 (613) 888 4895",
  active: true,
};
let will: IUser = {
  src: "/devices/samsungS20/img/user_8.png",
  fullName: "Will tedmar",
  phoneNumber: "+1 (613) 225 665",
  active: true,
};
let lyoun: IUser = {
  src: "/devices/samsungS20/img/user_9.png",
  fullName: "Lyoun chun",
  phoneNumber: "+1 (819) 748 747",
  active: true,
};
let mam: IUser = {
  src: "/devices/samsungS20/img/user_10.png",
  fullName: "Mother heart",
  phoneNumber: "+1 (613) 111 5694",
  active: true,
};

const initialState: IData = {
  currentUser: currentUser,
  currentPageIndex: 1,
  user: undefined,
  messagesList: [
    /**tresor */
    {
      active: tresor.active,
      src: tresor.src,
      fullName: tresor.fullName,
      phoneNumber: tresor.phoneNumber,
      messageList: [
        {
          type: "MESSAGE",
          data: "Ya Juliette, je suis dans l'avion avec ya Laurena.",
          user: tresor,
          date: new Date("2021-01-15T15:22:20Z"),
          read: true,
        },
        {
          type: "IMAGE",
          data: "/devices/samsungS20/img/message_img_2.png",
          user: tresor,
          date: new Date("2021-01-15T15:23:20Z"),
          read: true,
        },
        {
          type: "MESSAGE",
          data:
            "Parfait, fait moi signe dès que tu descends. Moi je suis en route pour l'aréoport",
          user: currentUser,
          date: new Date("2021-01-15T15:25:20Z"),
          read: true,
        },

        {
          type: "MESSAGE",
          data: "Je descent dans quelques minutes.",
          user: tresor,
          date: new Date("2021-01-17T04:11:20Z"),
          read: true,
        },
        {
          type: "IMAGE",
          data: "/devices/samsungS20/img/message_img_5.png",
          user: tresor,
          date: new Date("2021-01-17T04:12:20Z"),
          read: true,
        },
        {
          type: "MESSAGE",
          data:
            "On est arrivés, y a Laurena à une grosse valise, prépares-toi. Où es-tu?.",
          user: tresor,
          date: new Date("2021-01-17T04:45:20Z"),
          read: true,
        },
        {
          type: "MESSAGE",
          data: "Je vous attends à l'arrivée mes petits.",
          user: currentUser,
          date: new Date("2021-01-17T04:51:20Z"),
          read: true,
        },
      ],
    },
    /**andy */
    {
      active: andy.active,
      src: andy.src,
      fullName: andy.fullName,
      phoneNumber: andy.phoneNumber,
      messageList: [
        {
          type: "MESSAGE",
          data: "Hello Juliette. How are you today?",
          user: andy,
          date: new Date("2021-01-16T16:51:20Z"),
          read: true,
        },
        {
          type: "MESSAGE",
          data: "Find and you?",
          user: currentUser,
          date: new Date("2021-01-16T17:22:20Z"),
          read: true,
        },
        {
          type: "MESSAGE",
          data: "Me too, did you see the last email I sent you?",
          user: andy,
          date: new Date("2021-01-16T17:27:20Z"),
          read: false,
        },
        {
          type: "MESSAGE",
          data: "??",
          user: andy,
          date: new Date("2021-01-16T22:27:20Z"),
          read: false,
        },
      ],
    },
    /**laurena karungi */
    {
      active: laurena.active,
      src: laurena.src,
      fullName: laurena.fullName,
      phoneNumber: laurena.phoneNumber,
      messageList: [
        {
          type: "MESSAGE",
          data: "Ya Juliette on est arrivée, tu es où?",
          user: laurena,
          date: new Date("2021-01-17T05:05:20Z"),
          read: false,
        },
      ],
    },
    /**florence */
    {
      active: florence.active,
      src: florence.src,
      fullName: florence.fullName,
      phoneNumber: florence.phoneNumber,
      messageList: [
        {
          type: "MESSAGE",
          data: "Hi JuJu, this is my new phone number.",
          user: florence,
          date: new Date("2021-01-13T09:09:20Z"),
          read: false,
        },
        {
          type: "MESSAGE",
          data: "Perfect",
          user: currentUser,
          date: new Date("2021-01-13T19:09:20Z"),
          read: false,
        },
        {
          type: "MESSAGE",
          data: "JuJu, the new Marvel is out.",
          user: florence,
          date: new Date("2021-01-14T13:13:20Z"),
          read: false,
        },
        {
          type: "IMAGE",
          data: "/devices/samsungS20/img/message_img_4.png",
          user: florence,
          date: new Date("2021-01-14T13:14:20Z"),
          read: false,
        },
        {
          type: "MESSAGE",
          data: "Where did you find them.",
          user: currentUser,
          date: new Date("2021-01-14T14:14:20Z"),
          read: false,
        },
      ],
    },
    /**john */
    {
      active: john.active,
      src: john.src,
      fullName: john.fullName,
      phoneNumber: john.phoneNumber,
      messageList: [
        {
          type: "MESSAGE",
          data:
            "Hey Juliette, je sais que ça fait longtemps qu'on s'est plus revu, mais j'ai une amie qui me dit te connaitre, elle veut que je lui passe ton numéro",
          user: john,
          date: new Date("2021-01-11T14:15:00Z"),
          read: false,
        },
        {
          type: "MESSAGE",
          data: "Elle s'appelle Dina",
          user: john,
          date: new Date("2021-01-11T14:16:00Z"),
          read: false,
        },
        {
          type: "MESSAGE",
          data:
            "Salut John, oui ça fait vraiment longtemps. Dina, ouf j'en connais plein des Dina, connais-tu son nom de famille?",
          user: currentUser,
          date: new Date("2021-01-11T15:16:00Z"),
          read: false,
        },
        {
          type: "MESSAGE",
          data: "Très bonne question, j'ai oublier, Mais j'ai mieux.",
          user: john,
          date: new Date("2021-01-11T15:18:00Z"),
          read: false,
        },
        {
          type: "IMAGE",
          data: "/devices/samsungS20/img/message_img_3.png",
          user: john,
          date: new Date("2021-01-11T15:20:00Z"),
          read: false,
        },
        {
          type: "MESSAGE",
          data:
            "Hooo oui, je la connais, wahooo. Oui passe-lui mon numéro, le monde est petit, comment vous êtes vous rencontrer ou comment à telle sue qu'on se connais.",
          user: currentUser,
          date: new Date("2021-01-11T22:21:00Z"),
          read: false,
        },
        {
          type: "MESSAGE",
          data:
            "Dina +1 (819) 203 5186. lorsque je lui dis que j'ai gradué une programmation à Lacité en 2020",
          user: john,
          date: new Date("2021-01-12T09:21:00Z"),
          read: false,
        },
        {
          type: "MESSAGE",
          data: "Wahoo, merci. Jhon",
          user: currentUser,
          date: new Date("2021-01-12T09:32:00Z"),
          read: false,
        },
        {
          type: "MESSAGE",
          data: "Je t'en prie",
          user: john,
          date: new Date("2021-01-12T09:33:00Z"),
          read: false,
        },
      ],
    },
    /**cindy */
    {
      active: cindy.active,
      src: cindy.src,
      fullName: cindy.fullName,
      phoneNumber: cindy.phoneNumber,
      messageList: [
        {
          type: "MESSAGE",
          data: "Tu vas à l'église aujourd'hui",
          user: cindy,
          date: new Date("2021-01-11T09:15:00Z"),
          read: false,
        },
      ],
    },
    /**mom */
    {
      active: mam.active,
      src: mam.src,
      fullName: mam.fullName,
      phoneNumber: mam.phoneNumber,
      messageList: [
        {
          type: "MESSAGE",
          data: "Comment tu vas maman",
          user: currentUser,
          date: new Date("2021-01-10T09:15:00Z"),
          read: true,
        },
      ],
    },
    /**lyoun */
    {
      active: lyoun.active,
      src: lyoun.src,
      fullName: lyoun.fullName,
      phoneNumber: lyoun.phoneNumber,
      messageList: [
        {
          type: "MESSAGE",
          data: "Hi",
          user: lyoun,
          date: new Date("2021-01-08T15:15:00Z"),
          read: false,
        },
      ],
    },
    /**will */
    {
      active: will.active,
      src: will.src,
      fullName: will.fullName,
      phoneNumber: will.phoneNumber,
      messageList: [
        {
          type: "MESSAGE",
          data: "Tu vas bien",
          user: will,
          date: new Date("2021-01-07T14:15:00Z"),
          read: true,
        },
      ],
    },
  ],
};
