import React from "react";
import style from "./SectionTokenomics.module.css";

export const SectionTokenomics = (props) => {
  return (
    <section id="tokenomics" className="section tokenomics">
      <div className="container tokenomics__container">
        <div className="pattern">
          <div className="pattern__img pattern__img--3"></div>
          <div className="pattern__img pattern__img--10"></div>
        </div>
        <h2 className="heading tokenomics__heading font-size-40 wow animate__animated animate__fadeInLeft">
          <b className="font-weight-700">Tokenomics</b>
        </h2>
        <div className="row tokenomics__row">
          <div className="col-lg-6 tokenomics__list-wrap wow animate__animated animate__fadeInLeft">
            <div className="tokenomics__list">
              <div className="tokenomics__list-item ">
                <div className="tokenomics__list-number">72</div>
                <div className="tokenomics__list-text">
                  <b className="font-weight-700">36,000,000 XXP</b> tokens are
                  intended to pay rewards to investors in the form of interest
                  rates from staking
                </div>
              </div>
              <div className="tokenomics__list-item hidden active">
                <div className="tokenomics__list-number">10</div>
                <div className="tokenomics__list-text">
                  <b className="font-weight-700">5,000,000 XXP</b> tokens — fund
                  of the development team, is in a frozen state
                </div>
              </div>
              <div className="tokenomics__list-item hidden">
                <div className="tokenomics__list-number">9</div>
                <div className="tokenomics__list-text">
                  <b className="font-weight-700">4,500,000 XXP</b> tokens — main
                  operational wallet to pay the expenses for the project
                  functioning and promotion
                </div>
              </div>
              <div className="tokenomics__list-item hidden">
                <div className="tokenomics__list-number">4</div>
                <div className="tokenomics__list-text">
                  <b className="font-weight-700">2,000,000 XXP</b> tokens —
                  pre-ICO and ICO stage
                </div>
              </div>
              <div className="tokenomics__list-item hidden">
                <div className="tokenomics__list-number">4</div>
                <div className="tokenomics__list-text">
                  <b className="font-weight-700">2,000,000 XXP</b> tokens —
                  marketing fund for promoting and scaling the project
                </div>
              </div>
              <div className="tokenomics__list-item hidden">
                <div className="tokenomics__list-number">1</div>
                <div className="tokenomics__list-text">
                  <b className="font-weight-700">500,000 XXP</b> tokens — fund
                  for holding promotions, bounty campaigns, contests, quizzes
                  and other events
                </div>
              </div>
            </div>
          </div>
          <div className="tokenomics__charts col-lg-6 wow animate__animated animate__fadeInRight">
            <div className="tokenomics__chart-wrap">
              <svg
                className="tokenomics__chart pointer-events-none"
                width="336"
                height="340"
                viewBox="0 0 336 340"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  data-chart-index="0"
                  className="tokenomics__chart-item active"
                  d="M70.8943 189.158C74.1316 188.541 77.3029 190.672 78.1959 193.946C82.0986 208.255 89.4509 221.43 99.6527 232.294C111.474 244.882 126.632 253.847 143.358 258.141C160.084 262.436 177.686 261.882 194.109 256.546C210.532 251.21 225.098 241.311 236.106 228.006C247.113 214.7 254.107 198.537 256.271 181.405C258.436 164.273 255.681 146.879 248.328 131.254C240.976 115.629 229.329 102.419 214.749 93.1661C202.166 85.1807 187.846 80.4274 173.06 79.2751C169.677 79.0114 166.989 76.2957 166.989 73L166.989 6.99999C166.989 3.67495 169.678 1.0086 172.946 1.14321C202.586 2.36422 231.428 11.3695 256.544 27.3086C283.621 44.4924 305.25 69.0257 318.905 98.0433C332.559 127.061 337.676 159.364 333.656 191.181C329.637 222.998 316.648 253.015 296.206 277.725C275.764 302.435 248.713 320.818 218.213 330.729C187.713 340.639 155.022 341.666 123.96 333.691C92.8981 325.715 64.7463 309.066 42.7931 285.688C22.4302 264.004 8.17997 237.361 1.42665 208.475C0.682114 205.29 2.79725 202.148 6.06339 201.525L70.8943 189.158Z"
                  fill="#FFE9D8"
                  stroke="#FEF9F3"
                  strokeWidth="2"
                />

                <path
                  data-chart-index="1"
                  className="tokenomics__chart-item"
                  d="M76.8652 129.169C79.8488 130.572 81.1613 134.163 79.9558 137.336C76.0993 147.488 73.9884 158.499 73.9884 170C73.9884 173.465 74.1801 176.887 74.5535 180.253C74.9271 183.622 72.7635 186.767 69.5285 187.384L13.547 198.064C10.2803 198.687 7.15813 196.545 6.68488 193.311C2.4481 164.36 6.18232 134.797 17.4849 107.809C18.7474 104.794 22.3043 103.495 25.3134 104.911L76.8652 129.169Z"
                  fill="#FFE9D8"
                  stroke="#FEF9F3"
                  strokeWidth="2"
                />

                <path
                  data-chart-index="2"
                  className="tokenomics__chart-item"
                  d="M112.629 87.7885C114.393 90.5694 113.582 94.2996 110.869 96.3326C100.762 103.907 92.2649 113.513 85.9835 124.545C84.3057 127.492 80.7058 128.766 77.725 127.363L33.4032 106.508C30.3934 105.092 29.1282 101.524 30.6515 98.6349C41.9934 77.1257 58.3009 58.6275 78.2184 44.6784C80.8935 42.8049 84.5923 43.6127 86.3747 46.4212L112.629 87.7885Z"
                  fill="#FFE9D8"
                  stroke="#FEF9F3"
                  strokeWidth="2"
                />

                <path
                  data-chart-index="3"
                  className="tokenomics__chart-item"
                  d="M134.742 77.0818C135.76 80.2167 134.043 83.6305 130.906 84.9254C128.133 86.0702 125.428 87.3465 122.8 88.7467C119.803 90.3426 116.076 89.4911 114.308 86.7065L91.8121 51.2609C90.0293 48.4519 90.8736 44.7622 93.7091 43.1466C100.313 39.384 107.2 36.1428 114.308 33.4526C117.36 32.2974 120.741 33.9985 121.77 37.1627L134.742 77.0818Z"
                  fill="#FFE9D8"
                  stroke="#FEF9F3"
                  strokeWidth="2"
                />

                <path
                  data-chart-index="4"
                  className="tokenomics__chart-item"
                  d="M158.832 72.2465C159.039 75.5381 156.524 78.4178 153.162 78.8868C150.179 79.303 147.241 79.8623 144.356 80.5576C141.057 81.3524 137.663 79.6002 136.645 76.4662L125.835 43.2016C124.807 40.0368 126.543 36.6741 129.69 35.8226C136.462 33.9908 143.362 32.6742 150.333 31.8842C153.573 31.5169 156.425 34.0042 156.634 37.3254L158.832 72.2465Z"
                  fill="#FFE9D8"
                  stroke="#FEF9F3"
                  strokeWidth="2"
                />

                <path
                  data-chart-index="5"
                  className="tokenomics__chart-item"
                  d="M164.732 76.0763C164.732 77.0918 163.895 77.9485 162.831 77.9815C161.777 78.0142 160.9 77.2198 160.836 76.1986L158.7 42.2733C158.59 40.5302 159.911 39.055 161.615 39.0014C163.319 38.9477 164.73 40.3369 164.73 42.0835L164.732 76.0763Z"
                  fill="#FFE9D8"
                  stroke="#FEF9F3"
                  strokeWidth="2"
                />
              </svg>
              <div className="tokenomics__chart-numbers">
                <div className="tokenomics__chart-numbers-item active">72%</div>
                <div className="tokenomics__chart-numbers-item">10%</div>
                <div className="tokenomics__chart-numbers-item">9%</div>
                <div className="tokenomics__chart-numbers-item">4%</div>
                <div className="tokenomics__chart-numbers-item">4%</div>
                <div className="tokenomics__chart-numbers-item">1%</div>
              </div>
            </div>
            <div className="tokenomics__chart-info-wrap">
              <div
                className={`tokenomics__chart-info-icon ${style.tokenomics__chart_info_icon}`}
              ></div>
              <div className="tokenomics__chart-info">
                <div className="tokenomics__chart-info-text">
                  The total emission of XXP cryptocurrency <br />
                  is <b className="accent">50,000,000 tokens</b> distributed on
                  <br />
                  <b className="accent">8 special system wallets</b>.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
