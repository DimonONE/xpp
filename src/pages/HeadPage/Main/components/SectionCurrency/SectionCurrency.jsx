import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";

import style from "./SectionCurrency.module.css";

export const SectionCurrency = (props) => {
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
            All the <b className="font-weight-700">best developments</b> -
            <p> in one cryptocurrency </p>
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
                      More beneficial than Bitcoin
                    </div>
                  </div>
                  <div
                    className={`currency__accordion-hidden ${style.currency__accordion_hidden} `}
                    data-dropdown-hidden
                  >
                    <div
                      className={`currency__accordion-text ${style.is_active_1}`}
                    >
                      XX Platform is a system that combines a multifunctional
                      cabinet with investment elements and a trading service
                      with a set of analytical tools and an asset management
                      program.
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
                      Safer than Altcoins
                    </div>
                  </div>
                  <div className="currency__accordion-hidden">
                    <div
                      className={`currency__accordion-text ${style.is_active_2}`}
                    >
                      Most altcoins are worthless coins with no technology, no
                      idea and no future. XXP is a native token of the
                      investment trading platform and a tool for mutual
                      settlements between investors and traders. And,
                      accordingly, it has a fairly high level of liquidity and
                      is a safe investment asset.
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
                      More prospective than Ethereum
                    </div>
                  </div>
                  <div className="currency__accordion-hidden">
                    <div
                      className={`currency__accordion-text ${style.is_active_3}`}
                    >
                      In due time, Ethereum made a technological revolution in
                      the crypto industry. It still remains one of the most
                      prospective cryptocurrencies. However, ETH has an
                      unlimited issue and its price has increased from $ 0.43 to
                      $ 1,700 in the last 5 years, that's why the chances of
                      further growth are significantly reduced. The issue of XXP
                      is limited to 50 million and the price is at the only
                      start of its journey.
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
