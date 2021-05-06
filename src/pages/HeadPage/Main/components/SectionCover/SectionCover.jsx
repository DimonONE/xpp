import React from "react";
import style from "./SectionCover.module.css"
import first_screen_image from "../../../../../img/first-screen-image.svg"


export const SectionCover = (props) => {
    return(
        <section className="section cover">
            <div className="container cover__container">
                <div className="row cover__row">
                <div className="col-xl-7 col-lg-8 cover__main">
                    <div className="wow animate__animated animate__fadeInLeft">
                    <div className="cover__title">
                        XX Platform
                    </div>
                    <h1 className="heading font-size-54 cover__heading">
                       <p> Cryptocurrency.</p>
                       <p> Trading. </p>
                        <b className="font-weight-700">Investments.</b>
                    </h1>
                    <div className="cover__text">
                        XX Platform is a system that combines a multifunctional cabinet with investment elements and a trading service with a set of analytical tools and an asset management program.
                    </div>
                    <div className="cover__btns row no-gutters">
                        <a href="https://wallet.xxp.group/buy" className="btn cover__btn">Buy ХХР</a>
                        <a href="https://wallet.xxp.group/" className="btn btn--bg-beige cover__btn">Wallet</a>
                    </div>
                    <div className="cover__radios row no-gutters">
                        <div className="cover__radio-wrap">
                            <div className={`cover__radio-icon ${style.cover__radio_icon_1}`}></div>
                            <label className="cover__radio">
                                {/* <input type="radio" className="visually-hidden cover__radio-input" name="radio" checked> */}
                                <span className="cover__radio-window"></span>
                                <span className="cover__radio-label"><p>I am new</p><p>to cryptocurrency</p> </span>
                            </label>
                        </div>
                        <div className="cover__radio-wrap">
                        <div className={`cover__radio-icon ${style.cover__radio_icon_1}`}></div>
                        <label className="cover__radio">
                            {/* <input type="radio" className="visually-hidden cover__radio-input" name="radio"> */}
                            <span className="cover__radio-window"></span>
                            <span className="cover__radio-label">
                            <p>I am an experienced </p> 
                            <p>crypto enthusiast and investor</p> 
                            </span>
                        </label>
                        </div>
                    </div>
                    </div>
                    <div className="cover__arrow-wrap wow animate__animated animate__fadeInRight">
                    <div className="cover__arrow-text">
                        <p>Tell us</p>  
                        <p>who are you?</p> 
                    </div>
                    <svg className="cover__arrow" width="100" height="67" viewBox="0 0 100 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M96.6987 12.4998C44.6991 12.4998 24.3066 41.3641 8.75858 63.9285M8.75858 63.9285C8.75858 63.9285 7.97721 58.6184 7.96838 58.3439L8.75858 63.9285ZM8.75858 63.9285L15.0885 62.9864" stroke="#FF8225" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </div>
                </div>
                <div className="col-xl-5 col-lg-4 cover__img-wrap">
                    <div className="cover__img-circle wow animate__animated animate__fadeInRight"></div>
                    <img src={first_screen_image} alt="Img" className="cover__img wow animate__animated animate__fadeInRight" />
                    <div className="pattern">
                    <div className="pattern__img pattern__img--1"></div>
                    <div className="pattern__img pattern__img--2"></div>
                    <div className="pattern__img pattern__img--3"></div>
                    <div className="pattern__img pattern__img--4"></div>
                    <div className="pattern__img pattern__img--5"></div>
                    <div className="pattern__img pattern__img--6"></div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}