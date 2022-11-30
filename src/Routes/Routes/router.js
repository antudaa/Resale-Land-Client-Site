import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../../Layouts/DashboardLayout';
import Main from '../../Layouts/Main';
import Blog from '../../Pages/Blog/Blog';
import AddProducts from '../../Pages/Dashboard/AddProduct/AddProducts';
import AllBuyers from '../../Pages/Dashboard/AllBuyers/AllBuyers';
import AllSellers from '../../Pages/Dashboard/AllSellers/AllSellers';
import AllUsers from '../../Pages/Dashboard/AllUsers/AllUsers';
import BuyerOrders from '../../Pages/Dashboard/BuyerOrders/BuyerOrders';
import Dashboard from '../../Pages/Dashboard/Dashboard/Dashboard';
import MyBuyers from '../../Pages/Dashboard/MyBuyers/MyBuyers';
import ReportedItems from '../../Pages/Dashboard/ReportedItems/ReportedItems';
import SellerProducts from '../../Pages/Dashboard/SellerProducts/SellerProducts';
import DisplayProducts from '../../Pages/DisplayProducts/DisplayProducts';
import Error404 from '../../Pages/Error404Page/Error404';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import SignUp from '../../Pages/SignUp/SignUp';
import PrivateRoute from '../PrivateRoutes/PrivateRoute';
import PrivateRouter from '../PrivateRoutes/PrivateRoute';



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/products/:id',
                element: <PrivateRouter><DisplayProducts></DisplayProducts></PrivateRouter>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/products/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard/buyerOrders',
                element: <BuyerOrders></BuyerOrders>
            },
            {
                path: '/dashboard/addProduct',
                element: <AddProducts></AddProducts>
            },
            {
                path: '/dashboard/sellerProducts',
                element: <SellerProducts></SellerProducts>
            },
            {
                path: '/dashboard/myBuyers',
                element: <MyBuyers></MyBuyers>
            },
            {
                path: '/dashboard/allSellers',
                element: <AllSellers></AllSellers>
            },
            ,
            {
                path : '/dashboard/allUsers',
                element : <AllUsers></AllUsers>
            },
            {
                path: '/dashboard/allBuyers',
                element: <AllBuyers></AllBuyers>
            },
            {
                path: '/dashboard/reportedItems',
                element: <ReportedItems></ReportedItems>
            }
        ]
    },
    {
        path: '*',
        element: <Error404></Error404>
    }
])

export default router;