import React from 'react';
import ImageGallery from 'react-image-gallery';


const images = [
    {
        original: 'https://www.wrapstyle.com/content/img_cache/800x450/1595335225-Range-Rover-SVR-Grey-Matt-wrap-4-.jpg',
        thumbnail: 'https://www.wrapstyle.com/content/img_cache/800x450/1595335225-Range-Rover-SVR-Grey-Matt-wrap-4-.jpg',
    },
    {
        original: 'https://www.wrapstyle.com/content/img_cache/1920x/1596527576-1543-Range-Rover-SVR-Grey-Matt-wrap-6-.jpeg',
        thumbnail: 'https://www.wrapstyle.com/content/img_cache/1920x/1596527576-1543-Range-Rover-SVR-Grey-Matt-wrap-6-.jpeg',
    },
    {
        original: 'https://imgd.aeplcdn.com/0x0/n/cw/ec/28085/landrover-range-rover-velar-interior6.jpeg',
        thumbnail: 'https://imgd.aeplcdn.com/0x0/n/cw/ec/28085/landrover-range-rover-velar-interior6.jpeg',
    },
    {
        original: 'https://www.team-bhp.com/forum/attachments/international-automotive-scene/199740d1254281613-hyundais-most-expensive-expansive-car-new-2010-equus-revealed-160724.jpg',
        thumbnail: 'https://www.team-bhp.com/forum/attachments/international-automotive-scene/199740d1254281613-hyundais-most-expensive-expansive-car-new-2010-equus-revealed-160724.jpg',
    },
    {
        original: 'https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/0_am3lpwhz/def_height/2700/def_width/2700/version/100012/type/1',
        thumbnail: 'https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/0_am3lpwhz/def_height/2700/def_width/2700/version/100012/type/1',
    },
    {
        original: 'https://i.pinimg.com/originals/ac/94/0a/ac940ab0e95c0f96985567308f3cb3d3.jpg',
        thumbnail: 'https://i.pinimg.com/originals/ac/94/0a/ac940ab0e95c0f96985567308f3cb3d3.jpg',
    },
    {
        original: 'https://www.luxurycarrental.ae/wp-content/uploads/2021/06/mercedes-e300-luxury-rent-a-car-1.jpg',
        thumbnail: 'https://www.luxurycarrental.ae/wp-content/uploads/2021/06/mercedes-e300-luxury-rent-a-car-1.jpg',
    },
    {
        original: 'https://i.ytimg.com/vi/zgyLCPwmmTY/maxresdefault.jpg',
        thumbnail: 'https://i.ytimg.com/vi/zgyLCPwmmTY/maxresdefault.jpg',
    },

    {
        original: 'https://laptopworld.vn/media/product/9857_dell_xps_17_9710_2.jpg',
        thumbnail: 'https://laptopworld.vn/media/product/9857_dell_xps_17_9710_2.jpg',
    },
    {
        original: 'https://www.megabites.com.ph/wp-content/uploads/2021/04/DSCF0995.jpg',
        thumbnail: 'https://www.megabites.com.ph/wp-content/uploads/2021/04/DSCF0995.jpg',
    },
    {
        original: 'https://goprice.com.bd/wp-content/uploads/2021/07/Asus-ZenBook-14-UX425EA-Core-i5-price.jpg',
        thumbnail: 'https://goprice.com.bd/wp-content/uploads/2021/07/Asus-ZenBook-14-UX425EA-Core-i5-price.jpg',
    }
];


class MyGallery extends React.Component {
    render() {
        return <ImageGallery  items={images} />
    }
}

export default MyGallery;
