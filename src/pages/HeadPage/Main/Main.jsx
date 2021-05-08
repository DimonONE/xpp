import React from 'react';
import { Element } from 'react-scroll'

import { SectionAdvantages } from './components/SectionAdvantages/SectionAdvantages';
import { SectionCompare } from './components/SectionCompare/SectionCompare';
import { SectionCover } from './components/SectionCover/SectionCover';
import { SectionCurrency } from './components/SectionCurrency/SectionCurrency';
import { SectionDelegates } from './components/SectionDelegates/SectionDelegates';
import { SectionGuide } from './components/SectionGuide/SectionGuide';
import { SectionMedia } from './components/SectionMedia/SectionMedia';
import { SectionRoadmap } from './components/SectionRoadmap/SectionRoadmap';
import { SectionSteps } from './components/SectionSteps/SectionSteps';
import { SectionTokenomics } from './components/SectionTokenomics/SectionTokenomics';
import { SectionWork } from './components/SectionWork/SectionWork';



export const Main = (props) => {
    
    return (
    <>
        <Element name="Up">
            <main id="sections" className="sections">
                {/* <SectionCover /> */}
                <Element name="cryptocurrency">
                    <SectionCurrency />
                </Element>
                <Element name="">
                    <SectionSteps />
                </Element>
                <SectionWork />
                <Element name="How_to_buy">
                    <SectionGuide />
                </Element>
                <SectionCompare />
                <Element name="advantages">
                    <SectionAdvantages />
                </Element>
                <Element name="tokenomics">
                    <SectionTokenomics />
                </Element>
                <SectionRoadmap />
                <SectionDelegates />
                <SectionMedia />
            </main>
        </Element>
    </>);
  }