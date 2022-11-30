import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const AddProducts = () => {

    const { user } = useContext(AuthContext);

    const [value, setValue] = useState('user');

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const productName = form.productName.value;
        const img1 = form.image1.value;
        const img2 = form.image2.value;
        const img3 = form.image3.value;
        const location = form.location.value;
        const askingPrice = form.askingPrice.value;
        const originalPrice = form.originalPrice.value;
        const usedTime = form.usedTime.value;
        const postDate = form.postDate.value;
        const email = form.email.value;
        const sellerName = form.sellerName.value;

        const productInfo = {
            "category": value,
            "productName": productName,
            "img": [
                img1,
                img2,
                img3,
            ],
            "location": location,
            "price": askingPrice,
            "originalPrice": originalPrice,
            "usedTime": usedTime,
            "postDate": postDate,
            "email": email,
            "sellerInfo": {
                "name": sellerName,
            }
        }

        console.log(productInfo);

        fetch(`http://localhost:5000/products`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(productInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    form.reset();
                    toast("Your product added Successfully")
                }
            })
            .catch(err => console.log(err.message));

    }
    return (
        <div>
            <h1 className='text-4xl text-center text-sky-500 my-10'>Add Products</h1>
            <div className='my-20'>

                <div className="">
                    <div className="">
                        <div className="card shadow-2xl w-full bg-base-100">
                            <form onSubmit={handleSubmit} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-black">Category</span>
                                    </label>
                                    <div className="input-group">
                                        <select onChange={handleChange} className="select w-full select-bordered">
                                            <option value='car' defaultChecked>car</option>
                                            <option value='mobile' >mobile</option>
                                            <option value='laptop' >laptop</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Product Name</span>
                                    </label>
                                    <input name='productName' type="text" placeholder="Product Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image Url</span>
                                    </label>
                                    <input name='image1' type="text" placeholder="Image Url" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image Url</span>
                                    </label>
                                    <input name='image2' type="text" placeholder="Image Url" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image Url</span>
                                    </label>
                                    <input name='image3' type="text" placeholder="Image Url" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Location</span>
                                    </label>
                                    <input name='location' type="text" placeholder="Location" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Asking Price</span>
                                    </label>
                                    <input name='askingPrice' type="number" placeholder="Asking Price" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Original Price</span>
                                    </label>
                                    <input name='originalPrice' type="number" placeholder="New Market Price" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Used Time</span>
                                    </label>
                                    <input name='usedTime' type="text" placeholder="Used Time" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Post Date</span>
                                    </label>
                                    <input name='postDate' type="date" placeholder="Price" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">email</span>
                                    </label>
                                    <input name='email' type="email" value={user?.email} placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Name</span>
                                    </label>
                                    <input name='sellerName' type="text" value={user?.name} placeholder="Your Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary">Add Service</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AddProducts;