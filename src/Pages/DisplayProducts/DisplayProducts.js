import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const DisplayProducts = () => {

    const products = useLoaderData();


    return (
        <div >
            <div className='my-16 grid mx-auto gap-8 grid-cols-1 lg:grid-cols-3 w-11/12 lg:w-3/4'>
                {
                    products.map(product =>
                        <Product
                            key={product._id}
                            product={product}
                        ></Product>

                    )
                }
            </div>
        </div>
    );
};

export default DisplayProducts;