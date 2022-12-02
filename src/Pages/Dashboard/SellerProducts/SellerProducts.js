import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';
import DynamicRouteName from '../../../Hooks/DynamicRouteName';

const SellerProducts = () => {

    DynamicRouteName("Your-Products");

    const { user } = useContext(AuthContext);

    const uri = `https://resale-land-server.vercel.app/sellerProducts/${user?.email}`;

    const { data: myProducts = [] } = useQuery({
        queryKey: ['myProducts'],
        queryFn: async () => {
            const res = await fetch(uri,

            );
            const data = await res.json();
            return data;
        }
    });


    const handleAdvertise = (product) => {
        console.log(product);

        const productInfo = {
            "category": product.category,
            "categoryId": product.categoryId,
            "productName": product.productName,
            "img": [
                product.img[0],
                product.img[2],
                product.img[3],
            ],
            "location": product.location,
            "price": product.askingPrice,
            "originalPrice": product.originalPrice,
            "usedTime": product.usedTime,
            "postDate": product.postDate,
            "email": product.email,
            "sellerInfo": {
                "name": product.sellerInfo.name,
            }
        }

        console.log(productInfo);

        fetch(`https://resale-land-server.vercel.app/advertiseProduct`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(productInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Your product is listed for advertise successfully.");
                }
            })
            .catch(err => console.log(err.message));

    }

    return (
        <div>
            <h1 className='text-4xl text-center text-sky-500 my-10'>Seller Products</h1>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Status</th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Advertise</th>
                            <th>Delete product</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myProducts.map((o, i) => <tr key={o._id}>
                                <th>
                                    {i + 1}
                                </th>
                                <td>
                                    Available
                                </td>
                                <td>
                                    <img className='w-24 h-16 rounded' src={o.img[0]} alt="" />
                                </td>
                                <td>

                                    {o.productName}
                                </td>

                                <td>
                                    {o.price}
                                </td>
                                <td>
                                    <button onClick={() => handleAdvertise(o)} className='btn btn-danger'>Advertise</button>
                                </td>
                                <td>
                                    <button className='btn btn-warning'>DELETE</button>
                                </td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default SellerProducts;