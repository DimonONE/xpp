import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../../utils/i18next";

import style from "./Header.module.css";
import { Link } from "react-scroll";

import logo_svg from "../../../img/logo.svg";
import { NavLink } from "react-router-dom";

export const Header = (props) => {
  const { t, i18n } = useTranslation();
  const CangleLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  const [folowign, setFolowign] = useState(false);
  const [focusLanguge, setFocusLanguge] = useState(2);
  const [actives, setActives] = useState(false);
  let listLanguage = ["EN", "RU", "TUR"];
  return (
    <>
      <header
        className={`header animate__animated animate__fadeIn fixed ${
          actives ? "active" : ""
        }`}
      >
        <div className="container">
          <div className="d-flex header__row">
            <button
              onClick={() => setActives(!actives && true)}
              className={`header__burger ${actives ? "active" : ""}`}
            >
              <span className="header__burger-line"></span>
              <span className="header__burger-line"></span>
              <span className="header__burger-line"></span>
            </button>
            <Link
              to="Up"
              className={`header__logo ${style.cursor_pointer}`}
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
              delay={500}
            >
              <img
                src={logo_svg}
                alt={t("headers.header.alt_logo")}
                className="img-responsive header__logo-img"
              />
            </Link>
            <nav className={`header__nav ${style.header__nav}`}>
              <ul className={style.header__nav_list}>
                <li className="header__nav-list-item">
                  <Link
                    to="currency"
                    className={`header__nav-link ${style.cursor_pointer}`}
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={1000}
                    delay={500}
                  >
                    {t("headers.header.nav_bar.cryptocurrency")}
                  </Link>
                </li>
                <li className="header__nav-list-item">
                  <Link
                    to="advantages"
                    className={`header__nav-link ${style.cursor_pointer}`}
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={1000}
                    delay={500}
                  >
                    {t("headers.header.nav_bar.advantages")}
                  </Link>
                </li>
                <li className="header__nav-list-item">
                  <Link
                    to="tokenomics"
                    className={`header__nav-link ${style.cursor_pointer}`}
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={1000}
                    delay={500}
                  >
                    {t("headers.header.nav_bar.tokenomics")}
                  </Link>
                </li>
                <li className="header__nav-list-item">
                  <Link
                    to="team"
                    className={`header__nav-link ${style.cursor_pointer}`}
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={1000}
                    delay={500}
                  >
                    {t("headers.header.nav_bar.team")}
                  </Link>
                </li>
                {/* <li className="header__nav-list-item">
                  <NavLink
                    to="/news"
                    className={`header__nav-link ${style.cursor_pointer}`}
                  >
                    {t("headers.header.nav_bar.news")}
                  </NavLink>
                </li> */}
              </ul>
            </nav>
            <span
              className={`header__dropdown ${style.cursor_pointer}`}
              onClick={() => setFolowign(!folowign && true)}
            >
              <div
                className={`header__dropdown-selected ${
                  folowign ? "active" : " "
                }`}
              >
                {t("headers.header.languages.active_language")}
              </div>
              <div
                className={`header__dropdown-list-wrap ${
                  !folowign ? style.folowing_language : " "
                }`}
              >
                <ul className={`header__dropdown-list ${style.lng_list}`}>
                  {listLanguage.map(
                    (i) =>
                      i !== t("headers.header.languages.active_language") && (
                        <li key={i} className="header__dropdown-list-item">
                          <button
                            onClick={() => CangleLanguage(i.toLowerCase())}
                            className="header__dropdown-link"
                          >
                            {i}
                          </button>
                        </li>
                      )
                  )}
                </ul>
              </div>
            </span>
            <a
              href="https://wallet.xxp.group/"
              className="btn btn--bg-beige header__btn"
              style={{ minWidth: "fit-content" }}
            >
              {t("headers.header.login_in")}
            </a>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${actives ? "active" : ""}`}>
        <span className="container mobile-menu__container">
          <ul className="mobile-menu__list">
            <li className="mobile-menu__list-item">
              <Link
                onClick={() => setActives(false)}
                to="currency"
                className="mobile-menu__list-link"
                spy={true}
                smooth={true}
                offset={50}
                duration={1000}
                delay={500}
              >
                {t("headers.header.nav_bar.cryptocurrency")}
              </Link>
            </li>
            <li
              onClick={() => setActives(false)}
              className="mobile-menu__list-item"
            >
              <Link
                onClick={() => setActives(false)}
                to="advantages"
                className="mobile-menu__list-link"
                spy={true}
                smooth={true}
                offset={50}
                duration={1000}
                delay={500}
              >
                {t("headers.header.nav_bar.advantages")}
              </Link>
            </li>
            <li className="mobile-menu__list-item">
              <Link
                onClick={() => setActives(false)}
                to="tokenomics"
                className="mobile-menu__list-link"
                spy={true}
                smooth={true}
                offset={50}
                duration={1000}
                delay={500}
              >
                {t("headers.header.nav_bar.tokenomics")}
              </Link>
            </li>
            <li className="mobile-menu__list-item">
              <Link
                onClick={() => setActives(false)}
                to="team"
                className="mobile-menu__list-link"
                spy={true}
                smooth={true}
                offset={50}
                duration={1000}
                delay={500}
              >
                {t("headers.header.nav_bar.team")}
              </Link>
            </li>
            {/* <li className="header__nav-list-item">
              <NavLink to="/news" className={`${style.cursor_pointer}`}>
                {t("headers.header.nav_bar.news")}
              </NavLink>
            </li> */}
          </ul>
          <div className="mobile-menu__switcher">
            <span
              className={`mobile-menu__switcher-item active ${style.cursor_pointer}`}
              onClick={() => setFolowign(!folowign && true)}
            >
              <div className="mobile-menu__switcher" style={{ marginTop: 40 }}>
                <span className={`mobile-menu__switcher-item active`}>
                  <button
                    onClick={() => {
                      CangleLanguage("en");
                      setActives(false);
                    }}
                    className={`mobile-menu__switcher-item ${
                      focusLanguge === 1 && "active"
                    }`}
                    onFocus={(e) => setFocusLanguge(1)}
                  >
                    EN
                  </button>
                </span>
                <span className="mobile-menu__switcher-item active">
                  <button
                    onClick={() => {
                      CangleLanguage("ru");
                      setActives(false);
                    }}
                    className={`mobile-menu__switcher-item ${
                      focusLanguge === 2 && "active"
                    }`}
                    onFocus={(e) => setFocusLanguge(2)}
                  >
                    RU
                  </button>
                </span>
                <span className="mobile-menu__switcher-item active">
                  <button
                    onClick={() => {
                      CangleLanguage("tur");
                      setActives(false);
                    }}
                    className={`mobile-menu__switcher-item ${
                      focusLanguge === 3 && "active"
                    }`}
                    onFocus={(e) => setFocusLanguge(3)}
                  >
                    TUR
                  </button>
                </span>
              </div>
            </span>
          </div>
        </span>
      </div>
    </>
  );
};
