import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Wave from 'react-wavify'


const ProductCategory = () => {


    const [categoryId, setCategoryId] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setCategoryId(data))
            .catch(error => console.log(error.message));
    }, []);


    return (
        <div className='lg:p-20 px-10'>
            <h1 className='text-start text-2xl lg:text-5xl font-bold my-6 lg:my-16'>Select Product Category</h1>

            <div className=''>
                <div className='flex justify-start'>
                    {
                        categoryId.map((category, i) =>
                            <Link key={i} to={`/products/${category.category}`} className="btn mr-4">{category.category}</Link>)
                    }
                </div>
                <div className='flex justify-end'>
                    <input type="text" placeholder="Search your product" className="input my-4 input-bordered input-info w-full max-w-xs" />
                </div>

            </div>


            <Wave mask="url(#mask)" fill="#1277b0" >
                <defs>
                    <linearGradient id="gradient" gradientTransform="rotate(90)">
                        <stop offset="0" stopColor="white" />
                        <stop offset="0.5" stopColor="black" />
                    </linearGradient>
                    
                    <mask id="mask">
                        <rect x="0" y="0" width="2000" height="200" fill="url(#gradient)" />
                    </mask>
                </defs>
            </Wave>

        </div>
    );
};

export default ProductCategory;