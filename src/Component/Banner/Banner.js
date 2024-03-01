import React from 'react';
import './Banner.css'
import BannerFilter from './BannerFilter';
import Slider from 'react-slick';
import { bannerLeft, bannerRightSlide } from '../../db/bannerFilterData';

const Banner = () => {
    const rightSlideSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className='mt-32'>
            <div className='overflow-hidden'>
                <BannerFilter />
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-4 p-5 mt-10'>
                <div className='flex justify-center items-center gap-4'>
                    {bannerLeft.map((slide) => (
                        <div key={slide?._id} className="card-container">
                            <div className="background-card" style={{ backgroundImage: `url(${slide?.image})` }}>
                            </div>
                            <div className="bottom-card">
                                <h3 className="additional-title">
                                    {slide?.title.length > 18 ? `${slide?.title.slice(0, 18)}...` : slide?.title}
                                </h3>
                                <p className='additional-content'>
                                    {slide?.content.length > 60 ? `${slide?.content.slice(0, 60)}...` : slide?.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="bannerSlick-container">
                    {/* <Slider {...rightSlideSettings}> */}
                    {bannerRightSlide.map((slide) => (
                        <div key={slide?._id} className="background-card" style={{ backgroundImage: `url(${slide?.image})` }}>
                            <div className="bottom-card">
                                <h3 className="additional-title">
                                    {slide?.title}
                                </h3>
                                <p className='additional-content'>
                                    {slide?.content.length > 140 ? `${slide?.content.slice(0, 140)}...` : slide?.content}
                                </p>
                            </div>
                        </div>
                    ))}
                    {/* </Slider> */}
                </div>
            </div>
        </div>
    );
};

export default Banner;