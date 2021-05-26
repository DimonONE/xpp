import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import style from "../SectionNews/SectionNews.module.css";
import style_page from "./PageNews.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectFade } from "swiper/core";

import { useTranslation } from "react-i18next";
import "../../../../../../utils/i18next";

import { localState } from "../LocalState";

SwiperCore.use([Navigation, Pagination, EffectFade]);

export const PageNews = (props) => {
  const { t } = useTranslation();
  const [itemActive, setItemActive] = useState(1);
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
              stroke-linecap="round"
              stroke-linejoin="round"
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
          <span className={`${style.section_right} `}>
            <Swiper
              className="steps__slider swiper-container"
              direction="vertical"
              navigation={{
                nextEl: ".steps__arrow_p_news--next",
                prevEl: ".steps__arrow_p_news--prev",
              }}
              pagination={{
                el: ".steps__pagination",
                clickable: "true",
                renderBullet: (index, className) => {
                  return (
                    '<span class="steps__pagination-item ' +
                    className +
                    '">0' +
                    (index + 1) +
                    "</span>"
                  );
                },
              }}
              effect={"fade"}
              fadeEffect={{ crossFade: true }}
              speed={500}
              style={{ overflow: "visible", height: 700 }}
            >
              {localState.page_news.map((e) => (
                <SwiperSlide
                  key={e.id}
                  className={`${style_page.contents} ${style.news_item}`}
                >
                  <span className={style.news_item__img}>
                    <img src={e.img} alt="NoN" />
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
                        <p>{e.date}</p>
                      </div>

                      <h2 className={style_page.text_info}>
                        Илон Маск опубликовал фото Starbase - и токен взлетел на
                        6000%
                      </h2>
                      <span className={style_page.text_info}>
                        <p>
                          Илон Маск продолжает сбивать с толку участников
                          крипторынка своими противоречивыми твитами. На этот
                          раз неявным героем повествования стал токен под
                          названием Starbase с тикером STAR.
                        </p>
                      </span>
                      <div className={style.items__info}>
                        <div className={style.block_link}>
                          <a className={style.link} href="/">
                            Подробнее
                          </a>
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
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </span>
                </SwiperSlide>
              ))}
            </Swiper>
          </span>
          <span className={style_page.pos_slide_button}>
            <div className="col-lg-6 col-md-9 d-flex steps__controls wow animate__animated animate__fadeInRight">
              <button className="arrow arrow--prev steps__arrow steps__arrow_p_news--prev">
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
              </button>
              <div className="steps__pagination"></div>
              <button className="arrow arrow--next steps__arrow steps__arrow_p_news--next">
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
              </button>
            </div>
          </span>
        </div>
      </div>
    </section>
  );
};
