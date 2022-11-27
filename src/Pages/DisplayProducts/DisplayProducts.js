import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DisplayProducts = () => {

    const product = useLoaderData();
    console.log(product.length);

    return (
        <div>
            <h1>Display Products.</h1>
        </div>
    );
};

export default DisplayProducts;