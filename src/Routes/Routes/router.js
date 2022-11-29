import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../../Layouts/DashboardLayout';
import Main from '../../Layouts/Main';
import Blog from '../../Pages/Blog/Blog';
import Dashboard from '../../Pages/Dashboard/Dashboard';
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
        children: [
            {
                path: '/dashboard',
                element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
                children: [
                    {
                        path: '/dashboard',
                        element: <Dashboard></Dashboard>
                    }
                ]
            },
        ]
    },
    {
        path: '*',
        element: <Error404></Error404>
    }
])

export default router;