import React from 'react';
import { Outlet } from 'react-router-dom';
import Head from '../../Component/Share/Head/Head';

const Main = () => {
    return (
        <div>
            {/* <Head /> */}
            <Outlet />
        </div>
    );
};

export default Main;