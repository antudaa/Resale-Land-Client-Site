import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const AllSellers = () => {

    const { user } = useContext(AuthContext);

    const uri = `http://localhost:5000/users/sellers?role=${'seller'}`;

    const { data: sellers = [] } = useQuery({
        queryKey: ['sellers'],
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
                            <th>Verify</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            sellers.map((s, i) => <tr key={i}>
                                <th>
                                    {i + 1}
                                </th>
                                <td>
                                    {s.email}
                                </td>
                                <td>

                                    {s.name}
                                </td>

                                <td> <button className='btn btn-danger'>Verify</button> </td>
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

export default AllSellers;