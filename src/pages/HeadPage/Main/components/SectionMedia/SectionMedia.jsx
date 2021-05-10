import React from "react";
import { Fade } from "react-awesome-reveal";
import { localState } from "./LocalState.js"

export const SectionMedia = (props) => {
    return(
      <section className="section media">
        <div className="container media__container">
          <Fade direction="down">
            <h2 className="heading font-size-40 media__heading text-center wow animate__animated animate__fadeInDown">
              <b className="font-weight-700"> Mass media </b>
            </h2>
          </Fade>
          <div className="row media__row">
            {localState.map( (e) => 
              <div key={e.id} className="media__item-wrap col-auto wow animate__animated animate__fadeInUp">
                <Fade direction="up" delay={e.delay}>
                  <div className="media__item">
                    <div className={`media__item-img`} style={e.dataStyle}></div>
                    <a href={e.link}
                      className="media__item-link">{e.text}</a>
                  </div>
                </Fade>
              </div>
            )}
          </div>
        </div>
      </section>
    )
}