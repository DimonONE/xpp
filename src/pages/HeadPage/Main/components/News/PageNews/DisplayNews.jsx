import React from "react";
import { NavLink } from "react-router-dom";
import style from "../SectionNews/SectionNews.module.css";
import style_page from "./PageNews.module.css";

export const NewsContainer = (pagesVisited, newsPerPage, news) => {
  return news.slice(pagesVisited, pagesVisited + newsPerPage).map((news) => {
    return (
      <div
        key={news.id}
        className={`${style_page.contents} ${style.news_item}`}
      >
        <span className={style.news_item__img}>
          <img src={news.img} alt="NoN" />
        </span>
        <span className={style_page.news_item__info}>
          <div>
            <div className={style_page.data}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.0664 1.17188H11.7188V0.46875C11.7188 0.209883 11.5089 0 11.25 0C10.9911 0 10.7812 0.209883 10.7812 0.46875V1.17188H4.21875V0.46875C4.21875 0.209883 4.0089 0 3.75 0C3.4911 0 3.28125 0.209883 3.28125 0.46875V1.17188H1.93359C0.867393 1.17188 0 2.03927 0 3.10547V13.0664C0 14.1326 0.867393 15 1.93359 15H13.0664C14.1326 15 15 14.1326 15 13.0664V3.10547C15 2.03927 14.1326 1.17188 13.0664 1.17188ZM1.93359 2.10938H3.28125V2.57812C3.28125 2.83699 3.4911 3.04688 3.75 3.04688C4.0089 3.04688 4.21875 2.83699 4.21875 2.57812V2.10938H10.7812V2.57812C10.7812 2.83699 10.9911 3.04688 11.25 3.04688C11.5089 3.04688 11.7188 2.83699 11.7188 2.57812V2.10938H13.0664C13.6157 2.10938 14.0625 2.55621 14.0625 3.10547V4.21875H0.9375V3.10547C0.9375 2.55621 1.38434 2.10938 1.93359 2.10938ZM13.0664 14.0625H1.93359C1.38434 14.0625 0.9375 13.6157 0.9375 13.0664V5.15625H14.0625V13.0664C14.0625 13.6157 13.6157 14.0625 13.0664 14.0625Z"
                  fill="#606060"
                />
              </svg>
              <p>{news.date}</p>
            </div>

            <h2 className={style_page.text_info}>
              Илон Маск опубликовал фото Starbase - и токен взлетел на 6000%
            </h2>
            <span className={style_page.text_info}>
              <p>
                Илон Маск продолжает сбивать с толку участников крипторынка
                своими противоречивыми твитами. На этот раз неявным героем
                повествования стал токен под названием Starbase с тикером STAR.
              </p>
            </span>
            <div className={style.items__info}>
              <div className={style.block_link}>
                <NavLink className={style.link} to="/news/1">
                  Подробнее
                </NavLink>
                <svg
                  width="16"
                  height="12"
                  viewBox="0 0 16 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 6H15M15 6L10.0222 1M15 6L10.0222 11"
                    stroke="#FF8225"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </span>
      </div>
    );
  });
};
