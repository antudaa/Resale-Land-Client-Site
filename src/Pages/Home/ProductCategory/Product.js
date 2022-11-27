import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import ShowSliderImage from './ShowSliderImage';
import man from '../../../Images/man.png';



const Product = ({ product }) => {

    const { user } = useContext(AuthContext);

    const { _id, productName, img, location, price, originalPrice, usedTime, postDate, sellerInfo } = product;


    return (
        <div>

            <div className="card bg-base-100 shadow-xl ">
                <figure className=''>
                    <div>
                        <div className="carousel">
                            {
                                img.map((im, i) =>
                                    <ShowSliderImage
                                        key={i}
                                        im={im}
                                        i={i}
                                        cat={_id}
                                    ></ShowSliderImage>)
                            }
                        </div>
                    </div>
                </figure>
                <div className="card-body p-6">
                    <div className='flex align-center'>
                        <p className='card-title text-start'>{`${productName}`}</p>
                        <p className='text-sky-600 text-end'>{`Publish Date : ${postDate}`}</p>
                    </div>
                    <div className='flex justify-between my-4'>
                        <div className=''>
                            <p className=' text-lg block'>{`Location`}</p>
                            <p className=' text-lg  font-bold block'>{`${location}`}</p>
                        </div>
                        <div>
                            <p className=' text-lg block '>{`Used Time`}</p>
                            <p className=' text-lg block font-bold'>{`${usedTime}`}</p>
                        </div>
                    </div>
                    <h1 className='text-xl text-start mt-2 font-bold'>Price</h1>
                    <div className='flex align-center'>
                        <div className='mr-16'>
                            <p className='text-start text-slate-600'>Asking Price</p>
                            <p className='text-start font-bold text-lg'>{`${price} Tk`}</p>
                        </div>
                        <div className=''>
                            <p className='text-end text-slate-600'>New Market Price</p>
                            <p className='text-end font-bold text-lg'>{`${originalPrice} Tk`}</p>
                        </div>
                    </div>
                    <div className='my-4'>
                        <h1 className='text-sky-600 font-bold text-lg'>{`Seller Info =>`}</h1>
                        <div className='my-4 flex justify-between'>
                            <div>
                                <div className="avatar indicator">
                                    {
                                        sellerInfo?.verified ?
                                            <span className="indicator-item badge badge-primary">Verified</span> :
                                            <></>
                                    }
                                    <div className="w-16 h-16 rounded-full">
                                        {
                                            user?.photoURL ?
                                                <div className="avatar online lg:mr-10">
                                                    <div className="w-16 rounded-full">
                                                        <img src={`${user?.photoURL}`} alt="" title={`${user?.displayName}`} />
                                                    </div>
                                                </div> :
                                                <>
                                                    <div className="avatar online lg:mr-10">
                                                        <div className="w-16 rounded-full">
                                                            <img src={man} alt="" />
                                                        </div>
                                                    </div>
                                                </>
                                        }
                                    </div>
                                </div>
                                <p className='font-bold text-sky-600 text-lg'>{`${sellerInfo.name}`}</p>
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Watch</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Product;