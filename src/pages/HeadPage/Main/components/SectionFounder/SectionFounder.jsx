import React from "react";
import { Fade } from "react-awesome-reveal";

import founder__img from "../../../../../img/founder__img.jpg";
import founder__info_icon from "../../../../../img/founder__info-icon.svg";

export const SectionFounder = (props) => {
  return (
    <section className="section founder">
      <div className="container founder__container">
        <div className="pattern">
          <div className="pattern__img pattern__img--3"></div>
          <div className="pattern__img pattern__img--7"></div>
          <div className="pattern__img pattern__img--9"></div>
          <div className="pattern__img pattern__img--11"></div>
          <div className="pattern__img pattern__img--13"></div>
        </div>
        <div id="founderMobileHeading"></div>
        <div className="row founder__row">
          <div className="col-lg-5 founder__img-wrap">
            <Fade direction="left" triggerOnce="true">
              <img
                src={founder__img}
                alt="Img"
                className="img-responsive founder__img wow"
              />
            </Fade>
            <Fade direction="up" triggerOnce="true" duration={600}>
              <div className="founder__info-wrap wow ">
                <div className="founder__info">
                  <div className="founder__info-heading">Yuriy Draganov</div>
                  <div className="founder__info-text">
                    Founder of XX Platform <br />
                    Professional trader, financial analyst. <br />8 years on the
                    market.
                  </div>
                </div>
                <div
                  className="founder__info-icon"
                  style={{ backgroundImage: "url(" + founder__info_icon + ")" }}
                ></div>
              </div>
            </Fade>
          </div>
          <div className="col-lg-7 founder__texts wow">
            <Fade direction="right" triggerOnce="true">
              <div>
                <h2
                  className="heading font-size-40 founder__heading"
                  data-replace="founderMobileHeading"
                >
                  The founder’s <b className="font-weight-700">statement</b>
                </h2>
                <div className="founder__text">
                  Trading and investments are trending today. Thousands of
                  stocks of various companies are represented on hundreds of
                  markets... it is difficult to process such a volume of
                  information even for professionals, and it is almost
                  impossible for beginning traders or investors. Moreover, such
                  activities take a lot of time and effort, and the results
                  often leave much to be desired...
                </div>
                <div className="founder__text">
                  Therefore, we decided to create a platform that will allow you
                  to succeed not wasting your time on reading economic and
                  business reports. Surely you have neither the time nor the
                  desire for this, and much “iron nerves”.
                </div>
                <div className="founder__text">
                  It is better to spend this time with your family, while the
                  professionals from XX Platform will do everything on your
                  behalf!
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};
