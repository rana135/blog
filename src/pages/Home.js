import React from 'react';
import Banner from '../Component/Banner/Banner';
import PopularPost from '../Component/PopularPost';
import NewPosts from '../Component/NewPosts';
import TrendyPost from '../Component/TrendyPost';
import TopPost from '../Component/TopPost';
import LatestVideo from '../Component/LatestVideo';

const Home = () => {
    return (
        <div className='allContainer'>
            <Banner />
            <PopularPost />
            <NewPosts />
            <LatestVideo />
            <TrendyPost />
            <TopPost />
        </div>
    );
};

export default Home;