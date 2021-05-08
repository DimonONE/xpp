import React from "react";
import steps__slider_main_item_icon_1 from "../../../../../img/steps__slider-main-item-icon-1.svg";
import steps__slider_main_item_icon_2 from "../../../../../img/steps__slider-main-item-icon-2.svg";
import steps__slider_main_item_icon_little_1 from "../../../../../img/steps__slider-main-item-icon-little-1.svg";
import steps__slider_main_item_icon_little_2 from "../../../../../img/steps__slider-main-item-icon-little-2.svg";
import steps__slider_main_item_icon_little_3 from "../../../../../img/steps__slider-main-item-icon-little-3.svg";
import steps__slider_main_item_icon_little_4 from "../../../../../img/steps__slider-main-item-icon-little-4.svg";
import steps__slider_main_item_icon_little_5 from "../../../../../img/steps__slider-main-item-icon-little-5.svg";
import steps__slider_img_1 from "../../../../../img/steps__slider-img-1.png";
import steps__slider_img_2 from "../../../../../img/steps__slider-img-2.png";

export const SectionSteps = (props) => {
    return(
        <section className="section steps">
            <div className="container steps__container">
                <div className="pattern">
                <div className="pattern__img pattern__img--1"></div>
                <div className="pattern__img pattern__img--5"></div>
                <div className="pattern__img pattern__img--8"></div>
                </div>
                <div className="row steps__row">
                <div className="col-lg-6 steps__heading-wrap wow animate__animated animate__fadeInLeft">
                    <h2 className="heading steps__heading font-size-40">
                    How it <b className="font-weight-700">works?</b>
                    </h2>
                </div>
                <div className="col-lg-6 col-md-9 d-flex steps__controls wow animate__animated animate__fadeInRight">
                    <button className="arrow arrow--prev steps__arrow steps__arrow--prev">
                        <svg width="38" height="19" viewBox="0 0 38 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M37 9.14868H1M1 9.14868L9 1.14868M1 9.14868L9 17.1487" stroke="#FF8225" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>

                    <div className="steps__pagination swiper-pagination-clickable swiper-pagination-bullets">
                        <span className={"steps__pagination-item swiper-pagination-bullet swiper-pagination-bullet-active"}>01</span>
                        <span className={"steps__pagination-item swiper-pagination-bullet"}>02</span>
                        <span className={"steps__pagination-item swiper-pagination-bullet"}>03</span>
                        <span className={"steps__pagination-item swiper-pagination-bullet"}>04</span>
                    </div>

                    <button className="arrow arrow--next steps__arrow steps__arrow--next">
                    <svg width="38" height="19" viewBox="0 0 38 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 9.14868H37M37 9.14868L29 1.14868M37 9.14868L29 17.1487" stroke="#FF8225" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    </button>
                </div>
                <div className="col-12 wow animate__animated animate__fadeInUp">
                    <div className="steps__slider swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide steps__slider-item">
                        <div className="steps__slider-item-row row">
                            <div className="col-xl-5 col-lg-6 col-md-9 steps__slider-main-wrap">
                            <div className="steps__slider-counter font-size-24 font-weight-600">
                                Step 1
                            </div>
                            <div className="steps__slider-main">
                                <div className="steps__slider-main-item d-flex">
                                <div className="steps__slider-main-item-icon-wrap grit grit--orange">
                                    <div className="grit__bg"></div>
                                    <img src={steps__slider_main_item_icon_1} alt="None" className="steps__slider-main-item-icon grit__icon" />
                                </div>
                                <div className="steps__slider-main-item-texts">
                                    <div className="steps__slider-main-item-heading steps__slider-main-item-heading--orange font-size-20">
                                    You
                                    </div>
                                    <div className="steps__slider-main-item-text">
                                    You <b className="font-weight-600">buy tokens</b> XXP
                                    </div>
                                </div>
                                <img src={steps__slider_main_item_icon_little_1} alt="None" className="img-responsive steps__slider-main-item-icon-little" />
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-7 col-lg-6 steps__slider-img-wrap">
                                <img src={steps__slider_img_1} alt="Img" className="steps__slider-img steps__slider-img--1" />
                                <div className="steps__slider-circle"></div>
                            </div>
                        </div>
                        </div>
                        <div className="swiper-slide steps__slider-item">
                        <div className="steps__slider-item-row row">
                            <div className="col-xl-5 col-lg-6 col-md-9 steps__slider-main-wrap">
                            <div className="steps__slider-counter font-size-24 font-weight-600">
                                Step 2
                            </div>
                            <div className="steps__slider-main">
                                <div className="steps__slider-main-item d-flex">
                                <div className="steps__slider-main-item-icon-wrap grit grit--orange">
                                    <div className="grit__bg"></div>
                                    <img src={steps__slider_main_item_icon_1} alt="None" className="steps__slider-main-item-icon grit__icon" />
                                </div>
                                <div className="steps__slider-main-item-texts">
                                    <div className="steps__slider-main-item-heading steps__slider-main-item-heading--orange font-size-20">
                                    You
                                    </div>
                                    <div className="steps__slider-main-item-text">
                                    Place tokens on DPoS and earn up to <b className="font-weight-600">150% per year </b>
                                    </div>
                                </div>
                                <img src={steps__slider_main_item_icon_little_2} alt="" className="img-responsive steps__slider-main-item-icon-little" />
                                </div>
                                <div className="steps__slider-main-item d-flex">
                                <div className="steps__slider-main-item-icon-wrap grit grit--pink">
                                    <div className="grit__bg"></div>
                                    <img src={steps__slider_main_item_icon_2} alt="" className="steps__slider-main-item-icon grit__icon" />
                                </div>
                                <div className="steps__slider-main-item-texts">
                                    <div className="steps__slider-main-item-heading steps__slider-main-item-heading--pink font-size-20">
                                    We
                                    </div>
                                    <div className="steps__slider-main-item-text">
                                    Invest the received cryptocurrency in the <b className="font-weight-700">project development</b> and the creation of a Trading platform
                                    </div>
                                </div>
                                <img src={steps__slider_main_item_icon_little_3} alt="" className="img-responsive steps__slider-main-item-icon-little" />
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-7 col-lg-6 steps__slider-img-wrap">
                                <img src={steps__slider_img_2} alt="Img" className="steps__slider-img steps__slider-img--2" />
                                <div className="steps__slider-circle"></div>
                            </div>
                        </div>
                        </div>
                        <div className="swiper-slide steps__slider-item">
                        <div className="steps__slider-item-row row">
                            <div className="col-xl-5 col-lg-6 col-md-9 steps__slider-main-wrap">
                            <div className="steps__slider-counter font-size-24 font-weight-600">
                                Step 3
                            </div>
                            <div className="steps__slider-main">
                                <div className="steps__slider-main-item d-flex">
                                <div className="steps__slider-main-item-icon-wrap grit grit--orange">
                                    <div className="grit__bg"></div>
                                    <img src={steps__slider_main_item_icon_1} alt="" className="steps__slider-main-item-icon grit__icon" />
                                </div>
                                <div className="steps__slider-main-item-texts">
                                    <div className="steps__slider-main-item-heading steps__slider-main-item-heading--orange font-size-20">
                                    You
                                    </div>
                                    <div className="steps__slider-main-item-text">
                                    Use your XXP on the <b className="font-weight-600">XX trading platform</b>
                                    </div>
                                </div>
                                <img src={steps__slider_main_item_icon_little_4} alt="" className="img-responsive steps__slider-main-item-icon-little" />
                                </div>
                                <div className="steps__slider-main-item d-flex">
                                <div className="steps__slider-main-item-icon-wrap grit grit--pink">
                                    <div className="grit__bg"></div>
                                    <img src={steps__slider_main_item_icon_2} alt="" className="steps__slider-main-item-icon grit__icon" />
                                </div>
                                <div className="steps__slider-main-item-texts">
                                    <div className="steps__slider-main-item-heading steps__slider-main-item-heading--pink font-size-20">
                                    We
                                    </div>
                                    <div className="steps__slider-main-item-text">
                                    Launch the XX trading platform. 
                                    <p> The bridge between an investor and trader </p>
                                    </div>
                                </div>
                                <img src={steps__slider_main_item_icon_little_5} alt="" className="img-responsive steps__slider-main-item-icon-little" />
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-7 col-lg-6 steps__slider-img-wrap">
                            <img src="img/steps__slider-img-3.png" alt="Img" className="steps__slider-img steps__slider-img--3" />
                            <div className="steps__slider-circle"></div>
                            </div>
                        </div>
                        </div>
                        <div className="swiper-slide steps__slider-item">
                        <div className="steps__slider-item-row row">
                            <div className="col-xl-5 col-lg-6 col-md-9 steps__slider-main-wrap">
                            <div className="steps__slider-counter font-size-24 font-weight-600">
                                Step 4
                            </div>
                            <div className="steps__slider-main">
                                <div className="steps__slider-main-item d-flex">
                                <div className="steps__slider-main-item-icon-wrap grit grit--orange">
                                    <div className="grit__bg"></div>
                                    <img src="img/steps__slider-main-item-icon-1.svg" alt="" className="steps__slider-main-item-icon grit__icon" />
                                </div>
                                <div className="steps__slider-main-item-texts">
                                    <div className="steps__slider-main-item-heading steps__slider-main-item-heading--orange font-size-20">
                                    You
                                    </div>
                                    <div className="steps__slider-main-item-text">
                                    Get <b className="font-weight-600">profit</b>
                                    </div>
                                </div>
                                <img src="img/steps__slider-main-item-icon-little-6.svg" alt="" className="img-responsive steps__slider-main-item-icon-little" />
                                </div>
                                <div className="steps__slider-main-item d-flex">
                                <div className="steps__slider-main-item-icon-wrap grit grit--pink">
                                    <div className="grit__bg"></div>
                                    <img src="img/steps__slider-main-item-icon-2.svg" alt="" className="steps__slider-main-item-icon grit__icon"/>
                                </div>
                                <div className="steps__slider-main-item-texts">
                                    <div className="steps__slider-main-item-heading steps__slider-main-item-heading--pink font-size-20">
                                    We
                                    </div>
                                    <div className="steps__slider-main-item-text">
                                    Provide security and act as a guarantor with a <b className="font-weight-600">minimum commission</b>
                                    </div>
                                </div>
                                <img src="img/steps__slider-main-item-icon-little-7.svg" alt="" className="img-responsive steps__slider-main-item-icon-little" />
                                </div>
                                <div className="steps__slider-main-item d-flex">
                                <div className="steps__slider-main-item-icon-wrap grit grit--dark-blue">
                                    <div className="grit__bg"></div>
                                    <img src="img/steps__slider-main-item-icon-3.svg" alt="" className="steps__slider-main-item-icon grit__icon" />
                                </div>
                                <div className="steps__slider-main-item-texts">
                                    <div className="steps__slider-main-item-heading steps__slider-main-item-heading--dark-blue font-size-20">
                                    Traders
                                    </div>
                                    <div className="steps__slider-main-item-text">
                                    Get clients and scope of work
                                    </div>
                                </div>
                                <img src="img/steps__slider-main-item-icon-little-8.svg" alt="" className="img-responsive steps__slider-main-item-icon-little" />
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-7 col-lg-6 steps__slider-img-wrap">
                            <img src="img/steps__slider-img-4.png" alt="Img" className="steps__slider-img steps__slider-img--4" />
                            <div className="steps__slider-circle"></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
)}