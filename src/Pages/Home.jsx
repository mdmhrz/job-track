import React, { use, useRef } from 'react';
import Banner from '../components/Banner';
import HowItWorks from '../components/HowItWorks';
import TopCompanies from '../components/TopCompanies';
import Stats from '../components/Stats';
import SuccessStories from '../components/SuccessStories';
import { Helmet } from 'react-helmet-async';

const Home = () => {

    const topCompaniesRef = useRef(null);

    const scrollToTopCompanies = () => {
        topCompaniesRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <Helmet>
                <title>Home | JobTrack</title>
            </Helmet>

            <div>
                <Banner onFindJobsClick={scrollToTopCompanies}></Banner>
                <HowItWorks></HowItWorks>
                <div ref={topCompaniesRef}>
                    <TopCompanies></TopCompanies>
                </div>
                <Stats></Stats>
                <SuccessStories></SuccessStories>
            </div >
        </>
    );
};

export default Home;