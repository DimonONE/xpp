import ReactPlayer from "react-player";

import { useTranslation } from "react-i18next";
import "../../../../../utils/i18next";

import style from "./SectionCurrency.module.css";
import poster from "../../../../../img/video-image.svg";

export const FullVIDEO = (props) => {
  const { t } = useTranslation();

  document.body.style.overflow = "hidden";
  return (
    <>
      <ReactPlayer
        className={`plyr__poster`}
        url={
          t("section_currency.language") === "RU"
            ? "https://youtu.be/dBftHN6ksPI"
            : "https://www.youtube.com/watch?v=xUKW--QcqoY"
        }
        height="auto"
        playing
        playIcon={<div className="play"></div>}
        controls
      />
    </>
  );
};
