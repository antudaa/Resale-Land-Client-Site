import React from 'react';

const ShowSliderImage = ({ im, i , cat}) => {
    console.log(`#${cat}${i}`);
    return (
        // <div id={`item${i}`} className="carousel-item w-full">
        //     <img src={im} alt='' className="w-full" />
        // </div>
        
        <div id={`${cat}${i}`} className="carousel-item relative w-full">
            <img src={im} className="w-full" alt=''/>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#${cat}${i-1}`} className="btn btn-circle">❮</a>
                <a href={`#${cat}${i+1}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default ShowSliderImage;