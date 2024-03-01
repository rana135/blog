import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { bannerFilter } from '../../db/bannerFilterData';

const BannerFilter = () => {
    const bannerSlickSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 440,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 940,
                settings: {
                    slidesToShow: 5,
                },
            },
        ],
        loop: true,
    };
    return (
        <div className='bg-[#F5F5F5F5] p-1'>
            <Slider {...bannerSlickSettings}>
                {bannerFilter.map((item) => (
                    <div key={item?._id} className="carousel-item">
                        <div
                            className="carousel-image"
                            style={{ backgroundImage: `url(${item?.image})` }}
                        >
                            <div className="carousel-text">#{item?.category}</div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default BannerFilter;