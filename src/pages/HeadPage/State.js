import hot_bit from "../../img/hotBit.png";
import crex24 from "../../img/crex24.png";
import union from "../../img/Union.png";
import vector_1 from "../../img/vector_1.png";
import vector_2 from "../../img/vector_2.png";
import vector_3 from "../../img/vector_3.png";
import arrowUp from "../../img/arrowUp.png";
import arrowDown from "../../img/arrowDown.png";
import icon__all_news from "../../img/icon__all_news.png";
import ilonMask from "../../img/IlonMask.png";
import bigImgIlon from "../../img/testImgIlon.png";

import { createGlobalState } from "react-hooks-global-state";

const initialState = {
  stateNews: {
    navBlockHeadPage: [
      {
        id: 1,
        icon: hot_bit,
        litl_ico: union,
        sum: "0.7595",
        arrival: "+0.00000000",
        schedule: vector_1,
        arrowUp: arrowUp,
        arrowDown: arrowDown,
      },
      {
        id: 2,
        icon: hot_bit,
        litl_ico: union,
        sum: "1.0500",
        arrival: "+1.0500",
        schedule: vector_2,
        arrowUp: arrowUp,
        arrowDown: arrowDown,
      },
      {
        id: 3,
        icon: crex24,
        litl_ico: union,
        sum: "1.0154",
        arrival: "-1.0023",
        schedule: vector_3,
        arrowUp: arrowUp,
        arrowDown: arrowDown,
      },
    ],

    dataAllNews: [
      { id: 1, img: bigImgIlon, date: "18.05.2021" },
      { id: 2, img: bigImgIlon, date: "18.01.2021" },
      { id: 3, img: bigImgIlon, date: "18.01.2021" },
      { id: 4, img: bigImgIlon, date: "18.01.2021" },
      { id: 5, img: bigImgIlon, date: "18.01.2021" },
      { id: 6, img: bigImgIlon, date: "18.05.2021" },
      { id: 7, img: bigImgIlon, date: "18.01.2021" },
      { id: 8, img: bigImgIlon, date: "18.01.2021" },
      { id: 9, img: bigImgIlon, date: "18.01.2021" },
      { id: 10, img: bigImgIlon, date: "18.01.2021" },
      { id: 11, img: bigImgIlon, date: "18.01.2021" },
      { id: 12, img: bigImgIlon, date: "18.01.2021" },
      { id: 13, img: bigImgIlon, date: "18.01.2021" },
      { id: 14, img: bigImgIlon, date: "18.05.2021" },
      { id: 15, img: bigImgIlon, date: "18.01.2021" },
      { id: 16, img: bigImgIlon, date: "18.01.2021" },
      { id: 17, img: bigImgIlon, date: "18.01.2021" },
      { id: 18, img: bigImgIlon, date: "18.01.2021" },
      { id: 19, img: bigImgIlon, date: "18.01.2021" },
      { id: 20, img: bigImgIlon, date: "18.01.2021" },
      { id: 21, img: bigImgIlon, date: "18.01.2021" },
      { id: 22, img: bigImgIlon, date: "18.01.2021" },
      { id: 23, img: bigImgIlon, date: "18.01.2021" },
      { id: 24, img: bigImgIlon, date: "18.01.2021" },
      { id: 25, img: bigImgIlon, date: "18.01.2021" },
    ],
    icon_all_news: icon__all_news,
    ilonMask: ilonMask,
    countPage: 0,
  },
};

export const { useGlobalState } = createGlobalState(initialState);
