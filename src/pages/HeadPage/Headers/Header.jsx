import React, { useState } from 'react';
import style from "./Header.module.css"

import { Link } from 'react-scroll'

import logo_svg from "../../../img/logo.svg"

export const Header = (props) => {
  const [folowign, setFolowign] = useState(false)
    return (
    <>
      <header className="header animate__animated animate__fadeIn fixed">
        <div className="container">
          <div className="d-flex header__row">
            <button className="header__burger">
              <span className="header__burger-line"></span>
              <span className="header__burger-line"></span>
              <span className="header__burger-line"></span>
            </button>
            <Link to="Up" spy={true} smooth={true}  duration={500} className={`header__logo ${style.cursor_pointer}`}>
              <img src={logo_svg} alt="XX Platform" className="img-responsive header__logo-img"/>
            </Link>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-list-item">
                  <Link to="currency" spy={true} smooth={true}  duration={500} className={`header__nav-link ${style.cursor_pointer}`}>Cryptocurrency</Link>
                </li>
                <li className="header__nav-list-item">
                  <Link to="guide" spy={true} smooth={true} duration={500} className={`header__nav-link ${style.cursor_pointer}`}>How to buy</Link>
                </li>
                <li className="header__nav-list-item">
                  <Link to="advantages" spy={true} smooth={true} duration={500} className={`header__nav-link ${style.cursor_pointer}`}>Advantages</Link>
                </li>
                <li className="header__nav-list-item">
                  <Link to="tokenomics" spy={true} smooth={true} duration={500} className={`header__nav-link ${style.cursor_pointer}`}>Tokenomics</Link>
                </li>
                <li className="header__nav-list-item">
                  <Link to="team" spy={true} smooth={true} duration={500} className={`header__nav-link ${style.cursor_pointer}`}>Team</Link>
                </li>
              </ul>
            </nav>
            <span className={`header__dropdown ${style.cursor_pointer}`} onClick={() => setFolowign(!folowign && true) } >
              <div className={`header__dropdown-selected ${folowign ? 'active' : ' '}`}>ENG</div>
              <div className={`header__dropdown-list-wrap ${!folowign ? style.folowing_language : ' '}`} >
                <ul className="header__dropdown-list">
                  <li className="header__dropdown-list-item">
                    <a href="/ru" className="header__dropdown-link">RU</a>
                  </li>
                </ul>
              </div>
            </span>
            <a href="https://wallet.xxp.group/" className="btn btn--bg-beige header__btn">Log in</a>
          </div>
        </div>
      </header>

      <div className="mobile-menu">
        <div className="container mobile-menu__container">
          <ul className="mobile-menu__list">
            <li className="mobile-menu__list-item">
              <Link to="currency"  className="mobile-menu__list-link">Cryptocurrency</Link>
            </li>
            <li className="mobile-menu__list-item">
              <Link to="guide" className="mobile-menu__list-link">How to buy</Link>
            </li>
            <li className="mobile-menu__list-item">
              <Link to="advantages" className="mobile-menu__list-link">Advantages</Link>
            </li>
            <li className="mobile-menu__list-item">
              <Link to="Tokenomics" data-href="tokenomics" className="mobile-menu__list-link">Tokenomics</Link>
            </li>
            <li className="mobile-menu__list-item">
              <Link to="team" className="mobile-menu__list-link">Team</Link>
            </li>
          </ul>
          <div className="mobile-menu__switcher">
            <span className="mobile-menu__switcher-item active">Eng</span>
            <Link to="/ru" className="mobile-menu__switcher-item">Ru</Link>
          </div>
        </div>
    </div>
    </>
    );
  }