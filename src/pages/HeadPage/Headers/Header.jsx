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
  const [actives, setActives] = useState(false);
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
              spy={true}
              smooth={true}
              duration={500}
              className={`header__logo ${style.cursor_pointer}`}
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
                    spy={true}
                    smooth={true}
                    duration={500}
                    className={`header__nav-link ${style.cursor_pointer}`}
                  >
                    {t("headers.header.nav_bar.cryptocurrency")}
                  </Link>
                </li>
                <li className="header__nav-list-item">
                  <Link
                    to="guide"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className={`header__nav-link ${style.cursor_pointer}`}
                  >
                    {t("headers.header.nav_bar.how_to_buy")}
                  </Link>
                </li>
                <li className="header__nav-list-item">
                  <Link
                    to="advantages"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className={`header__nav-link ${style.cursor_pointer}`}
                  >
                    {t("headers.header.nav_bar.advantages")}
                  </Link>
                </li>
                <li className="header__nav-list-item">
                  <Link
                    to="tokenomics"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className={`header__nav-link ${style.cursor_pointer}`}
                  >
                    {t("headers.header.nav_bar.tokenomics")}
                  </Link>
                </li>
                <li className="header__nav-list-item">
                  <Link
                    to="team"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className={`header__nav-link ${style.cursor_pointer}`}
                  >
                    {t("headers.header.nav_bar.team")}
                  </Link>
                </li>
                <li className="header__nav-list-item">
                  <NavLink
                    to="/news"
                    className={`header__nav-link ${style.cursor_pointer}`}
                  >
                    {t("headers.header.nav_bar.news")}
                  </NavLink>
                </li>
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
                <ul className="header__dropdown-list">
                  <li className="header__dropdown-list-item">
                    <button
                      onClick={() => CangleLanguage("en")}
                      className="header__dropdown-link"
                    >
                      EN
                    </button>
                  </li>
                  <li className="header__dropdown-list-item">
                    <button
                      onClick={() => CangleLanguage("ru")}
                      className="header__dropdown-link"
                    >
                      RU
                    </button>
                  </li>
                  <li className="header__dropdown-list-item">
                    <button
                      onClick={() => CangleLanguage("tur")}
                      className="header__dropdown-link"
                    >
                      TUR
                    </button>
                  </li>
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
        <div className="container mobile-menu__container">
          <ul className="mobile-menu__list">
            <li className="mobile-menu__list-item">
              <Link to="currency" className="mobile-menu__list-link">
                {t("headers.header.nav_bar.cryptocurrency")}
              </Link>
            </li>
            <li className="mobile-menu__list-item">
              <Link to="guide" className="mobile-menu__list-link">
                {t("headers.header.nav_bar.how_to_buy")}
              </Link>
            </li>
            <li className="mobile-menu__list-item">
              <Link to="advantages" className="mobile-menu__list-link">
                {t("headers.header.nav_bar.advantages")}
              </Link>
            </li>
            <li className="mobile-menu__list-item">
              <Link
                to="Tokenomics"
                data-href="tokenomics"
                className="mobile-menu__list-link"
              >
                {t("headers.header.nav_bar.tokenomics")}
              </Link>
            </li>
            <li className="mobile-menu__list-item">
              <Link to="team" className="mobile-menu__list-link">
                {t("headers.header.nav_bar.team")}
              </Link>
            </li>
            <li className="header__nav-list-item">
              <NavLink to="/news" className={`${style.cursor_pointer}`}>
                {t("headers.header.nav_bar.news")}
              </NavLink>
            </li>
          </ul>
          <div className="mobile-menu__switcher">
            <span
              className={`mobile-menu__switcher-item active ${style.cursor_pointer}`}
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
                <ul className="header__dropdown-list">
                  <li className="header__dropdown-list-item">
                    <button
                      onClick={() => CangleLanguage("en")}
                      className="mobile-menu__switcher-item"
                    >
                      EN
                    </button>
                  </li>
                  <li className="header__dropdown-list-item">
                    <button
                      onClick={() => CangleLanguage("ru")}
                      className="mobile-menu__switcher-item"
                    >
                      RU
                    </button>
                  </li>
                  <li className="header__dropdown-list-item">
                    <button
                      onClick={() => CangleLanguage("tur")}
                      className="mobile-menu__switcher-item"
                    >
                      TUR
                    </button>
                  </li>
                </ul>
              </div>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
