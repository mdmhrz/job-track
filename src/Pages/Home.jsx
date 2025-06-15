import React, { use, useRef } from 'react';
import Banner from '../components/Banner';
import HowItWorks from '../components/HowItWorks';
import TopCompanies from '../components/TopCompanies';
import Stats from '../components/Stats';
import SuccessStories from '../components/SuccessStories';

const Home = () => {

    const topCompaniesRef = useRef(null);

    const scrollToTopCompanies = () => {
        topCompaniesRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div>
            <Banner onFindJobsClick={scrollToTopCompanies}></Banner>
            <HowItWorks></HowItWorks>
            <div ref={topCompaniesRef}>
                <TopCompanies></TopCompanies>
            </div>
            <Stats></Stats>
            <SuccessStories></SuccessStories>
        </div >
    );
};

export default Home;