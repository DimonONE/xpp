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
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
            >
              <g>
                <g>
                  <path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"></path>
                </g>
              </g>
              <g>
                <g>
                  <path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"></path>
                </g>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};
