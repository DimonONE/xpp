import React from "react";

export const SectionDelegates = (props) => {
    return(
      <section class="section delegates">
        <div class="container delegates__container">
          <div class="row delegates__row">
            <div class="col-lg-7 delegates__main">
              <div
                class="delegates__main-texts wow animate__animated animate__fadeInLeft"
              >
                <h2 class="heading font-size-40 delegates__heading">
                  <b class="font-weight-700">Delegates</b>
                </h2>
                <div class="delegates__subheading">
                  The XX Platform implements a system of delegated distribution
                  of bets —
                  <b class="font-weight-600 dark-blue">XX Delegate.</b>
                </div>
              </div>
              <div class="delegates__cards" data-mobile-tabs>
                <div
                  class="delegates__cards-pills d-flex"
                  id="delegatesPills">
                </div>
                <div
                  class="delegates__cards-item wow animate__animated animate__fadeInLeft"
                  data-wow-delay="0.4s"
                  data-mobile-tab="2"
                >
                  <div
                    class="delegates__cards-type"
                    data-mobile-pill="2"
                    data-replace="delegatesPills"
                  >
                    Type 1
                  </div>
                  <div class="delegates__cards-row row">
                    <ul class="delegates__cards-list col-auto">
                      <li class="delegates__cards-list-item">
                        <div class="delegates__cards-list-item-icon-wrap">
                          <img
                            src="img/delegates__cards-list-item-icon-1.svg"
                            alt=""
                            class="img-responsive"
                          />
                        </div>
                        <div class="delegates__cards-list-item-heading">
                          Commission size
                        </div>
                        <div class="delegates__cards-list-item-text">
                          from 1% to 10%
                        </div>
                      </li>
                      <li class="delegates__cards-list-item">
                        <div class="delegates__cards-list-item-icon-wrap">
                          <img
                            src="img/delegates__cards-list-item-icon-2.svg"
                            alt=""
                            class="img-responsive"
                          />
                        </div>
                        <div class="delegates__cards-list-item-heading">
                          Contract duration
                        </div>
                        <div class="delegates__cards-list-item-text">
                          12 months
                        </div>
                      </li>
                      <li class="delegates__cards-list-item">
                        <div class="delegates__cards-list-item-icon-wrap">
                          <img
                            src="img/delegates__cards-list-item-icon-3.svg"
                            alt=""
                            class="img-responsive"
                          />
                        </div>
                        <div class="delegates__cards-list-item-heading">
                          Automatic renewal
                        </div>
                        <div class="delegates__cards-list-item-text">
                          active
                        </div>
                      </li>
                    </ul>
                    <ul class="delegates__cards-list col-auto">
                      <li class="delegates__cards-list-item">
                        <div class="delegates__cards-list-item-icon-wrap">
                          <img
                            src="img/delegates__cards-list-item-icon-4.svg"
                            alt=""
                            class="img-responsive"
                          />
                        </div>
                        <div class="delegates__cards-list-item-heading">
                          Deposit defrost
                        </div>
                        <div class="delegates__cards-list-item-text">
                          33% every 12 months
                        </div>
                      </li>
                      <li class="delegates__cards-list-item">
                        <div class="delegates__cards-list-item-icon-wrap">
                          <img
                            src="img/delegates__cards-list-item-icon-5.svg"
                            alt=""
                            class="img-responsive"
                          />
                        </div>
                        <div class="delegates__cards-list-item-heading">
                          Participation in conferences, meetups
                        </div>
                        <div class="delegates__cards-list-item-text">yes</div>
                      </li>
                      <li class="delegates__cards-list-item">
                        <div class="delegates__cards-list-item-icon-wrap">
                          <img
                            src="img/delegates__cards-list-item-icon-6.svg"
                            alt=""
                            class="img-responsive"
                          />
                        </div>
                        <div class="delegates__cards-list-item-heading">
                          Participation in voting
                        </div>
                        <div class="delegates__cards-list-item-text">yes</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-5 delegates__img-wrap">
              <img
                src="img/delegates__img.png"
                alt="Img"
                class="delegates__img wow animate__animated animate__fadeIn"
              />
              <div
                class="delegates__img-circle wow animate__animated animate__fadeIn"
              ></div>
              <div
                class="delegates__img-card wow animate__animated animate__fadeInRight"
              >
                In order to create a Delegate account, <br />
                it is necessary to “freeze”
                <b class="font-weight-700">10,000 XXP tokens</b> <br />
                and register in the user’s personal account.
              </div>
              <div
                class="delegates__img-text wow animate__animated animate__fadeInRight"
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