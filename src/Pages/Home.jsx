import React from 'react';
import Banner from '../components/Banner';
import HowItWorks from '../components/HowItWorks';

const Home = () => {
    return (
        <div >
            <section className='max-w-11/12 mx-auto'>
                <Banner></Banner>
            </section>
            <HowItWorks></HowItWorks>
        </div>
    );
};

export default Home;