import React from "react";
import { useTranslation } from "react-i18next";
import "../../../../../utils/i18next";

import { Fade } from "react-awesome-reveal";

import delegates__cards_list_item_icon_1 from "../../../../../img/delegates__cards-list-item-icon-1.svg";
import delegates__cards_list_item_icon_2 from "../../../../../img/delegates__cards-list-item-icon-2.svg";
import delegates__cards_list_item_icon_3 from "../../../../../img/delegates__cards-list-item-icon-3.svg";
import delegates__cards_list_item_icon_4 from "../../../../../img/delegates__cards-list-item-icon-4.svg";
import delegates__cards_list_item_icon_5 from "../../../../../img/delegates__cards-list-item-icon-5.svg";
import delegates__cards_list_item_icon_6 from "../../../../../img/delegates__cards-list-item-icon-6.svg";

import delegates__img from "../../../../../img/delegates__img.png";

export const SectionDelegates = (props) => {
  const { t } = useTranslation();
  return (
    <section className="section delegates">
      <div className="container delegates__container">
        <div className="row delegates__row">
          <div className="col-lg-7 delegates__main">
            <div className="delegates__main-texts wow">
              <Fade direction="left" triggerOnce="true">
                <h2 className="heading font-size-40 delegates__heading">
                  <b className="font-weight-700">
                    {t("section_delegates.head")}
                  </b>
                </h2>
                <div className="delegates__subheading">
                  {t("section_delegates.delegates_subheading.left_text")}
                  <b className="font-weight-600 dark-blue">
                    {t("section_delegates.delegates_subheading.b")}
                  </b>
                </div>
              </Fade>
            </div>
            <div className="delegates__cards" data-mobile-tabs>
              <Fade direction="left" delay={400} triggerOnce="true">
                <div className={`delegates__cards-item`}>
                  <div
                    className={`delegates__cards-row row delegates__cards-row_mobile`}
                  >
                    <ul className="delegates__cards-list col-auto">
                      <li className="delegates__cards-list-item">
                        <div className="delegates__cards-list-item-icon-wrap">
                          <img
                            src={delegates__cards_list_item_icon_1}
                            alt=""
                            className="img-responsive"
                          />
                        </div>
                        <div className="delegates__cards-list-item-heading">
                          {t("section_delegates.delegates_cards.item_1.h")}
                        </div>
                        <div className="delegates__cards-list-item-text">
                          {t("section_delegates.delegates_cards.item_1.p")}
                        </div>
                      </li>
                      <li className="delegates__cards-list-item">
                        <div className="delegates__cards-list-item-icon-wrap">
                          <img
                            src={delegates__cards_list_item_icon_2}
                            alt=""
                            className="img-responsive"
                          />
                        </div>
                        <div className="delegates__cards-list-item-heading">
                          {t("section_delegates.delegates_cards.item_2.h")}
                        </div>
                        <div className="delegates__cards-list-item-text">
                          {t("section_delegates.delegates_cards.item_2.p")}
                        </div>
                      </li>
                      <li className="delegates__cards-list-item">
                        <div className="delegates__cards-list-item-icon-wrap">
                          <img
                            src={delegates__cards_list_item_icon_3}
                            alt=""
                            className="img-responsive"
                          />
                        </div>
                        <div className="delegates__cards-list-item-heading">
                          {t("section_delegates.delegates_cards.item_3.h")}
                        </div>
                        <div className="delegates__cards-list-item-text">
                          {t("section_delegates.delegates_cards.item_3.p")}
                        </div>
                      </li>
                    </ul>
                    <ul className="delegates__cards-list col-auto">
                      <li className="delegates__cards-list-item">
                        <div className="delegates__cards-list-item-icon-wrap">
                          <img
                            src={delegates__cards_list_item_icon_4}
                            alt=""
                            className="img-responsive"
                          />
                        </div>
                        <div className="delegates__cards-list-item-heading">
                          {t("section_delegates.delegates_cards.item_4.h")}
                        </div>
                        <div className="delegates__cards-list-item-text">
                          {t("section_delegates.delegates_cards.item_4.p")}
                        </div>
                      </li>
                      <li className="delegates__cards-list-item">
                        <div className="delegates__cards-list-item-icon-wrap">
                          <img
                            src={delegates__cards_list_item_icon_5}
                            alt=""
                            className="img-responsive"
                          />
                        </div>
                        <div className="delegates__cards-list-item-heading">
                          {t("section_delegates.delegates_cards.item_5.h")}
                        </div>
                        <div className="delegates__cards-list-item-text">
                          {t("section_delegates.delegates_cards.item_5.p")}
                        </div>
                      </li>
                      <li className="delegates__cards-list-item">
                        <div className="delegates__cards-list-item-icon-wrap">
                          <img
                            src={delegates__cards_list_item_icon_6}
                            alt=""
                            className="img-responsive"
                          />
                        </div>
                        <div className="delegates__cards-list-item-heading">
                          {t("section_delegates.delegates_cards.item_6.h")}
                        </div>
                        <div className="delegates__cards-list-item-text">
                          {t("section_delegates.delegates_cards.item_6.p")}
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
          <div className="col-lg-5 delegates__img-wrap">
            <img
              src={delegates__img}
              alt="Img"
              className="delegates__img wow "
            />
            <div className="delegates__img-circle wow"></div>
            <Fade direction="right" triggerOnce="true">
              <div className="delegates__img-card wow">
                {t("section_delegates.delegates_img_card.p_1")}
                <br />
                <b className="font-weight-700">
                  {t("section_delegates.delegates_img_card.b_1")}
                </b>
                {t("section_delegates.delegates_img_card.p_2")}
                <br />
                {t("section_delegates.delegates_img_card.b_2")}
              </div>
            </Fade>
            <Fade direction="right" delay={200} triggerOnce="true">
              <div className="delegates__img-text wow">
                {t("section_delegates.delegates_img_text")}
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};
