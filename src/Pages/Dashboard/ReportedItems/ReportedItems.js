import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ReportedItems = () => {

    const uri = `http://localhost:5000/reportedItems`;

    const { data: reports = [] } = useQuery({
        queryKey: ['reports'],
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
            <h1 className='text-4xl text-center text-sky-500 my-10'>Reported Items</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Product Name</th>
                            <th>Seller Email</th>
                            <th>Seller Name</th>
                            <th>report</th>
                            {/* <th>Verify</th>
                            <th>Delete</th> */}
                        </tr>
                    </thead>
                    <tbody>

                        {
                            reports.map((r, i) => <tr key={i}>
                                <th>
                                    {i + 1}
                                </th>
                                <td>
                                    {r.reportedProductName}
                                </td>
                                <td>

                                    {r.sellerEmail}
                                </td>
                                <td>

                                    {r.sellerName}
                                </td>
                                <td>

                                    {r.reportText}
                                </td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ReportedItems;