import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./SectionNews.module.css";
// import { useTranslation } from "react-i18next";
// import "../../../../../../utils/i18next";
import { useGlobalState } from "../../../../State";

import big_img from "../../../../../../img/big_img.png";

export const SectionNews = (props) => {
  // const { t } = useTranslation();
  const [stateNews] = useGlobalState("stateNews");
  const [itemActive, setItemActive] = useState(1);
  return (
    <section className={`section news ${style.section_news}`}>
      <div className="container media__container">
        <h2 className="heading font-size-40 media__heading text-center wow animate__animated animate__fadeInDown">
          <b className="font-weight-700">Торговые</b> пары
        </h2>
        <div className={`${style.news_nav}`}>
          {stateNews.navBlockHeadPage.map((e) => (
            <span key={e.id} className={`${style.block}`}>
              <div className={`${style.block_head}`}>
                <div className={`${style.news_nav__icon}`}>
                  <img src={e.icon} alt="non" />
                </div>
                <p className={`${style.head_text}`}>HotBit</p>
              </div>
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
          <div className={style.contents}>
            <span className={style.section_left}>
              <div className={style.big_img}>
                <img src={big_img} alt="bg" />
              </div>
              <div className={style.data}>
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
                <p>18.05.2021</p>
              </div>
              <span className={style.info}>
                <h2 className={style.text_info}>
                  Эксперты назвали биткоин более экологичным, чем нефтедоллар
                </h2>
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </span>
            </span>
            <span className={style.section_right}>
              {stateNews.dataAllNews.map(
                (e) =>
                  e.id <= 3 && (
                    <div key={e.id}>
                      <div className={style.news_item}>
                        <span className={style.news_item__img}>
                          <img src={stateNews.ilonMask} alt="NoN" />
                        </span>
                        <span className={style.news_item__info}>
                          <div>
                            <h2 className={style.text_info}>
                              Илон Маск опубликовал фото Starbase - и токен
                              взлетел на 6000%
                            </h2>
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
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                              <div className={style.data}>
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
                                <p>18.05.2021</p>
                              </div>
                            </div>
                          </div>
                        </span>
                      </div>
                      <div className={style.items__info_mobile}>
                        <div className={style.data}>
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
                          <p>18.05.2021</p>
                        </div>
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
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )
              )}

              <NavLink
                to="/news"
                className={`${style.all_news} ${style.block} ${style.all_news_mobile}`}
              >
                <div className={style.all_news}>
                  <div>
                    <img src={stateNews.icon_all_news} alt="icon_all_news" />
                  </div>
                  <p>Все новости</p>
                </div>
                <div>
                  <svg
                    width="23"
                    height="17"
                    viewBox="0 0 23 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 8.5H22M22 8.5L14.5333 1M22 8.5L14.5333 16"
                      stroke="#C4C4C4"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </NavLink>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
