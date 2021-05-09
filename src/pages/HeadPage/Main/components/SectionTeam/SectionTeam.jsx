import React from "react";
import team__item_img_1 from "../../../../../img/team__item-img-1.jpg"
import team__item_img_2 from "../../../../../img/team__item-img-2.jpg"
import team__item_img_3 from "../../../../../img/team__item-img-3.jpg"
import team__item_img_4 from "../../../../../img/team__item-img-4.jpg"
import team__item_img_5 from "../../../../../img/team__item-img-5.jpg"


export const SectionTeam = (props) => {
    return(
        <section id="team" className="section team">
            <div className="container team__container">
            <div className="pattern">
                <div className="pattern__img pattern__img--1"></div>
                <div className="pattern__img pattern__img--6"></div>
            </div>
            <h2
                className="heading font-size-40 team__heading text-center wow animate__animated animate__fadeInDown"
            >
                ХХР <b className="font-weight-700">team</b>
            </h2>
            <div
                className="team__subheading text-center wow animate__animated animate__fadeInDown"
            >
                The project is being created involving an international team:
            </div>
            <div className="row team__row">
                <div
                className="col-lg-6 team__item-wrap wow animate__animated animate__fadeInLeft"
                >
                <div className="team__item">
                    <img
                    src={team__item_img_1}
                    alt="Img"
                    className="team__item-img team__item-img--large img-responsive"
                    />
                    <div className="team__item-heading">Yuriy Draganov</div>
                    <div className="team__item-text">Founder XX Platform</div>
                </div>
                </div>
                <div className="col-lg-6">
                <div className="row">
                    <div
                    className="col-6 team__item-wrap wow animate__animated animate__fadeInRight"
                    data-wow-delay="0.1s"
                    >
                    <div className="team__item">
                        <div className="team__item-img-wrap">
                        <img
                            src={team__item_img_2}
                            alt="Img"
                            className="team__item-img img-responsive"
                        />
                        </div>
                        <div className="team__item-heading">Devgent company</div>
                        <div className="team__item-text">Development</div>
                    </div>
                    </div>
                    <div
                    className="col-6 team__item-wrap wow animate__animated animate__fadeInRight"
                    data-wow-delay="0.2s"
                    >
                    <div className="team__item">
                        <div className="team__item-img-wrap">
                        <img
                            src={team__item_img_3}
                            alt="Img"
                            className="team__item-img team__item-img--shadow-none img-responsive"
                        />
                        </div>
                        <div className="team__item-heading">Gunbounty company</div>
                        <div className="team__item-text">Marketing support</div>
                    </div>
                    </div>
                    <div
                    className="col-6 team__item-wrap wow animate__animated animate__fadeInRight"
                    data-wow-delay="0.3s"
                    >
                    <div className="team__item">
                        <div className="team__item-img-wrap">
                        <img
                            src={team__item_img_4}
                            alt="Img"
                            className="team__item-img img-responsive"
                        />
                        </div>
                        <div className="team__item-heading">Qwertydesign company</div>
                        <div className="team__item-text">Design and decoration</div>
                    </div>
                    </div>
                    <div
                    className="col-6 team__item-wrap wow animate__animated animate__fadeInRight"
                    data-wow-delay="0.4s"
                    >
                    <div className="team__item">
                        <div className="team__item-img-wrap">
                        <img
                            src={team__item_img_5}
                            alt="Img"
                            className="team__item-img team__item-img--shadow-none img-responsive"
                        />
                        </div>
                        <div className="team__item-heading">Mediaband company</div>
                        <div className="team__item-text">Video content</div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}