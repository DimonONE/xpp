import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { useGlobalState } from "../../../../State";

import style from "../SectionNews/SectionNews.module.css";
import style_page from "./PageNews.module.css";
import "./Pagination.css";

// import { useTranslation } from "react-i18next";
// import "../../../../../../utils/i18next";

import { NewsContainer } from "./DisplayNews";

export const PageNews = (props) => {
  // const { t } = useTranslation();
  const [itemActive, setItemActive] = useState(1);

  const [stateNews] = useGlobalState("stateNews");
  const [news] = useState(
    stateNews.dataAllNews.slice(0, stateNews.dataAllNews.length)
  );
  const [pageNumber, setPageNamber] = useState(0);
  const newsPerPage = 5;
  const pagesVisited = pageNumber * newsPerPage;
  const displayNews = NewsContainer(pagesVisited, newsPerPage, news);
  const pageCount = Math.ceil(news.length / newsPerPage);

  const cangePage = ({ selected }) => {
    setPageNamber(selected);
  };
  return (
    <section className={`section news ${style.section_news}`}>
      <div className="container media__container">
        <span className={style.block_link}>
          <NavLink to="/" className={style.link}>
            Главная
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
        </span>
        <span className={`${style_page.text_link__news}`}>Новости</span>
        <h3 className="heading font-size-40 media__heading wow animate__animated animate__fadeInDown">
          <b className="font-weight-700">Новости</b>
        </h3>

        <div className={`${style.block_content}`}>
          <div className={`${style.nav} `}>
            <span
              onClick={() => setItemActive(1)}
              className={`${style.nav__item} ${
                itemActive === 1 ? style.active : ""
              }`}
              type="submit"
            >
              Общие
            </span>
            <span
              onClick={() => setItemActive(2)}
              className={`${style.nav__item} ${
                itemActive === 2 && style.active
              }`}
              type="submit"
            >
              Криптовалюта
            </span>
            <span
              onClick={() => setItemActive(3)}
              className={`${style.nav__item} ${
                itemActive === 3 && style.active
              }`}
              type="submit"
            >
              Трейдинг
            </span>
          </div>
          <span className={`${style.section_right} `}>{displayNews}</span>
          <span className={style_page.pos_slide_button}>
            <div>
              <ReactPaginate
                containerClassName={" correct_position"}
                activeClassName={
                  "pagination_bullet_items active_pagination_items"
                }
                pageClassName={"pagination_bullet_items"}
                pageCount={pageCount}
                nextLabel={
                  <svg
                    width="38"
                    height="19"
                    viewBox="0 0 38 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9.14868H37M37 9.14868L29 1.14868M37 9.14868L29 17.1487"
                      stroke="#FF8225"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
                previousLabel={
                  <svg
                    width="38"
                    height="19"
                    viewBox="0 0 38 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M37 9.14868H1M1 9.14868L9 1.14868M1 9.14868L9 17.1487"
                      stroke="#FF8225"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
                onPageChange={cangePage}
                pageLabelBuilder={(page) => (page < 10 ? "0" + page : page)}
                previousClassName={"arrow"}
                nextClassName={"arrow"}
                previousLinkClassName={"previouseBttn"}
                nextLinkClassName={"nextBttn"}
              />
            </div>
          </span>
        </div>
      </div>
    </section>
  );
};
