import React from 'react';
import style from "./Footer.module.css"
import logo_footer from "../../../img/logo-footer.svg"
import policy_pdf from "../../../PDF/policy.pdf"
import paper_pdf from "../../../PDF/paper.pdf"

export const Footer = (props) => {
    return (
        <footer className="footer">
        <div className="container footer__container wow animate__animated animate__fadeIn">
          <div className="row footer__row">
            <div className="col-lg-3">
              <a href="Up" className="footer__logo" data-href="sections">
                <img src={logo_footer} alt="XX Platform" className="img-responsive footer__logo-img" />
              </a>
            </div>
            <div className="col-lg-3 footer__links">
              <a href="https://wallet.xxp.group/" className="footer__link">Web-wallet</a>
              <a href={paper_pdf} target="_blank" className="footer__link">White Paper</a>
            </div>
            <div className="col-lg-6">
              <div className="footer__socials">
                <a href="https://t.me/xxplatform_en" target="_blank" className={`footer__socials-link ${style.xxplatform_en}`}></a>
                <a href="https://www.facebook.com/XXPlatform/" target="_blank" className={`footer__socials-link ${style.XXPlatform_1}`}></a>
                <a href="https://twitter.com/XXPlatform" target="_blank" className={`footer__socials-link ${style.XXPlatform_2}`}></a>
                <a href="https://www.instagram.com/xxplatform/" target="_blank" className={`footer__socials-link ${style.xxplatform_1}`}></a>
                <a href="https://www.youtube.com/channel/UCHmnVCzee_Ay8yxxMFtNd_A" target="_blank" className={`footer__socials-link ${style.socials_icon_4}`}></a>
                <a href="https://www.reddit.com/user/XXPlatform" target="_blank" className={`footer__socials-link ${style.footer__socials_icon_5}`}></a>
                <a href="https://discord.gg/9cU2hmxH9Q" target="_blank" className={`footer__socials-link ${style.footer__socials_icon_6}`} ></a>
                <a href="https://bitcointalk.org/index.php?topic=5305384.0" target="_blank" className={`footer__socials-link ${style.footer__socials_icon_7}`}></a>
                <a href="https://www.altcoinstalks.com/index.php?topic=186705.0" target="_blank" className={`footer__socials-link ${style.footer__socials_icon_8}`}></a>
                <a href="https://cryptotalk.org/topic/337798-ann-xxp-xx-platform-investment-trading-platform-%F0%9F%93%89%F0%9F%93%8A%F0%9F%93%88/" target="_blank" className={`footer__socials-link ${style.footer__socials_icon_9}`}></a>
              </div>
            </div>
          </div>
          <div className="row footer__row">
            <div className="col-auto footer__text">
              XX Platform © 2021
            </div>
            <div className="col-auto footer__text">
              <a href={policy_pdf} target="_blank" className="footer__policy">
                Privacy policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }