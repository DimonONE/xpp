import React from "react";
import { useTranslation } from "react-i18next";
import "../../../../../utils/i18next";

import { Fade } from "react-awesome-reveal";

import compare__item_icon_1 from "../../../../../img/compare__item-icon-1.svg";
import compare__item_icon_2 from "../../../../../img/compare__item-icon-2.svg";
import compare__item_img_1 from "../../../../../img/compare__item-img-1.svg";
import compare__item_img_2 from "../../../../../img/compare__item-img-2.svg";

export const SectionCompare = (props) => {
  const { t } = useTranslation();

  return (
    <section className="section compare">
      <div className="container compare__container">
        <div className="pattern">
          <div className="pattern__img pattern__img--6"></div>
          <div className="pattern__img pattern__img--9"></div>
          <div className="pattern__img pattern__img--11"></div>
        </div>
        <Fade triggerOnce="true" direction="up">
          <h2 className="heading font-size-40 compare__heading text-center wow animate__animated animate__fadeInDown">
            <b className="font-weight-700">{t("section_compare.head.b")}</b>
            {t("section_compare.head.right_text")}
          </h2>
        </Fade>
        <div className="row compare__row">
          <div className="col-lg-6 compare__item-wrap wow">
            <Fade triggerOnce="true" direction="left">
              <div>
                <div className="compare__item-icon-wrap grit grit--green">
                  <div className="grit__bg"></div>
                  <img
                    src={compare__item_icon_1}
                    alt=""
                    className="grit__icon compare__item-icon"
                  />
                </div>
                <img
                  src={compare__item_img_1}
                  alt=""
                  className="img-responsive compare__item-img compare__item-img--1"
                />
                <div className="compare__item compare__item--green">
                  <div className="compare__item-heading compare__item-heading--green">
                    {t("section_compare.cryptocurrency.head")}
                  </div>
                  <ul className="compare__item-list">
                    <li className="compare__item-list-item">
                      {t("section_compare.cryptocurrency.items.item_1")}
                    </li>
                    <li className="compare__item-list-item">
                      {t("section_compare.cryptocurrency.items.item_2")}
                    </li>
                    <li className="compare__item-list-item">
                      {t("section_compare.cryptocurrency.items.item_3")}
                    </li>
                    <li className="compare__item-list-item">
                      {t("section_compare.cryptocurrency.items.item_4")}
                    </li>
                    <li className="compare__item-list-item">
                      {t("section_compare.cryptocurrency.items.item_5")}
                    </li>
                    <li className="compare__item-list-item">
                      {t("section_compare.cryptocurrency.items.item_6")}
                    </li>
                    <li className="compare__item-list-item">
                      {t("section_compare.cryptocurrency.items.item_7")}
                    </li>
                  </ul>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-lg-6 compare__item-wrap wow ">
            <Fade triggerOnce="true" direction="right">
              <div>
                <div className="compare__item-icon-wrap grit grit--red">
                  <div className="grit__bg"></div>
                  <img
                    src={compare__item_icon_2}
                    alt=""
                    className="grit__icon compare__item-icon"
                  />
                </div>
                <img
                  src={compare__item_img_2}
                  alt=""
                  className="img-responsive compare__item-img compare__item-img--2"
                />
                <div className="compare__item compare__item--red">
                  <div className="compare__item-heading compare__item-heading--red">
                    {t("section_compare.pyramid.head")}
                  </div>
                  <ul className="compare__item-list">
                    <li className="compare__item-list-item">
                      {t("section_compare.pyramid.items.item_1")}
                    </li>
                    <li className="compare__item-list-item">
                      {t("section_compare.pyramid.items.item_2")}
                    </li>
                    <li className="compare__item-list-item">
                      {t("section_compare.pyramid.items.item_3")}
                    </li>
                    <li className="compare__item-list-item">
                      {t("section_compare.pyramid.items.item_4")}
                    </li>
                    <li className="compare__item-list-item">
                      {t("section_compare.pyramid.items.item_5")}
                    </li>
                    <li className="compare__item-list-item">
                      {t("section_compare.pyramid.items.item_6")}
                    </li>
                    <li className="compare__item-list-item">
                      {t("section_compare.pyramid.items.item_7")}
                    </li>
                  </ul>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};
