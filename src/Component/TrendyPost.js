import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import card from '../asset/home/popular post/card.svg'
import trendyPostData from '../db/trendyPostData';

const TrendyPost = () => {
    const trendysettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>
            <div className='flex justify-start items-center gap-3 px-4 mt-7'>
                <div className='bg-[#F81539] w-1 h-3 rounded-xl'></div>
                <h4 className='font-semibold text-xl font-serif'>Trendy Posts</h4>
            </div>
            <div style={{ overflow: 'hidden' }} className='mx-auto'>
                <Slider {...trendysettings}>
                    {trendyPostData.map((post) => (
                        <div key={post?._id} className="transition-all duration-150 flex w-full px-3 py-10 hover:cursor-pointer">
                            <div className="flex flex-col items-stretch min-h-full pb-4 mb-1 transition-all duration-150 bg-white rounded-xl shadow-lg hover:shadow-2xl mx-auto">
                                <div className="md:flex-shrink-0 px-3">
                                    <img
                                        src={post?.image}
                                        alt="Blog Cover"
                                        className="object-fill w-full rounded-lg h-48"
                                    />
                                </div>
                                <h2 className="px-4 text-xl font-semibold tracking-normal text-[#3E3232] font-sans mt-3">
                                    {post?.title.length > 18 ? `${post?.title.slice(0, 18)}...` : post?.title}
                                </h2>
                                <p className="flex flex-row flex-wrap w-full px-4 py-3 overflow-hidden text-md text-justify text-[#908989]">
                                    {post?.content.length > 70 ? `${post?.content.slice(0, 70)}...` : post?.content}
                                </p>
                                <div className="mx-3 rounded-xl px-3 py-2 mt-2 bg-[#F5F5F5]">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center flex-1">
                                            <img
                                                className="object-fill w-10 h-10 rounded-xl"
                                                src={post?.writerImage}
                                                alt="Avatar"
                                            />
                                            <div className="flex flex-col mx-2">
                                                <div>
                                                    <Link to='/' className="font-semibold text-[#3E3232] text-lg ml-1 hover:underline">
                                                        {post?.writer}
                                                    </Link>
                                                </div>
                                                <span className="mx-1 text-xs text-[3E3232]">{post?.date}</span>
                                            </div>
                                        </div>
                                        <img className='object-fill w-5 rounded-lg rounded-b-none h-5' src={card} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div >
    );
};

export default TrendyPost;