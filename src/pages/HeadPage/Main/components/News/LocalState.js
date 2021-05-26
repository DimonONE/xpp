import hot_bit from "../../../../../img/hotBit.png";
import crex24 from "../../../../../img/crex24.png";
import union from "../../../../../img/Union.png";
import vector_1 from "../../../../../img/vector_1.png";
import vector_2 from "../../../../../img/vector_2.png";
import vector_3 from "../../../../../img/vector_3.png";
import arrowUp from "../../../../../img/arrowUp.png";
import arrowDown from "../../../../../img/arrowDown.png";
import icon__all_news from "../../../../../img/icon__all_news.png";
import ilonMask from "../../../../../img/IlonMask.png";
import bigImgIlon from "../../../../../img/testImgIlon.png";

export const localState = {
  navBlock: [
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
  page_news: [
    { id: 1, img: bigImgIlon, date: "18.05.2021" },
    { id: 2, img: bigImgIlon, date: "18.01.2021" },
    { id: 3, img: bigImgIlon, date: "18.01.2021" },
    { id: 4, img: bigImgIlon, date: "18.01.2021" },
    { id: 5, img: bigImgIlon, date: "18.01.2021" },
  ],
  news: [{ id: 1 }, { id: 2 }, { id: 3 }],
  icon_all_news: icon__all_news,
  ilonMask: ilonMask,
};
