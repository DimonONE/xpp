import React from "react";
import { Fade } from "react-awesome-reveal";

import work__card_icon_1 from "../../../../../img/work__card-icon-1.svg"
import work__card_icon_2 from "../../../../../img/work__card-icon-2.svg"
import work__card_icon_3 from "../../../../../img/work__card-icon-3.svg"

export const SectionWork = (props) => {
    return(
    <section className="section work">
        <div className="container work__container">
            <div className="pattern">
            <div className="pattern__img pattern__img--9"></div>
            <div className="pattern__img pattern__img--10"></div>
            </div>
            <div className="row work__header">
            <div className="col-xl-5 col-md-6 work__heading-wrap wow animate__animated animate__fadeInLeft">
                <Fade direction="left" triggerOnce="true">
                    <h2 className="heading font-size-40 work__heading">
                    <p> How does XXP </p>
                    <b className="font-weight-700">DPoS Platform</b> work?
                    </h2>
                </Fade>
            </div>
            <div className="col-xl-5 col-md-6 work__header-card-wrap wow animate__animated animate__fadeInRight">
                <Fade direction="right" triggerOnce="true">
                    <div className="work__header-card">
                    <p> List your coins on DPoS. </p>
                    <p> Get a reward for them. </p>
                    <b className="font-weight-700">% depends</b> on the Amount and Time.
                    </div>
                </Fade>
            </div>
            </div>
            <div className="row work__cards">
            <div className="col-xl-10">
                <div className="d-flex work__row work__row--1">
                <div className="work__card-wrap wow animate__animated animate__fadeInDown">
                <Fade direction="down" triggerOnce="true" delay={2}>
                        <div className="work__card work__card--small d-flex grit grit--orange">
                            <div className="grit__bg"></div>
                            <img src={work__card_icon_1} alt="" className="img-responsive work__card-icon" />
                            <div className="work__card-text-wrap">
                                <div className="work__card-text font-weight-700 font-size-18">
                                1000 XXP
                                </div>
                                <div className="work__card-text">
                                <p> 30 d. </p>
                                PROFIT <b className="font-weight-700">7.24%</b>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <div className="work__card-arrow"></div>
                </div>
                <Fade direction="down" triggerOnce="true" delay={2} duration={1000}>
                    <div className="work__card-wrap wow animate__animated animate__fadeInDown">
                        <div className="work__card work__card--small d-flex grit grit--orange">
                        <div className="grit__bg"></div>
                        <img src={work__card_icon_1} alt="" className="img-responsive work__card-icon" />
                        <div className="work__card-text-wrap">
                            <div className="work__card-text font-weight-700 font-size-18">
                            1000 XXP
                            </div>
                            <div className="work__card-text">
                            <p> 30 d. </p>
                            PROFIT <b className="font-weight-700">8.91%</b>
                            </div>
                        </div>
                        </div>
                        <div className="work__card-arrow"></div>
                    </div>
                </Fade>
                <Fade direction="down" triggerOnce="true" delay={2} duration={2000}>
                    <div className="work__card-wrap wow animate__animated animate__fadeInDown" >
                        <div className="work__card work__card--small d-flex grit grit--orange">
                        <div className="grit__bg"></div>
                        <img src={work__card_icon_1} alt="" className="img-responsive work__card-icon" />
                        <div className="work__card-text-wrap">
                            <div className="work__card-text font-weight-700 font-size-18">
                            1000 XXP
                            </div>
                            <div className="work__card-text">
                            <p> 30 d. </p>
                            PROFIT <b className="font-weight-700">9.21%</b>
                            </div>
                        </div>
                        </div>
                        <div className="work__card-arrow"></div>
                    </div>
                </Fade>
                </div>
                <div className="d-flex work__row work__row--2 justify-content-end">
                <Fade direction="left" triggerOnce="true" delay={2}>
                    <div className="work__caption work__caption--1 font-weight-700 font-size-15 wow animate__animated animate__fadeInLeft">
                        No delegate
                    </div>
                </Fade>
                <Fade direction="down" triggerOnce="true" delay={2}duration={1200} >
                    <div className="work__card-wrap work__card-wrap--medium wow animate__animated animate__fadeInDown">
                        <div className="work__card work__card--medium d-flex align-items-center grit grit--pink">
                        <div className="grit__bg"></div>
                        <img src={work__card_icon_2} alt="" className="img-responsive work__card-icon" />
                        <div className="work__card-text-wrap">
                            <div className="work__card-text">
                            <b className="font-weight-600">5%</b> comission 
                            <p> XXP Delegate </p>
                            </div>
                        </div>
                        </div>
                        <div className="work__card-arrow"></div>
                    </div>
                </Fade>
                <Fade direction="down" triggerOnce="true" delay={2} duration={1400}>
                    <div className="work__card-wrap work__card-wrap--medium wow animate__animated animate__fadeInDown">
                        <div className="work__card work__card--medium d-flex align-items-center grit grit--pink">
                        <div className="grit__bg"></div>
                        <img src={work__card_icon_2} alt="" className="img-responsive work__card-icon" />
                        <div className="work__card-text-wrap">
                            <div className="work__card-text">
                            <b className="font-weight-600">5%</b> comission 
                            <p> XXP Delegate </p>
                            </div>
                        </div>
                        </div>
                        <div className="work__card-arrow"></div>
                    </div>
                </Fade>
                <Fade direction="right" triggerOnce="true" delay={2}>
                    <div className="work__caption work__caption--2 font-weight-700 font-size-15 wow animate__animated animate__fadeInRight" data-wow-delay="0.4s">
                        + Reinvest
                    </div>
                </Fade>
                </div>
                <Fade direction="up" triggerOnce="true" delay={2}>
                    <div className="d-flex work__row work__row--3 work__row">
                        <div className="work__card work__card--large d-flex align-items-center grit grit--dark-blue col-12 wow animate__animated animate__fadeInUp">
                            <div className="grit__bg"></div>
                            <img src={work__card_icon_3} alt="" className="img-responsive work__card-icon" />
                            <div className="work__card-text-wrap">
                            <div className="work__card-text font-size-18">
                            <p> DPoS pool </p>
                            <p> 36_000_000 </p>
                            </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
            </div>
        </div>
    </section>
    )
}