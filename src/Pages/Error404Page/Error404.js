import React from 'react';
import DynamicRouteName from '../../Hooks/DynamicRouteName';
import error from '../../Images/404-error.png';


const Error404 = () => {

    DynamicRouteName('Error');

    return (
        <div>
            <div className='my-16 text-center'>
                <img className='mx-auto' style={{ height: '200px', width: '200px' }} src={error} alt="Images Not Fond..." />
                <h1 className='text-3xl font-semibold'>Something is wrong...</h1>
            </div>
        </div>
    );
};

export default Error404;