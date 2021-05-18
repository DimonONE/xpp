import React from "react";
import { useTranslation } from "react-i18next";
import "../../../../../utils/i18next";

import { Fade } from "react-awesome-reveal";

import founder__img from "../../../../../img/founder__img.jpg";
import founder__info_icon from "../../../../../img/founder__info-icon.svg";

export const SectionFounder = (props) => {
  const { t } = useTranslation();

  return (
    <section className="section founder">
      <div className="container founder__container">
        <div className="pattern">
          <div className="pattern__img pattern__img--3"></div>
          <div className="pattern__img pattern__img--7"></div>
          <div className="pattern__img pattern__img--9"></div>
          <div className="pattern__img pattern__img--11"></div>
          <div className="pattern__img pattern__img--13"></div>
        </div>
        <div id="founderMobileHeading"></div>
        <div className="row founder__row">
          <div className="col-lg-5 founder__img-wrap">
            <Fade direction="left" triggerOnce="true">
              <img
                src={founder__img}
                alt="Img"
                className="img-responsive founder__img wow"
              />
            </Fade>
            <Fade direction="up" triggerOnce="true" duration={600}>
              <div className="founder__info-wrap wow ">
                <div className="founder__info">
                  <div className="founder__info-heading">
                    {t("section_founder.founder_info.head")}
                  </div>
                  <div className="founder__info-text">
                    {t("section_founder.founder_info.p_1")}
                    <br />
                    {t("section_founder.founder_info.p_2")}
                    <br />
                    {t("section_founder.founder_info.p_3")}
                  </div>
                </div>
                <div
                  className="founder__info-icon"
                  style={{ backgroundImage: "url(" + founder__info_icon + ")" }}
                ></div>
              </div>
            </Fade>
          </div>
          <div className="col-lg-7 founder__texts wow">
            <Fade direction="right" triggerOnce="true">
              <div>
                <h2
                  className="heading font-size-40 founder__heading"
                  data-replace="founderMobileHeading"
                >
                  {t("section_founder.header.left_text")}
                  <b className="font-weight-700">
                    {t("section_founder.header.b")}
                  </b>
                </h2>
                <div className="founder__text">
                  {t("section_founder.texts.founder__text_1")}
                </div>
                <div className="founder__text">
                  {t("section_founder.texts.founder__text_2")}
                </div>
                <div className="founder__text">
                  {t("section_founder.texts.founder__text_3")}
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};
