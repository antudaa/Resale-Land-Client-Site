import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';
import DynamicRouteName from '../../../Hooks/DynamicRouteName';

const AllSellers = () => {

    DynamicRouteName('All-Sellers');

    const { user } = useContext(AuthContext);

    const uri = `http://localhost:5000/users/sellers`;

    const { data: sellers = [] } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch(uri, 
            //     {
            //     headers: {
            //         authorization: `bearer ${localStorage.getItem('accessToken')}`
            //     }
            // }
            );
            const data = await res.json();
            return data;
        }
    });

    const handleDelete = (id) => {
        console.log(id);
        const proceed = window.confirm("Are you sure? You want to delete this review!");
        if (proceed) {
            fetch(`http://localhost:5000/users/sellers/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast("User Deleted Successfully")
                    }
                })
                .catch((error) => console.log(error.message));
        }
    }


    const handleVerify = (id) => {

        fetch(`http://localhost:5000/users/update/${id}`, {
                method: 'PUT'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
                .catch((error) => console.log(error.message));
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
                            <th>Verify Seller</th>
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

                                <td> <button onClick={() => handleVerify(s._id)} className='btn btn-danger'>Verify</button> </td>
                                <th>
                                    <button onClick={() => handleDelete(s._id)} className='btn btn-warning'>Delete</button>
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