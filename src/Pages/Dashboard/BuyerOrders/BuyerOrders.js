import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import DynamicRouteName from '../../../Hooks/DynamicRouteName';

const BuyerOrders = () => {

    DynamicRouteName('Your-Orders');

    const { user } = useContext(AuthContext);

    const uri = `http://localhost:5000/myOrders/${user?.email}`;

    const { data: orders = [] } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await fetch(uri,
                // {
                //     headers: {
                //         authorization: `bearer ${localStorage.getItem('accessToken')}`
                //     }
                // }
            );
            const data = await res.json();
            return data;
        }
    });


    return (
        <div>
            <h1 className='text-4xl text-center text-sky-500 my-10'>Your Orders</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Pay Button</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.map((o, i) => <tr key={i}>
                                <th>
                                    {i + 1}
                                </th>
                                <td>
                                    {o.sellerName}
                                </td>
                                <td>

                                    {o.productName}
                                </td>

                                <td>
                                    {o.offerPrice}
                                </td>
                                <td>
                                    <button className='btn btn-danger'>Pay</button>
                                </td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default BuyerOrders;