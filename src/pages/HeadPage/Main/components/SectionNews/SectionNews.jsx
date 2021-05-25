import React from "react";
import style from "./SectionNews.module.css";
import { useTranslation } from "react-i18next";
import "../../../../../utils/i18next";
import { localState } from "./LocalState";

export const SectionNews = (props) => {
  const { t } = useTranslation();

  return (
    <section className={`section news ${style.section_news}`}>
      <div className="container media__container">
        <h2 className="heading font-size-40 media__heading text-center wow animate__animated animate__fadeInDown">
          <b className="font-weight-700">Торговые</b> пары
        </h2>
        <div className={`${style.news_nav}`}>
          {localState.map((e) => (
            <span key={e.id} className={`${style.block}`}>
              <div className={`${style.block_head}`}>
                <div className={`${style.news_nav__icon}`}>
                  <img src={e.icon} alt="non" />
                </div>
                <p>HotBit</p>
              </div>
              <div className={`${style.infos}`}>
                <img src={e.litl_ico} alt="NoN" />
                <p className={`${style.valute}`}>XXP / BTC</p>
                <p className={`${style.sum}`}>${e.sum}</p>
                <p className={`${style.arrival}`}>${e.arrival}</p>
                <div className={`${style.arrow}`}>
                  <img src={e.id < 3 ? e.arrowUp : e.arrowDown} alt="/\" />
                </div>
                <img src={e.schedule} alt="/\/\/" style={{ marginTop: -4 }} />
              </div>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
