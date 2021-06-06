import React from "react";
import style from "../SectionCryptoTrackers/SectionCryptoTrackers.module.css";
import { useTranslation } from "react-i18next";
import "../../../../../utils/i18next";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Pagination,
  EffectFade,
  Scrollbar,
  Mousewheel,
} from "swiper/core";
import "swiper/swiper-bundle.css";

import { Fade } from "react-awesome-reveal";
import { useGlobalState } from "./LocalState.js";

SwiperCore.use([Pagination, Scrollbar, Mousewheel, EffectFade]);

export const SectionMedia = (props) => {
  const { t } = useTranslation();
  const [listElements] = useGlobalState("listElements");

  return (
    <section className={`section media`}>
      <div className="container media__container">
        <Fade direction="down" triggerOnce="true">
          <h2 className="heading font-size-40 media__heading text-center wow animate__animated animate__fadeInDown">
            <b className="font-weight-700">{t("section_media.header")}</b>
          </h2>
        </Fade>

        <Swiper
          direction={"horizontal"}
          scrollbar={{
            el: ".media__pagination",
            draggable: true,
          }}
          breakpoints={{
            900: { slidesPerView: 6, spaceBetween: 60 },
            600: { slidesPerView: 4, spaceBetween: 40 },
            420: { slidesPerView: 3, spaceBetween: 40 },
            300: { slidesPerView: 2, spaceBetween: 20 },
          }}
          spaceBetween={75}
          autoHeight={true}
          mousewheel={{
            sensitivity: 1,
          }}
        >
          <div className="swiper-wrapper ">
            {listElements.map((e) => (
              <SwiperSlide
                key={e.id}
                className={`${style.block_icon}`}
                style={{ height: 205 }}
              >
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
          </div>
          <div className={"media__pagination"}></div>
        </Swiper>
      </div>
    </section>
  );
};
