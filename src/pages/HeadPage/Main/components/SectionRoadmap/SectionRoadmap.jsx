import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../../../../utils/i18next";

import style from "./SectionRoadmap.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import "swiper/swiper-bundle.css";

import { localState } from "./State";

SwiperCore.use([Navigation, Pagination]);

export const SectionRoadmap = (props) => {
  const { t } = useTranslation();
  const [hidden, setHidden] = useState(true);

  return (
    <section className="section roadmap">
      <div className="container roadmap__container">
        <div className="pattern">
          <div className="pattern__img pattern__img--1"></div>
          <div className="pattern__img pattern__img--3"></div>
        </div>
        <div className="roadmap__header row">
          <div className="col-lg-6 roadmap__heading-wrap wow ">
            <h2 className="heading roadmap__heading font-size-40">
              {t("section_roadmap.header.left_text")}
              <b className="font-weight-700">{t("section_roadmap.header.b")}</b>
            </h2>
          </div>
          <div className="col-lg-6 roadmap__slider-controls wow">
            <button className="arrow arrow--prev roadmap__arrow roadmap__arrow--prev">
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
                ></path>
              </svg>
            </button>
            <div className="roadmap__pagination "></div>
            <button className="arrow arrow--next roadmap__arrow roadmap__arrow--next ">
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
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <Swiper
          className={`roadmap__slider`}
          navigation={{
            nextEl: ".roadmap__arrow--next",
            prevEl: ".roadmap__arrow--prev",
          }}
          pagination={{
            el: ".roadmap__pagination",
            clickable: "true",
          }}
          breakpoints={{
            620: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            1600: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={75}
          onSlideChange={() => setHidden(!hidden)}
          style={{ overflow: "visible" }}
        >
          <div className="swiper-wrapper ">
            {localState.map((e) => (
              <SwiperSlide
                key={e.id}
                className={`${
                  hidden
                    ? e.id > 3
                      ? style.hiddens
                      : ""
                    : e.id <= 3
                    ? style.hiddens
                    : ""
                }`}
              >
                <div className={`roadmap__slider-item swiper-slide-next`}>
                  <div className="roadmap__slider-item-label">
                    {t(`section_roadmap.block_${e.id}.head`)}
                  </div>
                  <ul
                    className={`roadmap__slider-item-list ${
                      e.id === 1 ? style.line_through : ""
                    }`}
                  >
                    {e.texts.map((c) => (
                      <li
                        key={c.id}
                        className={`roadmap__slider-item-list-item ${
                          e.id === 2 && c.id === 1 ? style.line_through : ""
                        }`}
                      >
                        {t(`section_roadmap.block_${e.id}.item_${c.id}`)}
                      </li>
                    ))}
                  </ul>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
};
