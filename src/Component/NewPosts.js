import React from 'react';
import { Link } from 'react-router-dom';
import card from '../asset/home/popular post/card.svg'
import newPostsData from '../db/newPostsData';

const NewPosts = () => {
    return (
        <div>
            <div className='flex justify-between items-center'>
                <div className='flex justify-start items-center gap-3 px-4 mt-7'>
                    <div className='bg-[#F81539] w-1 h-3 rounded-xl'></div>
                    <h4 className='font-semibold text-xl font-serif'>New Posts</h4>
                </div>
                <button
                    class="middle none center mr-4 rounded-lg bg-[#F5F5F5] py-3 px-6 font-sans text-sm font-bold uppercase text-[#3E3232] shadow-md transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    data-ripple-light="true"
                >
                    Show all
                </button>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 mx-auto">
                {newPostsData.map((post) => (
                    <div key={post?._id} className="transition-all duration-150 flex w-full px-3 py-6 hover:cursor-pointer">
                        <div className="flex flex-col mx-auto md:flex-row items-stretch min-h-full pb-4 transition-all duration-150 bg-white rounded-xl shadow-lg hover:shadow-2xl">
                            <div className="md:flex-shrink-0 px-3">
                                <img
                                    src={post?.image}
                                    alt="Blog Cover"
                                    className="object-fill lg:w-60 xl:w-80 rounded-lg h-full xl:h-48"
                                />
                            </div>
                            <div className='p-3 md:p-0'>
                                <h2 className="px-1 text-xl font-semibold tracking-normal text-[#3E3232] font-sans  pr-4">
                                    {post?.title.length > 18 ? `${post?.title.slice(0, 18)}...` : post?.title}
                                </h2>
                                <p className="flex flex-row flex-wrap w-full px-1 pr-4 py-3 overflow-hidden text-md text-justify text-[#908989]">
                                    {post?.content.length > 80 ? `${post?.content.slice(0, 80)}...` : post?.content}
                                </p>
                                <div className="mx-1 mr-4 rounded-xl px-3 py-2 mt-3 bg-[#F5F5F5]">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center flex-1">
                                            <img
                                                className="object-fill w-10 h-10 rounded-xl"
                                                src={post?.writerImage}
                                                alt="Avatar"
                                            />
                                            <div className="flex flex-col mx-2">
                                                <div title={post?.writer}>
                                                    <Link to='/' className="font-semibold text-[#3E3232] text-lg ml-1 hover:underline">
                                                        {post?.writer.length > 5 ? `${post?.writer.slice(0, 5)}...` : post?.writer}
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
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewPosts;