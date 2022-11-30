import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Dashboard = () => {

    const { user } = useContext(AuthContext);
    console.log(user.email);

    // const [users, setUsers] = useState([]);

    // const [curr, setCurr] = useState({});

    // useEffect(() => {
    //     fetch(`http://localhost:5000/users`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setUsers(data);
    //             console.log(data)
    //         })
    //         .catch(error => console.log(error.message));
    // }, []);

    // users.forEach(u => {
    //     if (u.email === user.email) {
    //         setCurr(u);
    //     }
    //     return setCurr;
    // });

    // console.log(curr);


    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="drawer-dashboard" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="drawer-dashboard" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard/buyerOrders'>My Orders</Link></li>
                        <li><Link to='/dashboard/addProduct'>Add A Product</Link></li>
                        <li><Link to='/dashboard/sellerProducts'>My Products</Link></li>
                        <li><Link to='/dashboard/myBuyers'>My Buyers</Link></li>
                        <li><Link to='/dashboard/allSellers'>All Sellers</Link></li>
                        <li><Link to='/dashboard/allBuyers'>All Buyers</Link></li>
                        <li><Link to='/dashboard/reportedItems'>Reported Items</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;