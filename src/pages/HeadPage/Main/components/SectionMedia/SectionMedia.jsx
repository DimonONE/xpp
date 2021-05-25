import React from "react";
import { useTranslation } from "react-i18next";
import "../../../../../utils/i18next";

import { Fade } from "react-awesome-reveal";
import { localState } from "./LocalState.js";

export const SectionMedia = (props) => {
  const { t } = useTranslation();

  return (
    <section className="section media">
      <div className="container media__container">
        <Fade direction="down" triggerOnce="true">
          <h2 className="heading font-size-40 media__heading text-center wow animate__animated animate__fadeInDown">
            <b className="font-weight-700">{t("section_media.header")}</b>
          </h2>
        </Fade>
        <div className="row media__row">
          {localState.map((e) => (
            <div key={e.id} className={`${style.block_icon}`}>
              <Fade direction="up" triggerOnce="true" delay={e.delay}>
                <div className="media__item">
                  <div className={`media__item-img`} style={e.dataStyle}></div>
                  <a href={e.link} className="media__item-link">
                    {e.text}
                  </a>
                </div>
              </Fade>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
