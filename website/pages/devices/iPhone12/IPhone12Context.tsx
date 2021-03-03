import React, { useReducer, useContext, Dispatch } from "react";

export interface IArtist {
  src: string;
  firstName: string;
  lastName: string;
  album: IAlbum[];
}

export interface IMusic {
  title: string;
  src: string;
  audio: string;
  duration: string;
  albumIndex: number;
}

export interface IAlbum {
  src: string;
  title: string;
  date: Date;
  musicList: IMusic[];
}

export interface IPayload {
  page?: number;
  music?: IMusic;
  albumIndex?: number;
  musicIndex?: number;
  autoPlay?: boolean;
  showVolumeState?: boolean;
}

export interface IAction {
  type: /*navigation pages*/
  | "CHANGE_PAGE"
    /*home page btn*/
    | "NEXT_MUSIC"
    | "PREVIOUS_MUSIC"
    /*track*/
    | "CHANGE_MUSIC_TRACK"
    | "CHANGE_ARTIST_TRACK"
    | "CHANGE_ALBUM_TRACK"
    | "CHANGE_AUTOPLAY"
    /*like*/
    | "ADD_SONG_LIKED"
    | "REMOVE_SONG_LIKED"
    | "ADD_VOLUME"
    | "REDUCE_VOLUME"
    | "CHANGE_SHOW_VOLUME_STATE";
  payload: IPayload;
}

export interface ITrack {
  artistIndex: number;
  albumIndex: number;
  musicIndex: number;
  autoPlay: boolean;
}

export interface IData {
  currentPageIndex: number;
  artist: IArtist[];
  track: ITrack;
  songLiked: IMusic[];
  volume: number;
  showVolumeState: boolean;
}

function reducer(state: IData, action: IAction) {
  switch (action.type) {
    case "CHANGE_PAGE":
      return { ...state, currentPageIndex: action.payload.page! };
    case "NEXT_MUSIC":
      return {
        ...state,
        track: { ...state.track, musicIndex: state.track.musicIndex + 1 },
      };
    case "PREVIOUS_MUSIC":
      return {
        ...state,
        track: { ...state.track, musicIndex: state.track.musicIndex - 1 },
      };
    case "ADD_SONG_LIKED":
      return {
        ...state,
        songLiked: [...state.songLiked, action.payload.music!],
      };
    case "REMOVE_SONG_LIKED":
      return {
        ...state,
        songLiked: [
          ...state.songLiked.filter(
            (e) => e.title !== action.payload.music?.title!
          ),
        ],
      };
    case "CHANGE_ALBUM_TRACK":
      return {
        ...state,
        track: { ...state.track, albumIndex: action.payload.albumIndex! },
      };
    case "CHANGE_MUSIC_TRACK":
      return {
        ...state,
        track: {
          ...state.track,
          musicIndex: action.payload.musicIndex!,
          albumIndex: action.payload.albumIndex!,
        },
      };
    case "CHANGE_AUTOPLAY":
      return {
        ...state,
        track: { ...state.track, autoPlay: action.payload.autoPlay! },
      };
    case "ADD_VOLUME":
      return {
        ...state,
        showVolumeState: true,
        volume:
          Number(fromater(state.volume.toString())) < 1
            ? Number(
                fromater(
                  (Number(fromater(state.volume.toString())) + 0.1).toString()
                )
              )
            : Number(fromater(state.volume.toString())),
      };
    case "REDUCE_VOLUME":
      return {
        ...state,
        showVolumeState: true,
        volume:
          Number(fromater(state.volume.toString())) > 0
            ? Number(
                fromater(
                  (Number(fromater(state.volume.toString())) - 0.1).toString()
                )
              )
            : Number(fromater(state.volume.toString())),
      };
    case "CHANGE_SHOW_VOLUME_STATE":
      return {
        ...state,
        showVolumeState: action.payload.showVolumeState!,
      };
    default:
      return { ...state };
  }
}

function fromater(x: string) {
  return Number.parseFloat(x).toFixed(1);
}

const myContext = React.createContext<
  | {
      data: IData;
      dispatchData: Dispatch<IAction>;
    }
  | undefined
>(undefined);

export default function IPhone12Context({ children }: any) {
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

const artist: IArtist[] = [
  {
    firstName: "Billy",
    lastName: "Joffer",
    src: "/devices/iPhone12/img/artist_1.png",
    album: [
      {
        date: new Date(),
        title: "Jazz album",
        src: "/devices/iPhone12/img/jazz_1.png",
        musicList: [
          {
            src: "/devices/iPhone12/img/jazz_1.png",
            audio: "/devices/iPhone12/audio/jazz_1.mp3",
            title: "All for you",
            duration: "02:25",
            albumIndex: 0,
          },
          {
            src: "/devices/iPhone12/img/jazz_2.png",
            audio: "/devices/iPhone12/audio/jazz_2.mp3",
            title: "Dancing all night",
            duration: "03:13",
            albumIndex: 0,
          },
          {
            src: "/devices/iPhone12/img/jazz_3.png",
            audio: "/devices/iPhone12/audio/jazz_3.mp3",
            title: "Joyeux of sun",
            duration: "01:44",
            albumIndex: 0,
          },
          {
            src: "/devices/iPhone12/img/jazz_4.png",
            audio: "/devices/iPhone12/audio/jazz_4.mp3",
            title: "Keep it simple",
            duration: "02:40",
            albumIndex: 0,
          },
        ],
      },
      {
        date: new Date(),
        title: "Soul album",
        src: "/devices/iPhone12/img/soul_1.png",
        musicList: [
          {
            src: "/devices/iPhone12/img/soul_1.png",
            audio: "/devices/iPhone12/audio/soul_1.mp3",
            title: "Beautiful",
            duration: "01:48",
            albumIndex: 1,
          },
          {
            src: "/devices/iPhone12/img/soul_2.png",
            audio: "/devices/iPhone12/audio/soul_2.mp3",
            title: "In the rain",
            duration: "01:31",
            albumIndex: 1,
          },
        ],
      },
    ],
  },
];

const initialState = {
  currentPageIndex: 1,
  artist: artist,
  track: { artistIndex: 0, albumIndex: 0, musicIndex: 0, autoPlay: false },
  songLiked: [],
  volume: 0.1,
  showVolumeState: false,
};
