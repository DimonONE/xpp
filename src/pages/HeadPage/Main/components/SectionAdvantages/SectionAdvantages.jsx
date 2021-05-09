import React from "react";
import { Fade } from "react-awesome-reveal";

import advantages__item_icon_1 from "../../../../../img/advantages__item-icon-1.svg"
import advantages__item_icon_2 from "../../../../../img/advantages__item-icon-2.svg"
import advantages__item_icon_3 from "../../../../../img/advantages__item-icon-3.svg"
import advantages__item_icon_4 from "../../../../../img/advantages__item-icon-4.svg"
import advantages__item_icon_5 from "../../../../../img/advantages__item-icon-5.svg"
import advantages__item_icon_6 from "../../../../../img/advantages__item-icon-6.svg"

export const SectionAdvantages = (props) => {
    return(
    <section id="advantages"  className="section advantages">
      <div className="container advantages__container wow">
        <div className="pattern">
          <div className="pattern__img pattern__img--1"></div>
          <div className="pattern__img pattern__img--11"></div>
          <div className="pattern__img pattern__img--12"></div>
        </div>
        <h2 className="heading font-size-40 advantages__heading text-center">
          <b className="font-weight-700">Advantages</b> of cryptocurrency XXP
        </h2>
        <div className="row advantages__row">
          <div className="col-lg-4 col-md-6 advantages__item-wrap wow">
            <Fade triggerOnce="true">
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
            </Fade>
          </div>
          <div className="col-lg-4 col-md-6 advantages__item-wrap wow">
            <Fade delay={200} triggerOnce="true">
              <div className="advantages__item">
                <div className="advantages__item-icon-wrap">
                  <img src={advantages__item_icon_2} alt="" className="advantages__item-icon" />
                </div>
                <div className="advantages__item-heading">
                  Decentralization
                </div>
                <div className="advantages__item-text">
                  ХХР official token in the Tron network. <br/>
                  All transactions are recorded <br/>
                  on the Blockchain 
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-lg-4 col-md-6 advantages__item-wrap wow" >
            <Fade delay={300} triggerOnce="true">
              <div className="advantages__item">
                <div className="advantages__item-icon-wrap">
                  <img src={advantages__item_icon_3} alt="" className="advantages__item-icon" />
                </div>
                <div className="advantages__item-heading">
                  Relevance
                </div>
                <div className="advantages__item-text">
                  ХХР was created in the crypto investment <br/>
                  market to solve the problems <br/>
                  of traditional investments. 
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-lg-4 col-md-6 advantages__item-wrap wow">
            <Fade delay={400} triggerOnce="true">
              <div className="advantages__item">
                <div className="advantages__item-icon-wrap">
                  <img src={advantages__item_icon_4} alt="" className="advantages__item-icon" />
                </div>
                <div className="advantages__item-heading">
                  High profitability
                </div>
                <div className="advantages__item-text">
                  DPoS provides up <br/>
                  to 150% profit per year. 
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-lg-4 col-md-6 advantages__item-wrap wow">
            <Fade delay={500} triggerOnce="true">
              <div className="advantages__item">
                <div className="advantages__item-icon-wrap">
                  <img src={advantages__item_icon_5} alt="" className="advantages__item-icon" />
                </div>
                <div className="advantages__item-heading">
                  {"Halving & Helix"}
                </div>
                <div className="advantages__item-text">
                  A smart economic model <br/>
                  that balances supply and demand. 
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-lg-4 col-md-6 advantages__item-wrap wow">
            <Fade delay={600} triggerOnce="true">
              <div className="advantages__item">
                <div className="advantages__item-icon-wrap">
                  <img src={advantages__item_icon_6} alt="" className="advantages__item-icon" />
                </div>
                <div className="advantages__item-heading">
                  Control
                </div>
                <div className="advantages__item-text">
                   You possess a real token which <br/>
                   you can transfer whenever <br/>
                   and to anyone you want. 
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
    )
}