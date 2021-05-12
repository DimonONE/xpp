import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./SectionRoadmap.module.css";

export const SectionRoadmap = (props) => {
  const [folowing, setFolowing] = useState(true);
  return (
    <section className="section roadmap">
      <div className="container roadmap__container">
        <div className="pattern">
          <div className="pattern__img pattern__img--1"></div>
          <div className="pattern__img pattern__img--3"></div>
        </div>
        <div className="roadmap__header row">
          <div className="col-lg-6 roadmap__heading-wrap wow">
            <h2 className="heading roadmap__heading font-size-40">
              Road <b className="font-weight-700">map</b>
            </h2>
          </div>
          <div
            className="col-lg-6 roadmap__slider-controls wow"
            style={{ visibility: "visible" }}
          >
            <button
              onClick={() => setFolowing(true)}
              className="arrow arrow--prev roadmap__arrow roadmap__arrow--prev"
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
                ></path>
              </svg>
            </button>
            <div className="roadmap__pagination swiper-pagination-clickable swiper-pagination-bullets">
              <span
                onClick={() => setFolowing(true)}
                className={`swiper-pagination-bullet ${
                  folowing ? "swiper-pagination-bullet-active" : ""
                }`}
              ></span>
              <span
                onClick={() => setFolowing(false)}
                className={`swiper-pagination-bullet ${
                  !folowing ? "swiper-pagination-bullet-active" : ""
                }`}
              ></span>
            </div>
            <button
              onClick={() => setFolowing(false)}
              className="arrow arrow--next roadmap__arrow roadmap__arrow--next"
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
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="swiper-container roadmap__slider">
          <div className={`swiper-wrapper ${style.swiper_wrapper}`}>
            <div
              className={`swiper-slide roadmap__slider-item ${
                folowing ? "swiper-slide-active" : style.swiper_slide__none
              } ${style.swiper_slide__width}`}
            >
              <div className="roadmap__slider-item-label">Q4 2020</div>
              <ul className={`roadmap__slider-item-list ${style.line_through}`}>
                <li className="roadmap__slider-item-list-item swiper-slide-active">
                  Marketing activities in social media and on crypto forums
                </li>
                <li className="roadmap__slider-item-list-item">
                  Smart contract publication on Tron Network
                </li>
                <li className="roadmap__slider-item-list-item">
                  Start of the XXP token presale
                </li>
                <li className="roadmap__slider-item-list-item">
                  Alpha version of the investment platform
                </li>
                <li className="roadmap__slider-item-list-item">
                  XX Delegate system activation
                </li>
              </ul>
            </div>
            <div
              className={`swiper-slide roadmap__slider-item swiper-slide-next ${
                !folowing ? style.swiper_slide__none : ""
              } ${style.swiper_slide__width}`}
            >
              <div className="roadmap__slider-item-label">Q1 2021</div>
              <ul className={`roadmap__slider-item-list ${style.line_through}`}>
                <li
                  className={`roadmap__slider-item-list-item swiper-slide-active`}
                >
                  Official website presentation
                </li>
                <li className="roadmap__slider-item-list-item">
                  Final stage of the XXP token presale
                </li>
                <li className="roadmap__slider-item-list-item">
                  Bounty campaign
                </li>
                <li className="roadmap__slider-item-list-item">
                  1st stage of the trading platform development
                </li>
                <li className="roadmap__slider-item-list-item">
                  Launch of the investment platform beta version
                </li>
                <li className="roadmap__slider-item-list-item">
                  Release of the mobile application for Android
                </li>
                <li className="roadmap__slider-item-list-item">
                  Listing on the crypto exchange
                </li>
                <li className="roadmap__slider-item-list-item">
                  Participation in TOKEN2049 — The Premier Crypto
                </li>
                <li className="roadmap__slider-item-list-item">
                  Event ln Asia
                </li>
              </ul>
            </div>
            <div
              className={`swiper-slide roadmap__slider-item ${
                !folowing ? style.swiper_slide__none : ""
              } ${style.swiper_slide__width}`}
            >
              <div className="roadmap__slider-item-label">Q2 2021</div>
              <ul className="roadmap__slider-item-list">
                <li className="roadmap__slider-item-list-item">
                  2rd stage of the trading platform development
                </li>
                <li className="roadmap__slider-item-list-item">
                  lnvestment platform update
                </li>
                <li className="roadmap__slider-item-list-item">
                  Start of linear token sales
                </li>
                <li className="roadmap__slider-item-list-item">
                  Appearance on Coingecko
                </li>
                <li className="roadmap__slider-item-list-item">
                  Launch of analytical service
                </li>
                <li className="roadmap__slider-item-list-item">
                  Participation in Blockchain Life 2021 Forum
                </li>
                <li className="roadmap__slider-item-list-item">
                  Start of token sales on the platform
                </li>
                <li className="roadmap__slider-item-list-item">
                  Marketing campaign targeting the Asian region
                </li>
                <li className="roadmap__slider-item-list-item">
                  Listing on the crypto exchange
                </li>
                <li className="roadmap__slider-item-list-item">
                  Appearance on Coinmarketcap
                </li>
              </ul>
            </div>
            <div
              className={`swiper-slide roadmap__slider-item ${
                !folowing ? "swiper-slide-active" : ""
              } ${style.swiper_slide__width}`}
            >
              <div className="roadmap__slider-item-label">Q3 2021</div>
              <ul className="roadmap__slider-item-list">
                <li className="roadmap__slider-item-list-item">
                  3rd stage of the trading platform development
                </li>
                <li className="roadmap__slider-item-list-item">
                  Participation in Singapore Blockchain Week 2021 (VC)
                </li>
                <li className="roadmap__slider-item-list-item">
                  Website update
                </li>
                <li className="roadmap__slider-item-list-item">
                  Release of the mobile application for iOS
                </li>
                <li className="roadmap__slider-item-list-item">
                  Marketing campaign targeting Latin America and
                  Spanish-speaking users
                </li>
                <li className="roadmap__slider-item-list-item">
                  Participation in Malta Blockchain summit 2021 (BraziI)
                </li>
              </ul>
            </div>
            <div
              className={`swiper-slide roadmap__slider-item ${style.swiper_slide__width}`}
            >
              <div className="roadmap__slider-item-label">Q4 2021</div>
              <ul className="roadmap__slider-item-list">
                <li className="roadmap__slider-item-list-item">
                  4th stage of the trading platform development
                </li>
                <li className="roadmap__slider-item-list-item">
                  lnvestment platform update
                </li>
                <li className="roadmap__slider-item-list-item">
                  Marketing campaign targeting the North American market
                </li>
                <li className="roadmap__slider-item-list-item">
                  Participation in Blockchain Expo — North America 2020 (VC)
                </li>
                <li className="roadmap__slider-item-list-item">
                  Listing on the crypto exchange
                </li>
                <li className="roadmap__slider-item-list-item">
                  Participation in Hackathon Human DeFi Haeck (VC)
                </li>
                <li className="roadmap__slider-item-list-item">
                  Generation of the Roadmap for 2022
                </li>
              </ul>
            </div>
            <div
              className={`swiper-slide roadmap__slider-item ${style.swiper_slide__width}`}
            >
              <div className="roadmap__slider-item-label">Q1 2022</div>
              <ul className="roadmap__slider-item-list">
                <li className="roadmap__slider-item-list-item">
                  5th stage of the trading platform development
                </li>
                <li className="roadmap__slider-item-list-item">
                  Deflationary mechanism activation
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="roadmap__scrollbar"></div>
      </div>
    </section>
  );
};
