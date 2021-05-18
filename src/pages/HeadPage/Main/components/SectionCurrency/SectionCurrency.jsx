import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../../../../utils/i18next";

import { Fade } from "react-awesome-reveal";
import style from "./SectionCurrency.module.css";

export const SectionCurrency = (props) => {
  const { t } = useTranslation();
  const [currency_accordion__1, setCurrency_accordion__1] = useState(true);
  const [currency_accordion__2, setCurrency_accordion__2] = useState(false);
  const [currency_accordion__3, setCurrency_accordion__3] = useState(false);

  const resetCurrencyAccordion = () => {
    setCurrency_accordion__1(false);
    setCurrency_accordion__2(false);
    setCurrency_accordion__3(false);
  };

  const currencyAccordionB1 = () => {
    resetCurrencyAccordion();
    setCurrency_accordion__1(true);
  };
  const currencyAccordionB2 = () => {
    resetCurrencyAccordion();
    setCurrency_accordion__2(true);
  };
  const currencyAccordionB3 = () => {
    resetCurrencyAccordion();
    setCurrency_accordion__3(true);
  };

  return (
    <section id="currency" className="section currency">
      <div className="container currency__container">
        <div className="pattern">
          <div className="pattern__img pattern__img--3"></div>
          <div className="pattern__img pattern__img--4"></div>
          <div className="pattern__img pattern__img--7"></div>
        </div>
        <Fade direction="left" triggerOnce="true">
          <h2 className="heading font-size-40 currency__heading wow">
            {t("section_currency.heading.left_text")}{" "}
            <b className="font-weight-700">{t("section_currency.heading.b")}</b>{" "}
            -<p> {t("section_currency.heading.right_text")} </p>
          </h2>
        </Fade>
        <div className="row currency__row">
          <div className="col-lg-6 currency__accordions">
            <Fade direction="left" delay={200} triggerOnce="true">
              <div className="currency__accordion-wrap wow ">
                <div
                  onClick={currencyAccordionB1}
                  className={`currency__accordion ${style.folow_active} ${
                    currency_accordion__1 ? `active ${style.active}` : ""
                  }`}
                >
                  <div
                    className={`currency__accordion-header`}
                    data-dropdown-header
                  >
                    <div
                      className={`currency__accordion-icon ${style.currency__accordion_icon_1}`}
                    ></div>
                    <div className="currency__accordion-heading font-size-20 font-weight-600">
                      {t("section_currency.currency__accordion_1.header")}
                    </div>
                  </div>
                  <div
                    className={`currency__accordion-hidden ${style.currency__accordion_hidden} `}
                    data-dropdown-hidden
                  >
                    <div
                      className={`currency__accordion-text ${style.is_active_1}`}
                    >
                      {t("section_currency.currency__accordion_1.text")}
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade direction="left" delay={400} triggerOnce="true">
              <div className="currency__accordion-wrap wow ">
                <div
                  onClick={currencyAccordionB2}
                  className={`currency__accordion ${style.folow_active} ${
                    currency_accordion__2 ? `active ${style.active}` : ""
                  }`}
                >
                  <div className="currency__accordion-header">
                    <div
                      className={`currency__accordion-icon ${style.currency__accordion_icon_2}`}
                    ></div>
                    <div className="currency__accordion-heading font-size-20 font-weight-600">
                      {t("section_currency.currency__accordion_2.header")}
                    </div>
                  </div>
                  <div className="currency__accordion-hidden">
                    <div
                      className={`currency__accordion-text ${style.is_active_2}`}
                    >
                      {t("section_currency.currency__accordion_2.text")}
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade direction="left" delay={600} triggerOnce="true">
              <div className="currency__accordion-wrap wow ">
                <div
                  onClick={currencyAccordionB3}
                  className={`currency__accordion ${style.folow_active} ${
                    currency_accordion__3 ? `active ${style.active}` : ""
                  }`}
                >
                  <div className="currency__accordion-header">
                    <div
                      className={`currency__accordion-icon ${style.currency__accordion_icon_3}`}
                    ></div>
                    <div className="currency__accordion-heading font-size-20 font-weight-600">
                      {t("section_currency.currency__accordion_3.header")}
                    </div>
                  </div>
                  <div className="currency__accordion-hidden">
                    <div
                      className={`currency__accordion-text ${style.is_active_3}`}
                    >
                      {t("section_currency.currency__accordion_3.text")}
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-lg-6 currency__video-wrap wow ">
            <a
              href="https://www.youtube.com/embed/_INE-0NiGGY"
              className={`currency__video glightbox ${style.currency__video}`}
              data-gallery="video"
            >
              <div className="play"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
