import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertiseItemCard from './AdvertiseItemCard';

const AdvertisedProducts = () => {

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


    return (
        <div>
            <h1 className='text-2xl text-slate-800 lg:text-5xl text-center my-16 font-bold'>ADVERTISED ITEMS</h1>

            <div className='flex flex-wrap justify-center gap-8 mx-auto px-8'>
                {
                    products.map((p, i) => <AdvertiseItemCard
                        key={i}
                        product={p}
                    ></AdvertiseItemCard>)
                }
            </div>
        </div>
    );
};

export default AdvertisedProducts;