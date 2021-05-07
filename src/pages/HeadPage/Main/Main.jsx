import React from 'react';
import { SectionAdvantages } from './components/SectionAdvantages/SectionAdvantages';
import { SectionCompare } from './components/SectionCompare/SectionCompare';
import { SectionCover } from './components/SectionCover/SectionCover';
import { SectionCurrency } from './components/SectionCurrency/SectionCurrency';
import { SectionGuide } from './components/SectionGuide/SectionGuide';
import { SectionRoadmap } from './components/SectionRoadmap/SectionRoadmap';
import { SectionSteps } from './components/SectionSteps/SectionSteps';
import { SectionTokenomics } from './components/SectionTokenomics/SectionTokenomics';
import { SectionWork } from './components/SectionWork/SectionWork';

export const Main = (props) => {
    return (
        <main id="sections" className="sections">
            {/* <SectionCover /> */}
            <SectionCurrency />
            <SectionSteps />
            <SectionWork />
            <SectionGuide />
            <SectionCompare />
            <SectionAdvantages />
            <SectionTokenomics />
            <SectionRoadmap />

        </main>
    );
  }