import React from 'react';
import ImageGallery from '../ImageGallery/ImageGallery';
import Banner from '.././Banner/Banner';
import ProductCategory from '../ProductCategory/ProductCategory';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProductCategory></ProductCategory>
            <ImageGallery></ImageGallery>
        </div>
    );
};

export default Home;