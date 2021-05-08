import React from "react";

import delegates__cards_list_item_icon_1 from "../../../../../img/delegates__cards-list-item-icon-1.svg"
import delegates__cards_list_item_icon_2 from "../../../../../img/delegates__cards-list-item-icon-2.svg"
import delegates__cards_list_item_icon_3 from "../../../../../img/delegates__cards-list-item-icon-3.svg"
import delegates__cards_list_item_icon_4 from "../../../../../img/delegates__cards-list-item-icon-4.svg"
import delegates__cards_list_item_icon_5 from "../../../../../img/delegates__cards-list-item-icon-5.svg"
import delegates__cards_list_item_icon_6 from "../../../../../img/delegates__cards-list-item-icon-6.svg"

import delegates__img from "../../../../../img/delegates__img.png"

export const SectionDelegates = (props) => {
    return(
      <section className="section delegates">
        <div className="container delegates__container">
          <div className="row delegates__row">
            <div className="col-lg-7 delegates__main">
              <div
                className="delegates__main-texts wow animate__animated animate__fadeInLeft"
              >
                <h2 className="heading font-size-40 delegates__heading">
                  <b className="font-weight-700">Delegates</b>
                </h2>
                <div className="delegates__subheading">
                  The XX Platform implements a system of delegated distribution
                  of bets —
                  <b className="font-weight-600 dark-blue">XX Delegate.</b>
                </div>
              </div>
              <div className="delegates__cards" data-mobile-tabs>
                <div
                  className="delegates__cards-pills d-flex"
                  id="delegatesPills">
                </div>
                <div
                  className="delegates__cards-item wow animate__animated animate__fadeInLeft"
                  data-wow-delay="0.4s"
                  data-mobile-tab="2"
                >
                  <div
                    className="delegates__cards-type"
                    data-mobile-pill="2"
                    data-replace="delegatesPills"
                  >
                    Type 1
                  </div>
                  <div className="delegates__cards-row row">
                    <ul className="delegates__cards-list col-auto">
                      <li className="delegates__cards-list-item">
                        <div className="delegates__cards-list-item-icon-wrap">
                          <img
                            src={delegates__cards_list_item_icon_1}
                            alt=""
                            className="img-responsive"
                          />
                        </div>
                        <div className="delegates__cards-list-item-heading">
                          Commission size
                        </div>
                        <div className="delegates__cards-list-item-text">
                          from 1% to 10%
                        </div>
                      </li>
                      <li className="delegates__cards-list-item">
                        <div className="delegates__cards-list-item-icon-wrap">
                          <img
                            src={delegates__cards_list_item_icon_2}
                            alt=""
                            className="img-responsive"
                          />
                        </div>
                        <div className="delegates__cards-list-item-heading">
                          Contract duration
                        </div>
                        <div className="delegates__cards-list-item-text">
                          12 months
                        </div>
                      </li>
                      <li className="delegates__cards-list-item">
                        <div className="delegates__cards-list-item-icon-wrap">
                          <img
                            src={delegates__cards_list_item_icon_3}
                            alt=""
                            className="img-responsive"
                          />
                        </div>
                        <div className="delegates__cards-list-item-heading">
                          Automatic renewal
                        </div>
                        <div className="delegates__cards-list-item-text">
                          active
                        </div>
                      </li>
                    </ul>
                    <ul className="delegates__cards-list col-auto">
                      <li className="delegates__cards-list-item">
                        <div className="delegates__cards-list-item-icon-wrap">
                          <img
                            src={delegates__cards_list_item_icon_4}
                            alt=""
                            className="img-responsive"
                          />
                        </div>
                        <div className="delegates__cards-list-item-heading">
                          Deposit defrost
                        </div>
                        <div className="delegates__cards-list-item-text">
                          33% every 12 months
                        </div>
                      </li>
                      <li className="delegates__cards-list-item">
                        <div className="delegates__cards-list-item-icon-wrap">
                          <img
                            src={delegates__cards_list_item_icon_5}
                            alt=""
                            className="img-responsive"
                          />
                        </div>
                        <div className="delegates__cards-list-item-heading">
                          Participation in conferences, meetups
                        </div>
                        <div className="delegates__cards-list-item-text">yes</div>
                      </li>
                      <li className="delegates__cards-list-item">
                        <div className="delegates__cards-list-item-icon-wrap">
                          <img
                            src={delegates__cards_list_item_icon_6}
                            alt=""
                            className="img-responsive"
                          />
                        </div>
                        <div className="delegates__cards-list-item-heading">
                          Participation in voting
                        </div>
                        <div className="delegates__cards-list-item-text">yes</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 delegates__img-wrap">
              <img
                src={delegates__img}
                alt="Img"
                className="delegates__img wow animate__animated animate__fadeIn"
              />
              <div
                className="delegates__img-circle wow animate__animated animate__fadeIn"
              ></div>
              <div
                className="delegates__img-card wow animate__animated animate__fadeInRight"
              >
                In order to create a Delegate account, <br />
                it is necessary to “freeze”
                <b className="font-weight-700">10,000 XXP tokens</b> <br />
                and register in the user’s personal account.
              </div>
              <div
                className="delegates__img-text wow animate__animated animate__fadeInRight"
              >
                The Delegate, being the creator of his staking pool, has the
                right to independently set the size of commissions on payments,
                the percentage of which can vary from 1% to 10%.
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}