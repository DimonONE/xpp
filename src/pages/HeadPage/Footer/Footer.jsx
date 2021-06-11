import React from "react";
import { useTranslation } from "react-i18next";
import "../../../utils/i18next";

import { Fade } from "react-awesome-reveal";
import { Link } from "react-scroll";

import style from "./Footer.module.css";
import logo_footer from "../../../img/logo-footer.svg";
import policy_en__pdf from "../../../PDF/policy_en.pdf";
import paper_en_pdf from "../../../PDF/paper_en.pdf";
import paper_tur_pdf from "../../../PDF/paper_tur.pdf";
import policy_ru__pdf from "../../../PDF/policy_ru.pdf";
import paper_ru_pdf from "../../../PDF/paper_ru.pdf";

export const Footer = (props) => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <Fade duration={1000} triggerOnce="true">
        <div className="container footer__container wow animate__animated animate__fadeIn">
          <div className="row footer__row">
            <div className="col-lg-3">
              <Link
                className="footer__logo"
                style={{ userSelect: "none", cursor: "pointer" }}
                to="head"
                spy={true}
                smooth={true}
                offset={50}
                duration={1000}
                delay={500}
              >
                <img
                  src={logo_footer}
                  alt="XX Platform"
                  className="img-responsive footer__logo-img"
                />
              </Link>
            </div>
            <div className="col-lg-3 footer__links">
              <a
                href="https://wallet.xxp.group/"
                className="footer__link"
                target="_blank"
                rel="noreferrer"
                style={{ userSelect: "none" }}
              >
                {t("footer.footer_link_1")}
              </a>
              <a
                href={
                  (t("footer.lng") === "ru" && paper_ru_pdf) ||
                  (t("footer.lng") === "tur" && paper_tur_pdf) ||
                  (t("footer.lng") === "en" && paper_en_pdf)
                }
                className="footer__link"
                target="_blank"
                rel="noreferrer"
                style={{ userSelect: "none" }}
              >
                {t("footer.footer_link_2")}
              </a>
            </div>
            <div className="col-lg-6">
              <div className="footer__socials">
                <a
                  href="https://www.facebook.com/XXPlatform/"
                  className={`footer__socials-link ${style.XXPlatform_1}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                </a>
                <a
                  href="https://vk.com/xxplatform"
                  className={`footer__socials-link ${style.footer__vk_icon}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                </a>
                <a
                  href="https://twitter.com/XXPlatform"
                  className={`footer__socials-link ${style.XXPlatform_2}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                </a>
                <a
                  href="https://www.instagram.com/xxplatform/"
                  className={`footer__socials-link ${style.xxplatform_1}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                </a>
                <a
                  href="https://www.youtube.com/channel/UCHmnVCzee_Ay8yxxMFtNd_A"
                  className={`footer__socials-link ${style.socials_icon_4}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                </a>
                <a
                  href="https://www.reddit.com/user/XXPlatform"
                  className={`footer__socials-link ${style.footer__socials_icon_5}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                </a>
                <a
                  href="https://discord.gg/9cU2hmxH9Q"
                  className={`footer__socials-link ${style.footer__socials_icon_6}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                </a>
                <a
                  href="https://bitcointalk.org/index.php?topic=5305384.0"
                  className={`footer__socials-link ${style.footer__socials_icon_7}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                </a>
                <a
                  href="https://www.altcoinstalks.com/index.php?topic=186705.0"
                  className={`footer__socials-link ${style.footer__socials_icon_8}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                </a>
                <a
                  href="https://cryptotalk.org/topic/337798-ann-xxp-xx-platform-investment-trading-platform-%F0%9F%93%89%F0%9F%93%8A%F0%9F%93%88/"
                  className={`footer__socials-link ${style.footer__socials_icon_9}`}
                  target="_blank"
                  rel="noreferrer"
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
              <a
                href={
                  t("footer.lng") === "ru" ? policy_ru__pdf : policy_en__pdf
                }
                className="footer__policy"
                target="_blank"
                rel="noreferrer"
              >
                {t("footer.footer_policy")}
              </a>
            </div>
          </div>
        </div>
      </Fade>
    </footer>
  );
};
