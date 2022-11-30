import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const AllUsers = () => {
    
    const { user } = useContext(AuthContext);

    console.log(user);
    const uri = `http://localhost:5000/users/users?role=${'user'}`;

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(uri);
            const data = await res.json();
            return data;
        }
    });
    users.map(u => {
        console.log(u.email, u.name);
    })

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
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map(u => <tr>
                                {/* <th>
                                    {i + 1}
                                </th> */}
                                <td>
                                    {u.email}
                                </td>
                                <td>

                                    {u.name}
                                </td>
                                <td>Purple</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllUsers;