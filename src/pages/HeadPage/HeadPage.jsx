import React from 'react';
import { Footer } from './Footer/Footer';
import { Header } from './Headers/Header';
import { Main } from './Main/Main';

export const HeadPage = (props) => {
    return (
        <>
            <Header />
            <Main/>
            <Footer/>
        </>
    );
}