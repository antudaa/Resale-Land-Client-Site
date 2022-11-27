import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import car from '../../../Images/car.png';
import mobile from '../../../Images/iphone.png';
import laptop from '../../../Images/laptop.png';


const ProductCategory = () => {

    const [categoryId, setCategoryId] = useState();

    const handleChange = (i) => {
        console.log(i);
        setCategoryId(i);
    }

    const { data: categoryCollection = [] } = useQuery({
        queryKey: ['categoryCollection', categoryId],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products?categoryId=${categoryId}`);
            const categoryId = await res.json();
            return categoryId;
        }
    })

    console.log(categoryCollection);


    return (
        <div className='lg:p-20 px-10'>
            <div className="text-center lg:text-start text-2xl lg:text-5xl font-bold text-slate-800 my-8">
                <h1>Top Products</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 '>
                <div className=''>

                    <div className="carousel w-2/5">
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
                    <div className="flex justify-center w-2/5 py-2 gap-2 my-6">
                        <a href="#item1" onClick={() => handleChange(1)} className="btn btn-xs">Car</a>
                        <a href="#item2" onClick={() => handleChange(2)} className="btn btn-xs">Mobile</a>
                        <a href="#item3" onClick={() => handleChange(3)} className="btn btn-xs">Laptop</a>

                    </div>
                </div>
                {/* <div className=''>
                    <div className="text-start text-2xl lg:text-3xl font-bold text-slate-800">
                        <h1>Select Category </h1>
                    </div>
                    <div className="form-control my-6">
                        <div className="input-group">
                            <select onChange={handleChange} className="select select-bordered">
                                {
                                    categoryCollection.map(category => (
                                        <option>{category.category}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                </div> */}
            </div>

        </div>
    );
};

export default ProductCategory;