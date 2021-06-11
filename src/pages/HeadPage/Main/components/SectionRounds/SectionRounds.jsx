import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../../../../utils/i18next";

import { Fade } from "react-awesome-reveal";
import style from "./SectionRounds.module.css";

export const SectionRounds = (props) => {
  let [isAnimation, setIsAnimation] = useState(true);
  const { t } = useTranslation();

  return (
    <section className="section rounds">
      <div className="container rounds__container wow ">
        <div className="pattern">
          <div className="pattern__img pattern__img--9"></div>
          <div className="pattern__img pattern__img--12"></div>
        </div>
        <div className="heading text-center rounds__heading">
          <h2
            className="heading font-size-40 text-center"
            style={{ marginBottom: 0 }}
          >
            <b className="font-weight-700">{t("section_rounds.header.b")}</b>{" "}
            {t("section_rounds.header.right_text")}
          </h2>
          <p
            className={`rounds__info-item-caption ${style.head_status_completed}`}
          >
            {t("section_rounds.rounds__info_item_1.right_text")}
          </p>
        </div>
        <div className="row rounds__row">
          <div className="col-lg-5 rounds__chart-wrap">
            <svg
              className="rounds__chart"
              width="261"
              height="261"
              viewBox="0 0 261 261"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M145.019 62.5333C133.106 59.9886 120.689 60.6113 109.023 64.4016C95.0647 68.937 82.9002 77.775 74.2733 89.6489C65.6464 101.523 61 115.823 61 130.5C61 145.177 65.6464 159.477 74.2733 171.351C82.9002 183.225 95.0647 192.063 109.023 196.598C122.982 201.134 138.018 201.134 151.977 196.598C165.935 192.063 178.1 183.225 186.727 171.351C193.936 161.428 198.366 149.811 199.627 137.695C199.934 134.738 202.285 132.5 205 132.5H256C258.791 132.5 260.958 134.745 260.818 137.392C259.49 162.515 250.922 186.773 236.077 207.206C219.878 229.502 197.037 246.097 170.827 254.613C144.617 263.129 116.383 263.129 90.1733 254.613C63.9632 246.097 41.122 229.502 24.9233 207.206C8.72457 184.91 -2.38419e-06 158.059 0 130.5C2.38419e-06 102.941 8.72458 76.0896 24.9233 53.794C41.122 31.4984 63.9632 14.9033 90.1733 6.38712C114.193 -1.41741 139.912 -2.06958 164.216 4.43062C166.776 5.11533 168.242 7.86998 167.38 10.5244L151.62 59.0283C150.781 61.6107 147.926 63.1544 145.019 62.5333Z"
                fill="#FF8225"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M186.725 89.6475C179.516 79.7247 169.835 71.9223 158.702 66.9794C155.985 65.773 154.583 62.8464 155.422 60.2639L171.18 11.7595C172.043 9.1051 174.847 7.73801 177.321 8.68878C200.804 17.7147 221.229 33.3591 236.074 53.7911C250.92 74.2232 259.489 98.4818 260.818 123.605C260.958 126.251 258.791 128.496 256 128.497L205 128.498C202.285 128.498 199.934 126.26 199.626 123.303C198.365 111.188 193.935 99.5704 186.725 89.6475Z"
                fill="#FF386A"
              />
            </svg>
            <div className="rounds__chart-caption rounds__chart-caption--1">
              {t("section_rounds.rounds_caption_1")}
            </div>
            <div className="rounds__chart-caption rounds__chart-caption--2">
              {t("section_rounds.rounds_caption_2")}
            </div>
          </div>
          <div className="col-lg-6 col-xl-6 rounds__info">
            <div className="rounds__info-item">
              <div className="d-flex rounds__info-item-header">
                <div className="rounds__info-item-heading">
                  {t("section_rounds.rounds__info_item_1.head")}
                </div>
                <div className="rounds__info-item-price">
                  {t("section_rounds.rounds__info_item_1.info_item_price")}
                </div>
              </div>
              <Fade
                triggerOnce="true"
                onVisibilityChange={() => setIsAnimation(!isAnimation)}
              >
                <div className="rounds__info-item-progress">
                  <div
                    className={`rounds__info-item-progress-line wow animate__animated ${
                      isAnimation ? style.widthFrom0to100 : ""
                    }`}
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </Fade>
              <div className="d-flex rounds__info-item-footer">
                <div className="rounds__info-item-caption">
                  {t("section_rounds.rounds__info_item_1.left_text")}
                </div>
                <div className="rounds__info-item-caption">
                  {t("section_rounds.rounds__info_item_1.right_text")}
                </div>
              </div>
            </div>
            <div className="rounds__info-item">
              <div className="d-flex rounds__info-item-header">
                <div className="rounds__info-item-heading">
                  {t("section_rounds.rounds__info_item_2.head")}
                </div>
                <div className="rounds__info-item-price">
                  {t("section_rounds.rounds__info_item_2.info_item_price")}
                </div>
              </div>
              <div className="rounds__info-item-progress">
                <div
                  className="rounds__info-item-progress-line wow animate__animated widthFrom0to60"
                  style={{ width: "100%" }}
                ></div>
              </div>
              <div className="d-flex rounds__info-item-footer">
                <div className="rounds__info-item-caption">
                  {t("section_rounds.rounds__info_item_2.left_text")}
                </div>
                <div className="rounds__info-item-caption">
                  {t("section_rounds.rounds__info_item_2.right_text")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
