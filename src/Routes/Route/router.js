import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layouts/Main';
import Blog from '../../Pages/Blog/Blog';
import DisplayProducts from '../../Pages/DisplayProducts/DisplayProducts';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import SignUp from '../../Pages/SignUp/SignUp';


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
                element: <DisplayProducts></DisplayProducts>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/products/${params.id}`)
            }
        ]
    }
])

export default router;