import React from "react";
import { NavLink } from "react-router-dom";

import style from "../SectionNews/SectionNews.module.css";
import style_page from "../PageNews/PageNews.module.css";
import style_article from "./PageArticle.module.css";

import { useGlobalState } from "../../../../State";

import line_Rounds_bg from "../../../../../../img/line_Rounds-bg.png";
import facebook_png from "../../../../../../img/Facebook.png";
import twitter_png from "../../../../../../img/Twitter.png";
import instagram_png from "../../../../../../img/Instagram.png";
import youtube_png from "../../../../../../img/Youtube.png";

// import { useTranslation } from "react-i18next";
// import "../../../../../../utils/i18next";

export const PageArticle = (props) => {
  // const { t } = useTranslation();
  const [stateNews] = useGlobalState("stateNews");
  return (
    <section className={`section news ${style.section_news}`}>
      <div className="container media__container">
        <span className={style.block_link}>
          <NavLink to="/" className={`${style.link}`}>
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
        <span className={style.block_link}>
          <NavLink to="/news" className={`${style.link}`}>
            Новости
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
        <span className={`${style_page.text_link__news} ${style_page.link}`}>
          Илон Маск опубликовал фото Starbase - и токен взлетел на 6000%
        </span>

        <span className={`${style.section_right} `}>
          <div className={`${style.news_item}`}>
            <div>
              <h2 className={style_article.head}>
                Илон Маск опубликовал фото Starbase - и токен взлетел на 6000%
              </h2>
              <div className={style_article.grid_2}>
                <span className={style_page.news_item__info}>
                  <div>
                    <span className={style_article.text_info}>
                      <p>
                        <span className={style.news_item__img}>
                          <img src={stateNews.dataAllNews[1].img} alt="NoN" />
                        </span>
                        <div className={style_article.date}>
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
                          <p>{stateNews.dataAllNews[1].date}</p>
                        </div>
                        Илон Маск продолжает сбивать с толку участников
                        крипторынка своими противоречивыми твитами. На этот раз
                        неявным героем повествования стал токен под названием
                        Starbase с тикером STAR. На официальном сайте проекта
                        написано, что он представляет собой «платформу
                        краудфандинга на основе блокчейна». По сути, это место,
                        где стартапы могут собирать средства путём выпуска
                        токенов. По данным DEXTools, нативный токен проекта,
                        который в начале мая торговался примерно по $0,002,
                        сегодня достиг $ 0,30. С сегодняшнего минимума до
                        сегодняшнего максимума цена выросла в общей сложности на
                        6000%. Для тех, кто не знает, стартовая база SpaceX,
                        расположенная в деревне Бока-Чика округа Камерон в штате
                        Техас, не имеет ничего общего с токеном Starbase.
                        Действительно, Илон Маск всё больше напоминает
                        пребывающего в тюрьме Джона Макафи, который брался
                        рекламировать любые токены, в том числе откровенно
                        мошеннические. Правда, делал он это в более очевидной
                        форме. Как мы знаем, бурная и безответственная
                        активность Макафи в Твиттере привлекла к нему внимание
                        Налоговой службы, которая впоследствии наложила на него
                        штраф за отсутствие информации о коммерческой подоплёке
                        публикации. Также Макафи обвиняют в уклонении от
                        налогов, что является довольно серьёзным преступлением в
                        США, за которое ему грозит уголовная ответственность.
                        Команда, выпустившая токен, поблагодарила Маска за его
                        как бы неожиданно появившееся фото, которое обеспечило
                        космический рост ничем не примечательного криптоактива.
                        В дальнейшем с сегодняшнего максимума цена токена
                        снизилась более чем на 80%, что показывает, насколько
                        рискованно покупать альткоины с сомнительной ценностью и
                        слепо верить во всё, что публикует продуманный
                        миллиардер.
                      </p>
                    </span>
                  </div>
                </span>
              </div>
            </div>
          </div>
          <span className={style_article.line_decor}>
            <img src={line_Rounds_bg} alt="" />
          </span>

          <div className={style_article.block_social_link}>
            <h3>Понравилась статья? Поделитесь в соц. сетях:</h3>
            <span>
              <a href="/">
                <img src={facebook_png} alt="fecebook" />
              </a>
              <a href="/">
                <img src={twitter_png} alt="twitter" />
              </a>
              <a href="/">
                <img src={instagram_png} alt="instagram" />
              </a>
              <a href="/">
                <img src={youtube_png} alt="youtube" />
              </a>
            </span>
          </div>
          <div className={style_article.footer}>
            <h3 className={style_article.head}>Другие новости</h3>
            <div
              className={`${style.contents} ${style_article.block_other_news}`}
            >
              {stateNews.dataAllNews.map(
                (e) =>
                  e.id <= 4 && (
                    <div
                      key={e.id}
                      className={`${style.news_item} ${style_article.news_item_article} `}
                    >
                      <span className={style.news_item__img}>
                        <img src={stateNews.ilonMask} alt="NoN" />
                      </span>
                      <span className={style.news_item__info}>
                        <div>
                          <h2 className={style.text_info}>
                            Илон Маск опубликовал фото Starbase - и токен
                            взлетел на 6000%
                          </h2>
                          <div className={style_article.items__info}>
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
                            <div className={style_article.date}>
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
                  )
              )}
            </div>
          </div>
        </span>
      </div>
    </section>
  );
};
