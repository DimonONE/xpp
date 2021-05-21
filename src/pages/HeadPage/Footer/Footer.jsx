import React from "react";
import { useTranslation } from "react-i18next";
import "../../../utils/i18next";

import { Fade } from "react-awesome-reveal";

import style from "./Footer.module.css";
import logo_footer from "../../../img/logo-footer.svg";
import policy_pdf from "../../../PDF/policy.pdf";
import paper_pdf from "../../../PDF/paper.pdf";

export const Footer = (props) => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <Fade duration={1000} triggerOnce="true">
        <div className="container footer__container wow animate__animated animate__fadeIn">
          <div className="row footer__row">
            <div className="col-lg-3">
              <a href="Up" className="footer__logo">
                <img
                  src={logo_footer}
                  alt="XX Platform"
                  className="img-responsive footer__logo-img"
                />
              </a>
            </div>
            <div className="col-lg-3 footer__links">
              <a href="https://wallet.xxp.group/" className="footer__link">
                {t("footer.footer_link_1")}
              </a>
              <a href={paper_pdf} className="footer__link">
                {t("footer.footer_link_2")}
              </a>
            </div>
            <div className="col-lg-6">
              <div className="footer__socials">
                <a
                  href="https://www.facebook.com/XXPlatform/"
                  className={`footer__socials-link ${style.XXPlatform_1}`}
                >
                  {" "}
                </a>
                <a
                  href="https://vk.com/xxplatform"
                  className={`footer__socials-link ${style.footer__vk_icon}`}
                >
                  {" "}
                </a>
                <a
                  href="https://twitter.com/XXPlatform"
                  className={`footer__socials-link ${style.XXPlatform_2}`}
                >
                  {" "}
                </a>
                <a
                  href="https://www.instagram.com/xxplatform/"
                  className={`footer__socials-link ${style.xxplatform_1}`}
                >
                  {" "}
                </a>
                <a
                  href="https://www.youtube.com/channel/UCHmnVCzee_Ay8yxxMFtNd_A"
                  className={`footer__socials-link ${style.socials_icon_4}`}
                >
                  {" "}
                </a>
                <a
                  href="https://www.reddit.com/user/XXPlatform"
                  className={`footer__socials-link ${style.footer__socials_icon_5}`}
                >
                  {" "}
                </a>
                <a
                  href="https://discord.gg/9cU2hmxH9Q"
                  className={`footer__socials-link ${style.footer__socials_icon_6}`}
                >
                  {" "}
                </a>
                <a
                  href="https://bitcointalk.org/index.php?topic=5305384.0"
                  className={`footer__socials-link ${style.footer__socials_icon_7}`}
                >
                  {" "}
                </a>
                <a
                  href="https://www.altcoinstalks.com/index.php?topic=186705.0"
                  className={`footer__socials-link ${style.footer__socials_icon_8}`}
                >
                  {" "}
                </a>
                <a
                  href="https://cryptotalk.org/topic/337798-ann-xxp-xx-platform-investment-trading-platform-%F0%9F%93%89%F0%9F%93%8A%F0%9F%93%88/"
                  className={`footer__socials-link ${style.footer__socials_icon_9}`}
                >
                  {" "}
                </a>
              </div>
            </div>
          </div>
          <div className="row footer__row">
            <div className="col-auto footer__text">
              {t("footer.footer_text")}
            </div>
            <div className="col-auto footer__text">
              <a href={policy_pdf} className="footer__policy">
                {t("footer.footer_policy")}
              </a>
            </div>
          </div>
        </div>
      </Fade>
    </footer>
  );
};
