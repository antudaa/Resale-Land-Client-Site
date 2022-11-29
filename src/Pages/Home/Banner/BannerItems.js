import React from 'react';

const BannerItems = ({ data }) => {

    const { img, id, prev, next } = data;

    return (

        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='img-slider'>
                <img id='slider-img' src={img} alt='' className="" />
            </div>

            <div className="absolute justify-start transform -translate-y-1/2 lg:left-24 md:left-10 left-4 top-1/4">
                <div>
                    <h1 className='lg:text-6xl text-xl  md:text-3xl lg:font-bold font-semibold text-teal-500 lg:mb-10'>Welcome To Resale Land</h1>
                </div>
                <h1 className='lg:text-5xl text-sm md:text-3xl lg:font-bold font-semibold text-white'>
                    Choose Your Product Buy & Sell<br />
                    Get The Best Price
                </h1>
            </div>
            <div className="absolute mt-6 left-4 flex justify-start transform -translate-y-1/2 lg:left-24 md:left-10  w-1/2 top-1/2">
                <p className='text-sm md:text-xl lg:text-2xl text-white'>There are many Facilities and discounts .We also provide a premium service and try to satisfy our customers ...</p>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 right-6 lg:right-24 lg:top-16 top-52">
                <a href={`#slide${prev}`} className="btn btn-circle mr-7">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>

    );
};

export default BannerItems;