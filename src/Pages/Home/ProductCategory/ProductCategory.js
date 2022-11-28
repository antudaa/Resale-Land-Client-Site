import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import car from '../../../Images/car.png';
import mobile from '../../../Images/iphone.png';
import laptop from '../../../Images/laptop.png';


const ProductCategory = () => {

    const [categoryId, setCategoryId] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setCategoryId(data))
            .catch(error => console.log(error.message));
    }, []);

    console.log(categoryId);


    return (
        <div className='lg:p-20 px-10'>
            <div className="text-center text-2xl lg:text-5xl font-bold text-slate-800 my-8">
                <h1>Category</h1>
            </div>
            <div className='flex justify-center'>
                <div className='w-1/5'>

                    <div className="carousel">
                        <div id="item1" className="carousel-item w-full">
                            <img src={car} alt='' className="w-full" />
                        </div>
                        <div id="item2" className="carousel-item w-full">
                            <img src={mobile} alt='' className="w-full" />
                        </div>
                        <div id="item3" className="carousel-item w-full">
                            <img src={laptop} alt='' className="w-full" />
                        </div>
                    </div>
                    <div className="flex justify-center py-2 gap-2 my-6">
                        {
                            categoryId.map(category => (
                                <Link to={`/products/${category.category}`} className="btn btn-xs">{category.category}</Link>

                            ))
                        }

                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductCategory;