import React from 'react';
import latestVideoData from '../db/latestVideoData';
import { useWindowSize } from "react-use";
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LatestVideo = () => {
    const { width } = useWindowSize();
    return (
        <div className='px-4'>
            <div className='flex justify-start items-center gap-3 px-4 my-7'>
                <div className='bg-[#F81539] w-1 h-3 rounded-xl'></div>
                <h4 className='font-semibold text-xl font-serif'>latest videos</h4>
            </div>
            <div className='flex md:flex-row justify-center items-center md:gap-6'>
                {latestVideoData.map((slide) => (
                    <div key={slide?._id} className="flex justify-center items-center md:flex-row flex-col gap-4">
                        <div className='relative'>
                            <video poster={slide?.poster} controls loop className="rounded-xl">
                                <source src={slide?.video} type="video/mp4" />
                            </video>
                            <div className="bg-[#DCC2DE] text-white p-3 rounded-lg absolute bottom-14 w-[90%] mx-4">
                                {width > 500 ? <h4 className="text-xl font-medium mb-3 text-[#000000]">
                                    {slide?.title.length > 50 ? `${slide?.title.slice(0, 50)}...` : slide?.title}</h4> : <h4 className="text-xl font-medium mb-3 text-[#000000]">
                                    {slide?.title.length > 20 ? `${slide?.title.slice(0, 20)}...` : slide?.title}</h4>}
                                <p className="text-sm text-[#000000]">
                                    {slide?.content.length > 34 ? `${slide?.content.slice(0, 34)}...` : slide?.content}
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col w-full gap-4 md:max-w-[488px]'>
                            <div key={slide?._id} className="flex justify-center bg-[#FFFFFF] shadow-2xl rounded-xl p-2 gap-3">
                                <div className="w-full object-fill">
                                    <img src={slide?.card1Image} alt="Card" className="rounded-xl h-full w-full" />
                                </div>
                                <div className='mt-1'>
                                    <h5 className="font-black text-[#3E3232] md:text-xl text-md">
                                        {slide.card1Title.length > 30 ? `${slide.card1Title.slice(0, 30)}...` : slide.card1Title}
                                    </h5>
                                    {width > 380 ? <p className="md:text-lg text-[#3E3232BF] text-base">
                                        {slide.card1Content.length > 200 ? `${slide.card1Content.slice(0, 200)}...` : slide.card1Content}
                                    </p> : <p className="md:text-lg text-[#3E3232BF] text-base">
                                        {slide.card1Content.length > 60 ? `${slide.card1Content.slice(0, 60)}...` : slide.card1Content}
                                    </p>}
                                </div>
                            </div>
                            <div key={slide?._id} className="flex justify-center bg-[#FFFFFF] shadow-2xl rounded-xl p-2 gap-3">
                                <div className="w-full object-fill">
                                    <img src={slide?.card2Image} alt="Card" className="rounded-xl h-full w-full" />
                                </div>
                                <div className='mt-1'>
                                    <h5 className="font-black text-[#3E3232] md:text-xl text-md">
                                        {slide.card2Title.length > 30 ? `${slide.card2Title.slice(0, 30)}...` : slide.card2Title}
                                    </h5>
                                    {width > 380 ? <p className="md:text-lg text-[#3E3232BF] text-base">
                                        {slide.card2Content.length > 200 ? `${slide.card2Content.slice(0, 200)}...` : slide.card2Content}
                                    </p> : <p className="md:text-lg text-[#3E3232BF] text-base">
                                        {slide.card2Content.length > 60 ? `${slide.card2Content.slice(0, 60)}...` : slide.card2Content}
                                    </p>}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LatestVideo;