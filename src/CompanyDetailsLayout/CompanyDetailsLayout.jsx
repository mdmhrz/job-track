import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const CompanyDetailsLayout = () => {
    return (
        <div>
            <header className='mb-[64px]'>
                <Navbar></Navbar>
            </header>
            <main className='bg-blue-100'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default CompanyDetailsLayout;