import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import DynamicRouteName from '../../../Hooks/DynamicRouteName';

const MyBuyers = () => {

    DynamicRouteName('Your-Buyers');

    const { user } = useContext(AuthContext);

    const uri = `https://resale-land-server.vercel.app/myBuyers/${user?.email}`;

    const { data: orders = [] } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await fetch(uri,
            );
            const data = await res.json();
            return data;
        }
    });





    return (
        <div>
            <h1 className='text-4xl text-center text-sky-500 my-10'>My Buyers</h1>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Contact No</th>
                            <th>Meeting Location</th>
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

                                    {o.buyerEmail}
                                </td>

                                <td>
                                    {o.userContactNo}
                                </td>
                                <td>
                                    {o.meetingLocation}
                                </td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyBuyers;