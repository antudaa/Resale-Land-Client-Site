import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import logo from '../../../Images/logo1.png';


const Header = ({ handleThemeSwitch }) => {

    const { user, logOut } = useContext(AuthContext);

    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/dashboard'>DashBoard</Link></li>
                        {
                            user?.uid ?
                                <>
                                    <li><Link onClick={logOut}>Log Out</Link></li>

                                </> :
                                <>
                                    <li><Link to='/login'>Login</Link></li>
                                    <li><Link to='/signup'>Sign Up</Link></li>
                                </>
                        }
                    </ul>
                </div>
                <img className='w-6 lg:w-8 lg:ml-8' src={logo} alt="" />
                <Link className="text-lg ml-1 md:ml-4 lg:text-3xl font-semibold lg:ml-6 ">Resale Land</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/dashboard'>DashBoard</Link></li>
                    {
                        user?.uid ?
                            <>
                                <li><Link onClick={logOut}>Log Out</Link></li>

                            </> :
                            <>
                                <li><Link to='/login'>Login</Link></li>
                                <li><Link to='/signup'>Sign Up</Link></li>
                            </>
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ?
                        <div className="avatar online lg:mr-10">
                            <div className="w-12 rounded-full">
                                <img src={`${user?.photoURL}`} alt="" title={`${user?.displayName}`} />
                            </div>
                        </div> :
                        <>
                        </>
                }
            </div>
        </div>
    );
};

export default Header;