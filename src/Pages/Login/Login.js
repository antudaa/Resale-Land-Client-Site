import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import googleIcon from "../../../src/Images/google.png";
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../Context/AuthProvider';
import DynamicRouteName from '../../Hooks/DynamicRouteName';



const Login = () => {

    DynamicRouteName('Login')

    const { register, formState: { errors }, handleSubmit } = useForm({});
    const [errorMessage, setErrorMessage] = useState('');

    const { Login, signInWithGoogle } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = data => {
        setErrorMessage('');
        Login(data.email, data.password)
            .then(result => {
                const user = result.user;
                if (user?.uid &&
                    toast('Login Successful...'));

                navigate(from, { replace: true });
            })
            .catch(error => {
                setErrorMessage(error.message);
                toast(`Something went wrong ...Please check your email and password.`)
            })
    };


    const googleProvider = new GoogleAuthProvider();
    // Handle Google Sign In
    const handleGoogleSignIn = data => {
        signInWithGoogle(googleProvider)
        setErrorMessage('')
            .then((result) => {
                const user = result.user;

                fetch(`http://localhost:5000/users?email=${user?.email}&name=${user?.displayName}`, {
                    method: 'PUT',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            toast(`Login Successful...`);
                            navigate('/')
                        }
                    })
                    .catch(err => console.log(err.message));

                toast('Login Successful ...');
                navigate(from, { replace: true });
            })
            .catch((error) => {
                setErrorMessage(error.message);
                toast(error.message);
            })
    }

    return (
        <div className='my-20'>
            <div className='bg-white w-4/5 md:w-3/5 lg:w-1/3 h-2/3 mx-auto drop-shadow-xl rounded-xl px-10'>
                <div className='mb-10 pt-14'>
                    <h1 className='text-slate-500 text-4xl font-semibold text-center'>Login</h1>
                </div>
                <form className='gird grid-cols-1 mx-auto' onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control my-4">
                        <label className="label">
                            <span className="label-text text-black">Email</span>
                        </label>
                        <input type="email"
                            {...register("email",
                                {
                                    required: "Email Address is required", pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: "Entered value does not match email format"
                                    },
                                })}
                            placeholder="Email" className="input input-bordered  w-full bg-white text-black" />
                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control my-4">
                        <label className="label">
                            <span className="label-text text-black">Password</span>
                        </label>
                        <input type="password"
                            {...register("password",
                                { required: "Password is required" })}
                            placeholder="Password" className="input input-bordered w-full bg-white text-black" />
                        {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                        <p className='text-red-600'>{errorMessage}</p>
                    </div>

                    <div className='mx-auto'>
                        <button className='btn border-none bg-slate-700 text-lg hover:bg-green-400 hover:text-black text-white w-full my-4' type="submit">Login</button>
                    </div>
                    <p className=' text-center'>New to Doctor's Portal ? <Link to='/signup' className='text-cyan-500'>Create an Account</Link> </p>
                    <div className="divider my-4 text-black">OR</div>
                    <button onClick={handleGoogleSignIn} className='btn btn-outline hover:bg-slate-700 text-black w-full mt-6 mb-16' type="submit"><img className='w-6 mr-4' src={googleIcon} alt="" /> Google Login</button>
                </form>
            </div>

        </div>
    );
};

export default Login;