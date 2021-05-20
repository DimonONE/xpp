import React, { useState } from "react";
import { Footer } from "./Footer/Footer";
import { Header } from "./Headers/Header";
import { Main } from "./Main/Main";

import style from "./Main/components/SectionCurrency/SectionCurrency.module.css";
import { FullVIDEO } from "./Main/components/SectionCurrency/FullVideo";

export const HeadPage = (props) => {
  const [fullVideo, setFullVideo] = useState(false);
  const visibleScroll = () => {
    document.body.style.overflow = "visible";
  };
  return (
    <>
      <div className={fullVideo ? style.blures : ""}>
        <Header />
        <Main fullVideo={fullVideo} setFullVideo={setFullVideo} />
        <Footer />
      </div>
      <div
        className={`glightbox-container glightbox-clean ${
          fullVideo ? style.full_window : undefined
        }
              ${!fullVideo && style.fullVideo} ${
          !fullVideo && style.fullVideo__visiblity
        }`}
      >
        <div id={"glightbox-slider"} className={`goverlay `}></div>
        <div className={`gcontainer`}>
          <div className={`gslider`}>
            <div className={`gslide loaded current`}>
              <div className={`gslide-inner-content`}>
                <div className={`ginner-container gvideo-container`}>
                  {fullVideo && <FullVIDEO setFullVideo={setFullVideo} />}
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              setFullVideo(false);
              visibleScroll();
            }}
            className={`gclose gbtn`}
            tabIndex="2"
            aria-label="Close"
          >
            xxx
          </button>
        </div>
      </div>
    </>
  );
};
