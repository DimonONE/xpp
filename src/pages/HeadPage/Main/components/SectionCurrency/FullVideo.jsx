import ReactPlayer from "react-player";

import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import "../../../../../utils/i18next";

export const FullVIDEO = (props) => {
  const { t } = useTranslation();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 600px)" });
  document.body.style.overflow = "hidden";
  console.log(isTabletOrMobile);
  return (
    <>
      <ReactPlayer
        className={`plyr__poster`}
        url={
          t("section_currency.language") === "RU"
            ? "https://youtu.be/dBftHN6ksPI"
            : "https://www.youtube.com/watch?v=xUKW--QcqoY"
        }
        width={isTabletOrMobile ? "100%" : ""}
        height={isTabletOrMobile ? "" : "auto"}
        playing
        playIcon={<div className="play"></div>}
        controls
        onBuffer={() => console.log("iiili")}
      />
    </>
  );
};
