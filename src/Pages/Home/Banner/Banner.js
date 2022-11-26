import React from 'react';
import './Banner.css';
import BannerItems from './BannerItems';



const Banner = () => {
    const sliderData = [
        {
            img: 'https://cargiant.co.in/uploads/car/181215419369.jpeg',
            id: 1,
            prev: 6,
            next: 2
        },
        {
            img: 'https://www.team-bhp.com/forum/attachments/international-automotive-scene/199740d1254281613-hyundais-most-expensive-expansive-car-new-2010-equus-revealed-160724.jpg',
            id: 2,
            prev: 1,
            next: 3
        },
        {
            img: 'https://i.pinimg.com/originals/ac/94/0a/ac940ab0e95c0f96985567308f3cb3d3.jpg',
            id: 3,
            prev: 2,
            next: 4
        },
        {
            img: 'https://i.ytimg.com/vi/zgyLCPwmmTY/maxresdefault.jpg',
            id: 4,
            prev: 3,
            next: 5
        },
        {
            img: 'https://preview.redd.it/uiqwhf6dbgw41.jpg?width=3809&format=pjpg&auto=webp&s=cb7b379a49091486670673e1afe0dee798b62160',
            id: 5,
            prev: 4,
            next: 6
        },
        {
            img: 'https://www.hitechcentury.com/wp-content/uploads/2020/11/20201122_001547-01_compress78-1024x576.jpg',
            id: 6,
            prev: 5,
            next: 1
        }

    ]

    return (
        <div>
            <div className="carousel w-11/12 mx-auto my-8 rounded-xl">
                {
                    sliderData.map(data => <BannerItems key={data.id} data={data}></BannerItems>)
                }
            </div>
        </div>
    );
};

export default Banner;