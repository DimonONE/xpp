import React from "react";
import { useTranslation } from "react-i18next";
import "../../../../../utils/i18next";

import { Fade } from "react-awesome-reveal";

import work__card_icon_1 from "../../../../../img/work__card-icon-1.svg";
import work__card_icon_2 from "../../../../../img/work__card-icon-2.svg";
import work__card_icon_3 from "../../../../../img/work__card-icon-3.svg";

export const SectionWork = (props) => {
  const { t } = useTranslation();
  return (
    <section className="section work">
      <div className="container work__container">
        <div className="pattern">
          <div className="pattern__img pattern__img--9"></div>
          <div className="pattern__img pattern__img--10"></div>
        </div>
        <div className="row work__header">
          <div className="col-xl-5 col-md-6 work__heading-wrap wow ">
            <Fade direction="left" triggerOnce="true">
              <h2 className="heading font-size-40 work__heading">
                <p>{t("section_work.head.left_text")} </p>
                <b className="font-weight-700">
                  {t("section_work.head.b")}
                </b>{" "}
                {t("section_work.head.right_text")}
              </h2>
            </Fade>
          </div>
          <div className="col-xl-5 col-md-6 work__header-card-wrap wow">
            <Fade direction="right" triggerOnce="true">
              <div className="work__header-card">
                <p>{t("section_work.work__header_card.p_1")}</p>
                <p>{t("section_work.work__header_card.p_2")}</p>
                <b className="font-weight-700">
                  {t("section_work.work__header_card.b")}{" "}
                </b>
                {t("section_work.work__header_card.p_3")}
              </div>
            </Fade>
          </div>
        </div>
        <div className="row work__cards">
          <div className="col-xl-10">
            <div className="d-flex work__row work__row--1">
              <div className="work__card-wrap wow">
                <Fade direction="down" triggerOnce="true">
                  <div className="work__card work__card--small d-flex grit grit--orange">
                    <div className="grit__bg"></div>
                    <img
                      src={work__card_icon_1}
                      alt=""
                      className="img-responsive work__card-icon"
                    />
                    <div className="work__card-text-wrap">
                      <div className="work__card-text font-weight-700 font-size-18">
                        {t("section_work.work__cards.work__card_text_1.p_1")}
                      </div>
                      <div className="work__card-text">
                        <p>
                          {t("section_work.work__cards.work__card_text_1.p_2")}
                        </p>
                        {t("section_work.work__cards.work__card_text_1.p_3")}
                        <b className="font-weight-700">
                          {t("section_work.work__cards.work__card_text_1.b")}
                        </b>
                      </div>
                    </div>
                  </div>
                </Fade>
                <div className="work__card-arrow"></div>
              </div>
              <div className="work__card-wrap wow">
                <Fade direction="down" triggerOnce="true" delay={200}>
                  <div className="work__card work__card--small d-flex grit grit--orange">
                    <div className="grit__bg"></div>
                    <img
                      src={work__card_icon_1}
                      alt=""
                      className="img-responsive work__card-icon"
                    />
                    <div className="work__card-text-wrap">
                      <div className="work__card-text font-weight-700 font-size-18">
                        {t("section_work.work__cards.work__card_text_2.p_1")}
                      </div>
                      <div className="work__card-text">
                        <p>
                          {t("section_work.work__cards.work__card_text_2.p_2")}
                        </p>
                        {t("section_work.work__cards.work__card_text_2.p_3")}{" "}
                        <b className="font-weight-700">
                          {t("section_work.work__cards.work__card_text_2.b")}
                        </b>
                      </div>
                    </div>
                  </div>
                </Fade>
                <div className="work__card-arrow"></div>
              </div>
              <div className="work__card-wrap wow">
                <Fade direction="down" triggerOnce="true" delay={400}>
                  <div className="work__card work__card--small d-flex grit grit--orange">
                    <div className="grit__bg"></div>
                    <img
                      src={work__card_icon_1}
                      alt=""
                      className="img-responsive work__card-icon"
                    />
                    <div className="work__card-text-wrap">
                      <div className="work__card-text font-weight-700 font-size-18">
                        {t("section_work.work__cards.work__card_text_3.p_1")}
                      </div>
                      <div className="work__card-text">
                        <p>
                          {t("section_work.work__cards.work__card_text_3.p_2")}
                        </p>
                        {t("section_work.work__cards.work__card_text_3.p_3")}
                        <b className="font-weight-700">
                          {t("section_work.work__cards.work__card_text_3.b")}
                        </b>
                      </div>
                    </div>
                  </div>
                </Fade>
                <div className="work__card-arrow"></div>
              </div>
            </div>
            <div className="d-flex work__row work__row--2 justify-content-end">
              <Fade
                direction="left"
                triggerOnce="true"
                delay={400}
                className="work__caption work__caption--1 font-weight-700 font-size-15 wow"
              >
                <div>{t("section_work.work__caption.left")}</div>
              </Fade>
              <div className="work__card-wrap work__card-wrap--medium wow">
                <Fade direction="down" triggerOnce="true" delay={200}>
                  <div className="work__card work__card--medium d-flex align-items-center grit grit--pink">
                    <div className="grit__bg"></div>
                    <img
                      src={work__card_icon_2}
                      alt=""
                      className="img-responsive work__card-icon"
                    />
                    <div className="work__card-text-wrap">
                      <div className="work__card-text">
                        <b className="font-weight-600">
                          {t("section_work.work__cards.work__card_text_4.p_1")}
                        </b>
                        {t("section_work.work__cards.work__card_text_4.b")}
                        <p>
                          {t("section_work.work__cards.work__card_text_4.p_2")}
                        </p>
                      </div>
                    </div>
                  </div>
                </Fade>
                <div className="work__card-arrow"></div>
              </div>
              <div className="work__card-wrap work__card-wrap--medium wow">
                <Fade direction="down" triggerOnce="true" delay={400}>
                  <div className="work__card work__card--medium d-flex align-items-center grit grit--pink">
                    <div className="grit__bg"></div>
                    <img
                      src={work__card_icon_2}
                      alt=""
                      className="img-responsive work__card-icon"
                    />
                    <div className="work__card-text-wrap">
                      <div className="work__card-text">
                        <b className="font-weight-600">
                          {t("section_work.work__cards.work__card_text_5.p_1")}
                        </b>
                        {t("section_work.work__cards.work__card_text_5.b")}
                        <p>
                          {t("section_work.work__cards.work__card_text_5.p_2")}
                        </p>
                      </div>
                    </div>
                  </div>
                </Fade>
                <div className="work__card-arrow"></div>
              </div>
              <Fade
                direction="right"
                triggerOnce="true"
                delay={400}
                className="work__caption work__caption--2 font-weight-700 font-size-15 wow"
              >
                <div>{t("section_work.work__caption.right")}</div>
              </Fade>
            </div>
            <Fade direction="up" triggerOnce="true" delay={2}>
              <div className="d-flex work__row work__row--3 work__row">
                <div className="work__card work__card--large d-flex align-items-center grit grit--dark-blue col-12 wow animate__animated animate__fadeInUp">
                  <div className="grit__bg"></div>
                  <img
                    src={work__card_icon_3}
                    alt=""
                    className="img-responsive work__card-icon"
                  />
                  <div className="work__card-text-wrap">
                    <div className="work__card-text font-size-18">
                      <p>{t("section_work.footer.p_1")}</p>
                      <p>{t("section_work.footer.p_2")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};
