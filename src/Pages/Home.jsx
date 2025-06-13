import React, { use } from 'react';
import Banner from '../components/Banner';
import HowItWorks from '../components/HowItWorks';
import TopCompanies from '../components/TopCompanies';
import Stats from '../components/Stats';

const Home = () => {



    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <TopCompanies></TopCompanies>
            <Stats></Stats>
        </div >
    );
};

export default Home;