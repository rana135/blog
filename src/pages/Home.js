import React from 'react';
import Banner from '../Component/Banner/Banner';
import Footer from '../Component/Share/Footer/Footer';
import PopularPost from '../Component/PopularPost';
import NewPosts from '../Component/NewPosts';
import TrendyPost from '../Component/TrendyPost';
import TopPost from '../Component/TopPost';

const Home = () => {
    return (
        <div>
            <Banner />
            <PopularPost />
            <NewPosts />
            <TrendyPost />
            <TopPost />
            <Footer />
        </div>
    );
};

export default Home;