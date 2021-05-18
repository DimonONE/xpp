import React from "react";
import { useTranslation } from "react-i18next";
import "../../../../../utils/i18next";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectFade } from "swiper/core";
import "swiper/swiper-bundle.css";

import { localState } from "./State";

SwiperCore.use([Navigation, Pagination, EffectFade]);

export const SectionSteps = (props) => {
  const { t } = useTranslation();

  return (
    <section className="section steps">
      <div className="container steps__container">
        <div className="pattern">
          <div className="pattern__img pattern__img--1"></div>
          <div className="pattern__img pattern__img--5"></div>
          <div className="pattern__img pattern__img--8"></div>
        </div>
        <div className="row steps__row">
          <div className="col-lg-6 steps__heading-wrap wow animate__animated animate__fadeInLeft">
            <h2 className="heading steps__heading font-size-40">
              {t("section_steps.heading.left_text")}
              <b className="font-weight-700">{t("section_steps.heading.b")}</b>
            </h2>
          </div>
          <div className="col-lg-6 col-md-9 d-flex steps__controls wow animate__animated animate__fadeInRight">
            <button className="arrow arrow--prev steps__arrow steps__arrow--prev">
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
            <button className="arrow arrow--next steps__arrow steps__arrow--next">
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
          <div className="col-12 wow">
            <Swiper
              className="steps__slider swiper-container"
              navigation={{
                nextEl: ".steps__arrow--next",
                prevEl: ".steps__arrow--prev",
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
              slidesPerView={1}
              speed={500}
              style={{ overflow: "visible" }}
            >
              {localState.map((e) => (
                <SwiperSlide
                  key={e.id}
                  className={`swiper-slide steps__slider-item`}
                >
                  <div className="steps__slider-item-row row">
                    <div className="col-xl-5 col-lg-6 col-md-9 steps__slider-main-wrap">
                      <div className="steps__slider-counter font-size-24 font-weight-600">
                        {t(`section_steps.step_${e.id}.step`)}
                      </div>
                      <div className="steps__slider-main">
                        {e.blocks.map((texts_elements) => (
                          <SwiperSlide
                            key={texts_elements.id}
                            className="steps__slider-main-item d-flex"
                          >
                            <div>
                              <div
                                className={`steps__slider-main-item-icon-wrap grit ${texts_elements.grit_color_class}`}
                              >
                                <div className="grit__bg"></div>
                                <img
                                  src={texts_elements.img_steps__slider}
                                  alt="None"
                                  className="steps__slider-main-item-icon grit__icon"
                                />
                              </div>
                              <div className="steps__slider-main-item-texts">
                                <div
                                  className={`steps__slider-main-item-heading ${texts_elements.text_color_class} font-size-20`}
                                >
                                  {t(
                                    `section_steps.step_${e.id}.main_${texts_elements.id}.head`
                                  )}
                                </div>
                                <div
                                  className="steps__slider-main-item-text"
                                  style={{ fontSize: 18 }}
                                >
                                  {t(
                                    `section_steps.step_${e.id}.main_${texts_elements.id}.left_text`
                                  )}
                                  <b className="font-weight-600">
                                    {t(
                                      `section_steps.step_${e.id}.main_${texts_elements.id}.b_1`
                                    )}
                                  </b>{" "}
                                  <b className="font-weight-600">
                                    {t(
                                      `section_steps.step_${e.id}.main_${texts_elements.id}.b_2`
                                    )}
                                  </b>
                                  {t(
                                    `section_steps.step_${e.id}.main_${texts_elements.id}.right_text`
                                  )}
                                </div>
                              </div>
                              <img
                                src={texts_elements.icon_little}
                                alt="None"
                                className="img-responsive steps__slider-main-item-icon-little"
                              />
                            </div>
                          </SwiperSlide>
                        ))}
                      </div>
                    </div>
                    <div className="col-xl-7 col-lg-6 steps__slider-img-wrap">
                      <img
                        src={e.steps__slider_img}
                        alt="Img"
                        className="steps__slider-img steps__slider-img--1"
                      />
                      <div className="steps__slider-circle"></div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
