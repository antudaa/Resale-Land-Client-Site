import React, { useState } from 'react';

const AdvertiseItemCard = ({ product }) => {

    const { productName, img, location, originalPrice, usedTime, email } = product;

    return (
        <div style={{ width: '320px' }} className="card card-compact bg-base-100 shadow-xl">
            <figure><img style={{ width: '320px', height: '200px' }} src={img[0]} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{productName}</h2>
                <div className='flex justify-between my-1'>
                    <p>{`Email : ${email}`}</p>
                    <p>{`Location : ${location}`}</p>
                </div>
                <div className='flex justify-between my-1'>
                    <p className='font-bold'>{`Price : ${originalPrice}`}</p>
                    <p className='font-bold'>{`UsedTime : ${usedTime}`}</p>
                </div>
                <div className='flex justify-between'>
                    <div className="card-actions justify-start">
                        <button className="btn btn-warning">Report</button>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvertiseItemCard;