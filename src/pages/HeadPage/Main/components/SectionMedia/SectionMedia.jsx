import React from "react";
import style from "./SectionMedia..module.css";
import { useTranslation } from "react-i18next";
import "../../../../../utils/i18next";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectFade } from "swiper/core";
import "swiper/swiper-bundle.css";

import { Fade } from "react-awesome-reveal";
import { localState } from "./LocalState.js";

SwiperCore.use([Navigation, Pagination, EffectFade]);

export const SectionMedia = (props) => {
  const { t } = useTranslation();

  return (
    <section className={`section media ${style.section_media}`}>
      <div className="container media__container">
        <Fade direction="down" triggerOnce="true">
          <h2 className="heading font-size-40 media__heading text-center wow animate__animated animate__fadeInDown">
            <b className="font-weight-700">{t("section_media.header")}</b>
          </h2>
        </Fade>

        <div style={{ display: "flex" }}>
          <button className="arrow arrow--prev steps__arrow steps__arrow_media--prev">
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
          <Swiper
            className="steps__slider swiper-container swiper_media"
            direction={"horizontal"}
            navigation={{
              nextEl: ".steps__arrow_media--next",
              prevEl: ".steps__arrow_media--prev",
            }}
            breakpoints={{
              900: { slidesPerView: 6, spaceBetween: 60 },
              600: { slidesPerView: 4, spaceBetween: 40 },
              300: { slidesPerView: 3, spaceBetween: 20 },
            }}
          >
            {localState.map((e) => (
              <SwiperSlide key={e.id} className={`${style.block_icon}`}>
                <div className={`${style.block_icon__position}`}>
                  <div className={`${style.width_icons}`}>
                    <img src={e.icon} alt="icon" />
                  </div>
                </div>

                <a href={e.link} className={`media__item-link `}>
                  {t(`section_media.media_item_${e.id}`)}
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="arrow arrow--next steps__arrow steps__arrow_media--next">
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
      </div>
    </section>
  );
};
