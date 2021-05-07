import React from "react";

import advantages__item_icon_1 from "../../../../../img/advantages__item-icon-1.svg"
import advantages__item_icon_2 from "../../../../../img/advantages__item-icon-2.svg"
import advantages__item_icon_3 from "../../../../../img/advantages__item-icon-3.svg"
import advantages__item_icon_4 from "../../../../../img/advantages__item-icon-4.svg"
import advantages__item_icon_5 from "../../../../../img/advantages__item-icon-5.svg"
import advantages__item_icon_6 from "../../../../../img/advantages__item-icon-6.svg"

export const SectionAdvantages = (props) => {
    return(
    <section id="advantages" className="section advantages">
      <div className="container advantages__container wow animate__animated animate__fadeIn">
        <div className="pattern">
          <div className="pattern__img pattern__img--1"></div>
          <div className="pattern__img pattern__img--11"></div>
          <div className="pattern__img pattern__img--12"></div>
        </div>
        <h2 className="heading font-size-40 advantages__heading text-center">
          <b className="font-weight-700">Advantages</b> of cryptocurrency XXP
        </h2>
        <div className="row advantages__row">
          <div className="col-lg-4 col-md-6 advantages__item-wrap wow animate__animated animate__fadeIn" data-wow-delay="0.1s">
            <div className="advantages__item">
              <div className="advantages__item-icon-wrap">
                <img src={advantages__item_icon_1} alt="" className="advantages__item-icon" />
              </div>
              <div className="advantages__item-heading">
                Safety
              </div>
              <div className="advantages__item-text">
                Purchase insurance system with a 100% refund
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 advantages__item-wrap wow animate__animated animate__fadeIn" data-wow-delay="0.2s">
            <div className="advantages__item">
              <div className="advantages__item-icon-wrap">
                <img src={advantages__item_icon_2} alt="" className="advantages__item-icon" />
              </div>
              <div className="advantages__item-heading">
                Decentralization
              </div>
              <div className="advantages__item-text">
                <p> ХХР official token in the Tron network. </p>
                <p> All transactions are recorded </p>
                <p> on the Blockchain </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 advantages__item-wrap wow animate__animated animate__fadeIn" data-wow-delay="0.3s">
            <div className="advantages__item">
              <div className="advantages__item-icon-wrap">
                <img src={advantages__item_icon_3} alt="" className="advantages__item-icon" />
              </div>
              <div className="advantages__item-heading">
                Relevance
              </div>
              <div className="advantages__item-text">
                <p> ХХР was created in the crypto investment </p>
                <p> market to solve the problems </p>
                <p> of traditional investments. </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 advantages__item-wrap wow animate__animated animate__fadeIn" data-wow-delay="0.4s">
            <div className="advantages__item">
              <div className="advantages__item-icon-wrap">
                <img src={advantages__item_icon_4} alt="" className="advantages__item-icon" />
              </div>
              <div className="advantages__item-heading">
                High profitability
              </div>
              <div className="advantages__item-text">
                <p> DPoS provides up </p>
                <p> to 150% profit per year. </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 advantages__item-wrap wow animate__animated animate__fadeIn" data-wow-delay="0.5s">
            <div className="advantages__item">
              <div className="advantages__item-icon-wrap">
                <img src={advantages__item_icon_5} alt="" className="advantages__item-icon" />
              </div>
              <div className="advantages__item-heading">
                {"Halving & Helix"}
              </div>
              <div className="advantages__item-text">
                <p> A smart economic model </p>
                <p> that balances supply and demand. </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 advantages__item-wrap wow animate__animated animate__fadeIn" data-wow-delay="0.6s">
            <div className="advantages__item">
              <div className="advantages__item-icon-wrap">
                <img src={advantages__item_icon_6} alt="" className="advantages__item-icon" />
              </div>
              <div className="advantages__item-heading">
                Control
              </div>
              <div className="advantages__item-text">
                <p> You possess a real token which </p>
                <p> you can transfer whenever </p>
                <p> and to anyone you want. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}