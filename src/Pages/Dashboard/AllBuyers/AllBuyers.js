import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import DynamicRouteName from '../../../Hooks/DynamicRouteName';

const AllBuyers = () => {

    DynamicRouteName('All-Buyers');

    const { user } = useContext(AuthContext);

    const uri = `https://resale-land-server.vercel.app/users/buyers`;

    const { data: buyers = [] } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch(uri, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });

    const handleVerify = (id) => {
        console.log(id);
    }


    return (
        <div>
            <h1 className='text-4xl text-center text-sky-500 my-10'>All Sellers</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Verify Buyer</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            buyers.map((b, i) => <tr key={i}>
                                <th>
                                    {i + 1}
                                </th>
                                <td>
                                    {b.email}
                                </td>
                                <td>

                                    {b.name}
                                </td>
                                <td> <button onClick={() => handleVerify(b._id)} className='btn btn-danger'>Verify</button> </td>
                                <th>
                                    <button className='btn btn-warning'>Delete</button>
                                </th>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllBuyers;