import React from 'react';
import {NavLink} from "react-router-dom";

import logo_svg from "../../../img/logo.svg"

export const Header = (props) => {
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
            <NavLink to="Up" className="header__logo" data-href="sections">
              <img src={logo_svg} alt="XX Platform" className="img-responsive header__logo-img"/>
            </NavLink>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-list-item">
                  <NavLink to="Cryptocurrency" data-href="currency" className="header__nav-link">Cryptocurrency</NavLink>
                </li>
                <li className="header__nav-list-item">
                  <a href="How_to_buy" data-href="guide" className="header__nav-link">How to buy</a>
                </li>
                <li className="header__nav-list-item">
                  <a href="Advantages" data-href="advantages" className="header__nav-link">Advantages</a>
                </li>
                <li className="header__nav-list-item">
                  <a href="Tokenomics" data-href="tokenomics" className="header__nav-link">Tokenomics</a>
                </li>
                <li className="header__nav-list-item">
                  <a href="Team" data-href="team" className="header__nav-link">Team</a>
                </li>
              </ul>
            </nav>
            <div className="header__dropdown" data-dropdown>
              <div className="header__dropdown-selected" data-dropdown-header>ENG</div>
              <div className="header__dropdown-list-wrap" data-dropdown-hidden>
                <ul className="header__dropdown-list">
                  <li className="header__dropdown-list-item">
                    <a href="/ru" className="header__dropdown-link">RU</a>
                  </li>
                </ul>
              </div>
            </div>
            <a href="https://wallet.xxp.group/" className="btn btn--bg-beige header__btn">Log in</a>
          </div>
        </div>
      </header>

      <div className="mobile-menu">
        <div className="container mobile-menu__container">
          <ul className="mobile-menu__list">
            <li className="mobile-menu__list-item">
              <a href="Cryptocurrency" data-href="currency" className="mobile-menu__list-link">Cryptocurrency</a>
            </li>
            <li className="mobile-menu__list-item">
              <a href="How_to_buy" data-href="guide" className="mobile-menu__list-link">How to buy</a>
            </li>
            <li className="mobile-menu__list-item">
              <a href="Advantages" data-href="advantages" className="mobile-menu__list-link">Advantages</a>
            </li>
            <li className="mobile-menu__list-item">
              <a href="Tokenomics" data-href="tokenomics" className="mobile-menu__list-link">Tokenomics</a>
            </li>
            <li className="mobile-menu__list-item">
              <a href="Team" data-href="team" className="mobile-menu__list-link">Team</a>
            </li>
          </ul>
          <div className="mobile-menu__switcher">
            <span className="mobile-menu__switcher-item active">Eng</span>
            <a href="/ru" className="mobile-menu__switcher-item">Ru</a>
          </div>
        </div>
    </div>
    </>
    );
  }