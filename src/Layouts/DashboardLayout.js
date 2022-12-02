import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import IsAdminHook from '../Hooks/IsAdminHook';
import IsBuyerHook from '../Hooks/IsBuyer';
import IsSellerHook from '../Hooks/IsSeller';
import Header from '../Pages/Shared/Header/Header';



const DashboardLayout = () => {

    const { user } = useContext(AuthContext);

    const [isAdmin] = IsAdminHook(user?.email);

    const [isSeller] = IsSellerHook(user?.email);

    const [isBuyer] = IsBuyerHook(user?.email);


    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="drawer-dashboard" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="drawer-dashboard" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-200 rounded-xl text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        {
                            isBuyer &&
                            <>
                                <li><Link to='/dashboard/buyerOrders'>My Orders</Link></li>
                            </>
                        }
                        {
                            isSeller &&
                            <>
                                <li><Link to='/dashboard/addProduct'>Add A Product</Link></li>
                                <li><Link to='/dashboard/sellerProducts'>My Products</Link></li>
                                <li><Link to='/dashboard/myBuyers'>My Buyers</Link></li>
                            </>
                        }
                        {
                            isAdmin &&
                            <>
                                <li><Link to='/dashboard/allSellers'>All Sellers</Link></li>
                                <li><Link to='/dashboard/allBuyers'>All Buyers</Link></li>
                                <li><Link to='/dashboard/reportedItems'>Reported Items</Link></li></>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;