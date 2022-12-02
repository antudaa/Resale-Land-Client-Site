import React from 'react';
import ImageGallery from '../ImageGallery/ImageGallery';
import Banner from '.././Banner/Banner';
import ProductCategory from '../ProductCategory/ProductCategory';
import DynamicRouteName from '../../../Hooks/DynamicRouteName';
import AdvertisedProducts from '../AdvertiseProducts/AdvertisedProducts';
import { useQuery } from '@tanstack/react-query';


const Home = () => {

    const uri = `https://resale-land-server.vercel.app/advertiseProduct`;

    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(uri,

            );
            const data = await res.json();
            return data;
        }
    });

    DynamicRouteName('Home');

    return (
        <div>
            <Banner></Banner>
            <ProductCategory></ProductCategory>
            {
                products.length >= 1 ?
                <AdvertisedProducts></AdvertisedProducts>:
                <></>
            }
            <ImageGallery></ImageGallery>
        </div>
    );
};

export default Home;