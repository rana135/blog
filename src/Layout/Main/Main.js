import React from 'react';
import { Outlet } from 'react-router-dom';
import Head from '../../Component/Share/Head/Head';
import Footer from '../../Component/Share/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Head />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;