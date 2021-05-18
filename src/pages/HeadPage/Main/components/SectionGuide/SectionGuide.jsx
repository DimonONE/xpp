import React from "react";
import { useTranslation } from "react-i18next";
import "../../../../../utils/i18next";

import { Fade } from "react-awesome-reveal";
import style from "./SectionGuide.module.css";

export const SectionGuide = (props) => {
  const { t } = useTranslation();

  return (
    <section id="guide" className="section guide">
      <div className="container guide__container">
        <div className="pattern">
          <div className="pattern__img pattern__img--8"></div>
          <div className="pattern__img pattern__img--3"></div>
          <div className="pattern__img pattern__img--5"></div>
          <div className="pattern__img pattern__img--6"></div>
        </div>
        <Fade triggerOnce="true" direction="down">
          <h2 className="heading guide__heading font-size-40 text-center wow">
            {t("section_guide.head.left_text")}
            <b className="font-weight-700">{t("section_guide.head.b")}</b>
          </h2>
        </Fade>
        <div className="row guide__row">
          <div className="col-lg-6 guide__item-wrap wow">
            <Fade triggerOnce="true" direction="left">
              <div className="guide__item">
                <div
                  className={`guide__item-img ${style.guide__item_img_1}`}
                ></div>
                <div className="guide__item-card-wrap">
                  <div className="guide__item-card">
                    <div className="guide__item-number grit grit--orange">
                      <div className="grit__bg"></div>
                      {t("section_guide.guide__item_text_1.num")}
                    </div>
                    <div className="guide__item-text">
                      {t("section_guide.guide__item_text_1.left_text")}
                      <b className="font-weight-600">
                        {t("section_guide.guide__item_text_1.b")}
                      </b>
                      {t("section_guide.guide__item_text_1.right_text")}
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-lg-6 guide__item-wrap wow">
            <Fade triggerOnce="true" direction="right">
              <div className="guide__item">
                <div
                  className={`guide__item-img ${style.guide__item_img_2}`}
                ></div>
                <div className="guide__item-card-wrap">
                  <div className="guide__item-card">
                    <div className="guide__item-number grit grit--orange">
                      <div className="grit__bg"></div>
                      {t("section_guide.guide__item_text_2.num")}
                    </div>
                    <div className="guide__item-text">
                      {t("section_guide.guide__item_text_2.left_text")}
                      <b className="font-weight-600">
                        {t("section_guide.guide__item_text_2.b_1")}
                      </b>
                      {t("section_guide.guide__item_text_2.text_and")}
                      <b className="font-weight-600">
                        {t("section_guide.guide__item_text_2.b_2")}
                      </b>
                      {t("section_guide.guide__item_text_2.right_text")}
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-lg-6 guide__item-wrap wow">
            <Fade triggerOnce="true" direction="left">
              <div className="guide__item">
                <div
                  className={`guide__item-img ${style.guide__item_img_3}`}
                ></div>
                <div className="guide__item-card-wrap">
                  <div className="guide__item-card">
                    <div className="guide__item-number grit grit--orange">
                      <div className="grit__bg"></div>
                      {t("section_guide.guide__item_text_3.num")}
                    </div>
                    <div className="guide__item-text">
                      {t("section_guide.guide__item_text_3.left_text")}
                      <b className="font-weight-600">
                        {t("section_guide.guide__item_text_3.b_1")}
                      </b>
                      {t("section_guide.guide__item_text_3.right_text")}
                      <b className="font-weight-600">
                        {t("section_guide.guide__item_text_3.b_2")}
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-lg-6 guide__item-wrap wow animate__animated animate__fadeInRight">
            <Fade triggerOnce="true" direction="right">
              <div className="guide__item">
                <div
                  className={`guide__item-img ${style.guide__item_img_4}`}
                ></div>
                <div className="guide__item-card-wrap">
                  <div className="guide__item-card">
                    <div className="guide__item-number grit grit--orange">
                      <div className="grit__bg"></div>
                      {t("section_guide.guide__item_text_4.num")}
                    </div>
                    <div className="guide__item-text">
                      <b className="font-weight-600">
                        {t("section_guide.guide__item_text_4.b_1")}
                      </b>
                      {t("section_guide.guide__item_text_4.left_text")}
                      <b className="font-weight-600">
                        {t("section_guide.guide__item_text_4.b_2")}
                      </b>
                      {t("section_guide.guide__item_text_4.right_text")}
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-lg-6 guide__item-wrap wow animate__animated animate__fadeInLeft">
            <Fade triggerOnce="true" direction="left">
              <div className="guide__item">
                <div
                  className={`guide__item-img ${style.guide__item_img_5}`}
                ></div>
                <div className="guide__item-card-wrap">
                  <div className="guide__item-card">
                    <div className="guide__item-number grit grit--orange">
                      <div className="grit__bg"></div>
                      {t("section_guide.guide__item_text_5.num")}
                    </div>
                    <div className="guide__item-text">
                      <b className="font-weight-600">
                        {t("section_guide.guide__item_text_5.b")}
                      </b>
                      {t("section_guide.guide__item_text_5.left_text")}
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-lg-6 guide__item-wrap wow animate__animated animate__fadeInRight">
            <Fade triggerOnce="true" direction="right">
              <div className="guide__item">
                <div
                  className={`guide__item-img ${style.guide__item_img_6}`}
                ></div>
                <div className="guide__item-card-wrap">
                  <div className="guide__item-card">
                    <div className="guide__item-number grit grit--orange">
                      <div className="grit__bg"></div>
                      {t("section_guide.guide__item_text_6.num")}
                    </div>
                    <div className="guide__item-text">
                      <b className="font-weight-600">
                        {t("section_guide.guide__item_text_6.b_1")}
                      </b>
                      {t("section_guide.guide__item_text_6.left_text")}
                      <b className="font-weight-600">
                        {t("section_guide.guide__item_text_6.b_2")}
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
        <Fade triggerOnce="true" direction="up">
          <div className="text-center guide__btn-wrap wow animate__animated animate__fadeInUp">
            <a href="https://wallet.xxp.group/buy" className="btn guide__btn">
              {t("section_guide.buy")}
            </a>
          </div>
        </Fade>
      </div>
    </section>
  );
};
