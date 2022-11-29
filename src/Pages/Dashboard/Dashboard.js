import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="drawer-dashboard" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="drawer-dashboard" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link>My Orders</Link></li>
                        <li><Link>Add A Product</Link></li>
                        <li><Link>My Products</Link></li>
                        <li><Link>My Buyers</Link></li>
                        <li><Link>All Sellers</Link></li>
                        <li><Link>All Buyers</Link></li>
                        <li><Link>Reported Items</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;