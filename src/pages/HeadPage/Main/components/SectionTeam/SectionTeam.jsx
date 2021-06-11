import React from "react";
import { useTranslation } from "react-i18next";
import "../../../../../utils/i18next";

import { Fade } from "react-awesome-reveal";

import team__item_img_1 from "../../../../../img/team__item-img-1.jpg";
import team__item_img_2 from "../../../../../img/team__item-img-2.jpg";
import team__item_img_3 from "../../../../../img/team__item-img-3.jpg";
import team__item_img_4 from "../../../../../img/team__item-img-4.jpg";
import team__item_img_5 from "../../../../../img/team__item-img-5.jpg";

export const SectionTeam = (props) => {
  const { t } = useTranslation();

  return (
    <section id="team" className="section team">
      <div className="container team__container">
        <div className="pattern">
          <div className="pattern__img pattern__img--1"></div>
          <div className="pattern__img pattern__img--6"></div>
        </div>
        <Fade direction="down" triggerOnce="true">
          <h2 className="heading font-size-40 team__heading text-center wow">
            {t("section_team.header.left_text")}
            <b className="font-weight-700">{t("section_team.header.b")}</b>
          </h2>
        </Fade>
        <Fade direction="down" triggerOnce="true">
          <div className="team__subheading text-center wow">
            {t("section_team.info")}
          </div>
        </Fade>
        <div className="row team__row">
          <div className="col-lg-6 team__item-wrap wow">
            <Fade direction="left" triggerOnce="true">
              <div className="team__item">
                <img
                  src={team__item_img_1}
                  alt="Img"
                  className="team__item-img team__item-img--large img-responsive"
                />
                <div className="team__item-heading">
                  {t("section_team.team_item.first_last_name")}
                </div>
                <div className="team__item-text">
                  {t("section_team.team_item.team_item_text")}
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-6 team__item-wrap wow">
                <Fade direction="right" triggerOnce="true" delay={100}>
                  <div className="team__item">
                    <div className="team__item-img-wrap">
                      <img
                        src={team__item_img_2}
                        alt="Img"
                        className="team__item-img img-responsive"
                      />
                    </div>
                    <div className="team__item-heading">
                      {t("section_team.item_1.head")}
                    </div>
                    <div className="team__item-text">
                      {t("section_team.item_1.p")}
                    </div>
                  </div>
                </Fade>
              </div>
              <div className="col-6 team__item-wrap wow">
                <Fade direction="right" triggerOnce="true" delay={200}>
                  <div className="team__item">
                    <div className="team__item-img-wrap">
                      <img
                        src={team__item_img_3}
                        alt="Img"
                        className="team__item-img team__item-img--shadow-none img-responsive"
                      />
                    </div>
                    <div className="team__item-heading">
                      {t("section_team.item_2.head")}
                    </div>
                    <div className="team__item-text">
                      {t("section_team.item_2.p")}
                    </div>
                  </div>
                </Fade>
              </div>
              <div className="col-6 team__item-wrap wow">
                <Fade direction="right" triggerOnce="true" delay={300}>
                  <a
                    href={"https://qwertydesign.ru/"}
                    className="team__item"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="team__item-img-wrap">
                      <img
                        src={team__item_img_4}
                        alt="Img"
                        className="team__item-img img-responsive"
                      />
                    </div>
                    <div className="team__item-heading">
                      {t("section_team.item_3.head")}
                    </div>
                    <div className="team__item-text">
                      {t("section_team.item_3.p")}
                    </div>
                  </a>
                </Fade>
              </div>
              <div className="col-6 team__item-wrap wow">
                <Fade direction="right" triggerOnce="true" delay={400}>
                  <a
                    href={"https://www.mediaband.ru/"}
                    className="team__item"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="team__item-img-wrap">
                      <img
                        src={team__item_img_5}
                        alt="Img"
                        className="team__item-img team__item-img--shadow-none img-responsive"
                      />
                    </div>
                    <div className="team__item-heading">
                      {t("section_team.item_4.head")}
                    </div>
                    <div className="team__item-text">
                      {t("section_team.item_4.p")}
                    </div>
                  </a>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
