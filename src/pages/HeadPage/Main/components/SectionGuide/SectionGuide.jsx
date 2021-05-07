import React from "react";
import style from "./SectionGuide.module.css";

export const SectionGuide = (props) => {
    return(
    <section id="guide" className="section guide">
      <div className="container guide__container">
        <div className="pattern">
          <div className="pattern__img pattern__img--8"></div>
          <div className="pattern__img pattern__img--3"></div>
          <div className="pattern__img pattern__img--5"></div>
          <div className="pattern__img pattern__img--6"></div>
        </div>
        <h2 className="heading guide__heading font-size-40 text-center wow animate__animated animate__fadeInDown">
          How to <b className="font-weight-700">buy XXP</b>
        </h2>
        <div className="row guide__row">
          <div className="col-lg-6 guide__item-wrap wow animate__animated animate__fadeInLeft">
            <div className="guide__item">
              <div className={`guide__item-img ${style.guide__item_img_1}`}></div>
              <div className="guide__item-card-wrap">
                <div className="guide__item-card">
                  <div className="guide__item-number grit grit--orange">
                    <div className="grit__bg"></div>
                    01
                  </div>
                  <div className="guide__item-text">
                    Enter the <b className="font-weight-600">XXP amount</b> and select the purchase type
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 guide__item-wrap wow animate__animated animate__fadeInRight">
            <div className="guide__item">
              <div className={`guide__item-img ${style.guide__item_img_2}`}></div>
              <div className="guide__item-card-wrap">
                <div className="guide__item-card">
                  <div className="guide__item-number grit grit--orange">
                    <div className="grit__bg"></div>
                    02
                  </div>
                  <div className="guide__item-text">
                    Click on the <b className="font-weight-600">link</b> and <b className="font-weight-600">go to Coinbase</b> service
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 guide__item-wrap wow animate__animated animate__fadeInLeft">
            <div className="guide__item">
              <div className={`guide__item-img ${style.guide__item_img_3}`}></div>
              <div className="guide__item-card-wrap">
                <div className="guide__item-card">
                  <div className="guide__item-number grit grit--orange">
                    <div className="grit__bg"></div>
                    03
                  </div>
                  <div className="guide__item-text">
                    Enter your <b className="font-weight-600">personal data</b> and select a <b className="font-weight-600">payment option</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 guide__item-wrap wow animate__animated animate__fadeInRight">
            <div className="guide__item">
              <div className={`guide__item-img ${style.guide__item_img_4}`}></div>
              <div className="guide__item-card-wrap">
                <div className="guide__item-card">
                  <div className="guide__item-number grit grit--orange">
                    <div className="grit__bg"></div>
                    04
                  </div>
                  <div className="guide__item-text">
                    <b className="font-weight-600">Carry</b> out the <b className="font-weight-600">payment</b> with the stated bank details
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 guide__item-wrap wow animate__animated animate__fadeInLeft">
            <div className="guide__item">
              <div className={`guide__item-img ${style.guide__item_img_5}`}></div>
              <div className="guide__item-card-wrap">
                <div className="guide__item-card">
                  <div className="guide__item-number grit grit--orange">
                    <div className="grit__bg"></div>
                    05
                  </div>
                  <div className="guide__item-text">
                    <b className="font-weight-600">Wait</b> for payment confirmation
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 guide__item-wrap wow animate__animated animate__fadeInRight">
            <div className="guide__item">
              <div className={`guide__item-img ${style.guide__item_img_6}`}></div>
              <div className="guide__item-card-wrap">
                <div className="guide__item-card">
                  <div className="guide__item-number grit grit--orange">
                    <div className="grit__bg"></div>
                    06
                  </div>
                  <div className="guide__item-text">
                    <b className="font-weight-600">Congratulations</b>, you’ve become the owner of the <b className="font-weight-600">XXP cryptocurrency!</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center guide__btn-wrap wow animate__animated animate__fadeInUp">
          <a href="https://wallet.xxp.group/buy" className="btn guide__btn">
            Buy XXP
          </a>
        </div>
      </div>
    </section>
    )
}