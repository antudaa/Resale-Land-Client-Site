import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Home/ProductCategory/Product';

const DisplayProducts = () => {

    const products = useLoaderData();
    console.log(products);


    return (
        <div >
            <div className='my-16 grid mx-auto gap-8 grid-cols-1 w-3/4'>
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