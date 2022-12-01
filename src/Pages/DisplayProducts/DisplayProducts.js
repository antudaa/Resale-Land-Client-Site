import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';
import AppointmentModal from '../DisplayProducts/AppointmentModal';
import ReportModal from './ReportModal/ReportModal';


const DisplayProducts = () => {

    const products = useLoaderData();

    const [selectBook, setSelectBook] = useState('');

    const [selectReport, setSelectReport] = useState('');


    return (
        <div >
            <div className='my-16 grid mx-auto gap-8 grid-cols-1 lg:grid-cols-3 w-11/12 lg:w-3/4'>
                {
                    products.map(product =>
                        <Product

                            key={product._id}
                            product={product}
                            id={product._id}
                            setSelectBook={setSelectBook}
                            setSelectReport={setSelectReport}
                        ></Product>


                    )

                }
            </div>
            <AppointmentModal
                key={selectBook._id}
                selectBook={selectBook}
            ></AppointmentModal>

            <ReportModal
                key={selectReport._id}
                selectReport={selectReport}
            ></ReportModal>


        </div >
    );
};

export default DisplayProducts;