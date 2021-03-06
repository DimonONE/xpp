import React from "react";
import style from "./SectionMedia.module.css";
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
            600: { slidesPerView: 6, spaceBetween: 40 },
            420: { slidesPerView: 3.5, spaceBetween: 20 },
            300: { slidesPerView: 3.5, spaceBetween: 10 },
          }}
          autoHeight={true}
          mousewheel={{
            sensitivity: 3,
          }}
        >
          <div className="swiper-wrapper ">
            {listElements.map((e) => (
              <SwiperSlide
                key={e.id}
                className={`${style.block_icon}`}
                // style={{ height: 185 }}
              >
                <div className={`${style.block_icon__position}`}>
                  <div className={`${style.width_icons}`}>
                    <img src={e.icon} alt="icon" className={`${style.icon}`} />
                  </div>
                </div>

                <a
                  href={e.link}
                  className={`media__item-link `}
                  target="_blank"
                  rel="noreferrer"
                >
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
