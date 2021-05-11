import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { localState } from "./State";

export const SectionSteps = (props) => {
  let [button_01, setButton_01] = useState(true);
  let [button_02, setButton_02] = useState(false);
  let [button_03, setButton_03] = useState(false);
  let [button_04, setButton_04] = useState(false);

  const resetButtonFolow = () => {
    setButton_01(false);
    setButton_02(false);
    setButton_03(false);
    setButton_04(false);
  };

  const logicButton_01 = () => {
    resetButtonFolow();
    setButton_01(true);
  };
  const logicButton_02 = () => {
    resetButtonFolow();
    setButton_02(true);
  };
  const logicButton_03 = () => {
    resetButtonFolow();
    setButton_03(true);
  };
  const logicButton_04 = () => {
    resetButtonFolow();
    setButton_04(true);
  };
  const whatButtonClick = () => {
    if (button_01) {
      return 1;
    } else if (button_02) {
      return 2;
    } else if (button_03) {
      return 3;
    } else if (button_04) {
      return 4;
    }
  };
  const buttonOnTheLeft = () => {
    if (button_02) {
      logicButton_01();
    } else if (button_03) {
      logicButton_02();
    } else if (button_04) {
      logicButton_03();
    }
  };
  const buttonOnTheRigth = () => {
    if (button_01) {
      logicButton_02();
    } else if (button_02) {
      logicButton_03();
    } else if (button_03) {
      logicButton_04();
    }
  };

  return (
    <section className="section steps">
      <div className="container steps__container">
        <div className="pattern">
          <div className="pattern__img pattern__img--1"></div>
          <div className="pattern__img pattern__img--5"></div>
          <div className="pattern__img pattern__img--8"></div>
        </div>
        <div className="row steps__row">
          <div className="col-lg-6 steps__heading-wrap wow ">
            <h2 className="heading steps__heading font-size-40">
              How it <b className="font-weight-700">works?</b>
            </h2>
          </div>
          <div className="col-lg-6 col-md-9 d-flex steps__controls wow ">
            <button
              onClick={buttonOnTheLeft}
              className="arrow arrow--prev steps__arrow steps__arrow--prev"
            >
              <svg
                width="38"
                height="19"
                viewBox="0 0 38 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M37 9.14868H1M1 9.14868L9 1.14868M1 9.14868L9 17.1487"
                  stroke="#FF8225"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="steps__pagination swiper-pagination-clickable swiper-pagination-bullets">
              <span
                onClick={logicButton_01}
                className={`steps__pagination-item swiper-pagination-bullet ${
                  button_01 ? "swiper-pagination-bullet-active" : " "
                }`}
              >
                01
              </span>
              <span
                onClick={logicButton_02}
                className={`steps__pagination-item swiper-pagination-bullet ${
                  button_02 ? "swiper-pagination-bullet-active" : " "
                }`}
              >
                02
              </span>
              <span
                onClick={logicButton_03}
                className={`steps__pagination-item swiper-pagination-bullet ${
                  button_03 ? "swiper-pagination-bullet-active" : " "
                }`}
              >
                03
              </span>
              <span
                onClick={logicButton_04}
                className={`steps__pagination-item swiper-pagination-bullet ${
                  button_04 ? "swiper-pagination-bullet-active" : " "
                }`}
              >
                04
              </span>
            </div>
            <button
              onClick={buttonOnTheRigth}
              className="arrow arrow--next steps__arrow steps__arrow--next"
            >
              <svg
                width="38"
                height="19"
                viewBox="0 0 38 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 9.14868H37M37 9.14868L29 1.14868M37 9.14868L29 17.1487"
                  stroke="#FF8225"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="col-12 wow animate__animated animate__fadeInUp">
            <div className="steps__slider swiper-container">
              <div className="swiper-wrapper">
                {localState.map(
                  (e) =>
                    e.id === whatButtonClick() && (
                      <div
                        key={e.id}
                        className="swiper-slide steps__slider-item swiper-slide-active"
                      >
                        <div className="steps__slider-item-row row">
                          <div className="col-xl-5 col-lg-6 col-md-9 steps__slider-main-wrap">
                            <div className="steps__slider-counter font-size-24 font-weight-600">
                              {e.text_step}
                            </div>
                            <div className="steps__slider-main">
                              {e.blocks.map((texts_elements) => (
                                <Fade
                                  key={texts_elements.id}
                                  triggerOnce="true"
                                  direction="down"
                                  delay={texts_elements.delay}
                                  className="steps__slider-main-item d-flex"
                                >
                                  <div>
                                    <div
                                      className={`steps__slider-main-item-icon-wrap grit ${texts_elements.grit_color_class}`}
                                    >
                                      <div className="grit__bg"></div>
                                      <img
                                        src={texts_elements.img_steps__slider}
                                        alt="None"
                                        className="steps__slider-main-item-icon grit__icon"
                                      />
                                    </div>
                                    <div className="steps__slider-main-item-texts">
                                      <div
                                        className={`steps__slider-main-item-heading ${texts_elements.text_color_class} font-size-20`}
                                      >
                                        {texts_elements.head_text}
                                      </div>
                                      <div
                                        className="steps__slider-main-item-text"
                                        style={{ fontSize: 18 }}
                                      >
                                        {
                                          texts_elements.steps__slider_texts_left
                                        }{" "}
                                        <b className="font-weight-600">
                                          {texts_elements.head_text_b}
                                        </b>{" "}
                                        {
                                          texts_elements.steps__slider_texts_rigth
                                        }
                                      </div>
                                    </div>
                                    <img
                                      src={texts_elements.icon_little}
                                      alt="None"
                                      className="img-responsive steps__slider-main-item-icon-little"
                                    />
                                  </div>
                                </Fade>
                              ))}
                            </div>
                          </div>
                          <div className="col-xl-7 col-lg-6 steps__slider-img-wrap">
                            <img
                              src={e.steps__slider_img}
                              alt="Img"
                              className="steps__slider-img steps__slider-img--1"
                            />
                            <div className="steps__slider-circle"></div>
                          </div>
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
