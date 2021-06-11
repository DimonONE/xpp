import React from "react";
// import style from "../News/SectionNews/SectionNews.module.css";
import style from "./TradingPairs.module.css";
// import { useTranslation } from "react-i18next";
// import "../../../../../../utils/i18next";
import { useGlobalState } from "../../../State";

export const TradingPairs = (props) => {
  // const { t } = useTranslation();
  const [trading] = useGlobalState("trading");
  return (
    <div className="container media__container">
      <h2 className="heading font-size-40 media__heading text-center wow animate__animated animate__fadeInDown">
        <b className="font-weight-700">Торговые</b> пары
      </h2>
      <div className={`${style.news_nav}`}>
        {trading.navBlockHeadPage.map((e) => (
          <span key={e.id} className={`${style.block}`}>
            <a
              href={e.link}
              className={`${style.block_head}`}
              target="_blank"
              rel="noreferrer"
            >
              <div className={`${style.news_nav__icon}`}>
                <img src={e.icon} alt="non" />
              </div>
              <p className={`${style.head_text}`}>HotBit</p>
            </a>
            <div className={`${style.infos}`}>
              <img src={e.litl_ico} alt="NoN" />
              <p className={`${style.valute}`}>XXP / BTC</p>
              <p className={`${style.sum}`}>${e.sum}</p>
              <p className={`${style.arrival}`}>{e.arrival}</p>
              <div className={`${style.arrow}`}>
                <img src={e.id < 3 ? e.arrowUp : e.arrowDown} alt="/\" />
              </div>
              <img src={e.schedule} alt="/\/\/" style={{ marginTop: -4 }} />
            </div>
          </span>
        ))}
      </div>
    </div>
  );
};
