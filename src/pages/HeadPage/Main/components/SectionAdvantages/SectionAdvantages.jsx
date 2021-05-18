import React from "react";
import { useTranslation } from "react-i18next";
import "../../../../../utils/i18next";

import { Fade } from "react-awesome-reveal";

import advantages__item_icon_1 from "../../../../../img/advantages__item-icon-1.svg";
import advantages__item_icon_2 from "../../../../../img/advantages__item-icon-2.svg";
import advantages__item_icon_3 from "../../../../../img/advantages__item-icon-3.svg";
import advantages__item_icon_4 from "../../../../../img/advantages__item-icon-4.svg";
import advantages__item_icon_5 from "../../../../../img/advantages__item-icon-5.svg";
import advantages__item_icon_6 from "../../../../../img/advantages__item-icon-6.svg";

export const SectionAdvantages = (props) => {
  const { t } = useTranslation();

  return (
    <section id="advantages" className="section advantages">
      <div className="container advantages__container wow">
        <div className="pattern">
          <div className="pattern__img pattern__img--1"></div>
          <div className="pattern__img pattern__img--11"></div>
          <div className="pattern__img pattern__img--12"></div>
        </div>
        <h2 className="heading font-size-40 advantages__heading text-center">
          <b className="font-weight-700">{t("section_advantages.head.b")}</b>
          {t("section_advantages.head.right_text")}
        </h2>
        <div className="row advantages__row">
          <div className="col-lg-4 col-md-6 advantages__item-wrap wow">
            <Fade triggerOnce="true">
              <div className="advantages__item">
                <div className="advantages__item-icon-wrap">
                  <img
                    src={advantages__item_icon_1}
                    alt=""
                    className="advantages__item-icon"
                  />
                </div>
                <div className="advantages__item-heading">
                  {t("section_advantages.items.item_1.head")}
                </div>
                <div className="advantages__item-text">
                  {t("section_advantages.items.item_1.p_1")}
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-lg-4 col-md-6 advantages__item-wrap wow">
            <Fade delay={200} triggerOnce="true">
              <div className="advantages__item">
                <div className="advantages__item-icon-wrap">
                  <img
                    src={advantages__item_icon_2}
                    alt=""
                    className="advantages__item-icon"
                  />
                </div>
                <div className="advantages__item-heading">
                  {t("section_advantages.items.item_2.head")}
                </div>
                <div className="advantages__item-text">
                  {t("section_advantages.items.item_2.p_1")}
                  <br />
                  {t("section_advantages.items.item_2.p_2")}
                  <br />
                  {t("section_advantages.items.item_2.p_3")}
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-lg-4 col-md-6 advantages__item-wrap wow">
            <Fade delay={300} triggerOnce="true">
              <div className="advantages__item">
                <div className="advantages__item-icon-wrap">
                  <img
                    src={advantages__item_icon_3}
                    alt=""
                    className="advantages__item-icon"
                  />
                </div>
                <div className="advantages__item-heading">
                  {t("section_advantages.items.item_3.head")}
                </div>
                <div className="advantages__item-text">
                  {t("section_advantages.items.item_3.p_1")}
                  <br />
                  {t("section_advantages.items.item_3.p_2")}
                  <br />
                  {t("section_advantages.items.item_3.p_3")}
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-lg-4 col-md-6 advantages__item-wrap wow">
            <Fade delay={400} triggerOnce="true">
              <div className="advantages__item">
                <div className="advantages__item-icon-wrap">
                  <img
                    src={advantages__item_icon_4}
                    alt=""
                    className="advantages__item-icon"
                  />
                </div>
                <div className="advantages__item-heading">
                  {t("section_advantages.items.item_4.head")}
                </div>
                <div className="advantages__item-text">
                  {t("section_advantages.items.item_4.p_1")}
                  <br />
                  {t("section_advantages.items.item_4.p_2")}
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-lg-4 col-md-6 advantages__item-wrap wow">
            <Fade delay={500} triggerOnce="true">
              <div className="advantages__item">
                <div className="advantages__item-icon-wrap">
                  <img
                    src={advantages__item_icon_5}
                    alt=""
                    className="advantages__item-icon"
                  />
                </div>
                <div className="advantages__item-heading">
                  {t("section_advantages.items.item_5.head")}
                </div>
                <div className="advantages__item-text">
                  {t("section_advantages.items.item_5.p_1")}
                  <br />
                  {t("section_advantages.items.item_5.p_2")}
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-lg-4 col-md-6 advantages__item-wrap wow">
            <Fade delay={600} triggerOnce="true">
              <div className="advantages__item">
                <div className="advantages__item-icon-wrap">
                  <img
                    src={advantages__item_icon_6}
                    alt=""
                    className="advantages__item-icon"
                  />
                </div>
                <div className="advantages__item-heading">
                  {t("section_advantages.items.item_6.head")}
                </div>
                <div className="advantages__item-text">
                  {t("section_advantages.items.item_6.p_1")}
                  <br />
                  {t("section_advantages.items.item_6.p_2")}
                  <br />
                  {t("section_advantages.items.item_6.p_3")}
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};
