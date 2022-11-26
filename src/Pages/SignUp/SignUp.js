import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import googleIcon from '../../../src/Images/google.png';
import { GoogleAuthProvider } from 'firebase/auth';


const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm({});

    const { SignUp, updateUser, signInWithGoogle } = useContext(AuthContext);

    const [signUpError, setSignUpError] = useState('');

    const navigate = useNavigate();

    const [value, setValue] = useState('user')

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSignUp = data => {
        setSignUpError('');
        SignUp(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast(`Sign Up Successful...`);
                const userInfo = {
                    displayName: data.name
                }
                const userIn = {
                    name: data.name,
                    email: data.email,
                    role: value,
                };
                console.log(userIn);

                updateUser(userInfo)
                    .then(() => { })
                    .catch(error => {
                        console.log(error.message);

                    })
            })
            .catch(error => {
                console.log(error.message)
                setSignUpError(error.message);
            });
    };


    const googleProvider = new GoogleAuthProvider();
    // Handle Google Sign In
    const handleGoogleSignIn = data => {
        signInWithGoogle(googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                toast('Login Successful ...');
            })
            .catch((error) => {
                console.error(error.message);
                toast(error.message);
            })
    }



    const users = (name, email) => {
        const user = { name, email };
        fetch(`http://localhost:5000/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                getUserToken(email);
            });

    };


    const getUserToken = email => {
        fetch(`http://localhost:5000/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem('accessToken', data.accessToken);
                    navigate('/')
                }
            })
    }

    return (
        <div className='my-20'>
            <div className='bg-white w-4/5 md:w-3/5 lg:w-1/3 h-2/3 mx-auto drop-shadow-xl rounded-xl px-10'>
                <div className='mb-10 pt-14'>
                    <h1 className='text-slate-500 text-4xl font-semibold text-center'>Sign Up</h1>
                </div>
                <form className='gird grid-cols-1 mx-auto' onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control my-4">
                        <label className="label">
                            <span className="label-text text-black">Name</span>
                        </label>
                        <input type="name"
                            {...register("name",
                                {
                                    required: "Name is required. Please Enter Your Name."
                                })}
                            placeholder="Name" className="input input-bordered  w-full bg-white text-black" />
                        {errors.name && <p className='text-red-600' role="alert">{errors.name?.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Role</span>
                        </label>
                        <div className="input-group">
                            <select onChange={handleChange} className="select w-full select-bordered">
                                <option value='user' defaultChecked>User</option>
                                <option value='seller' >Seller</option>
                            </select>
                        </div>
                    </div>
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
                                {
                                    required: "Password is required",
                                    minLength: { value: 8, message: 'Password must be 8 character.' }, pattern: {
                                        value: /(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%&? "])/,
                                        message: "Password must have one small & capital letter one digit and one special character."
                                    }
                                })}
                            placeholder="Password" className="input input-bordered w-full bg-white text-black" />
                        {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                    </div>
                    <div>
                        <p className='text-red-600'>{signUpError}</p>
                    </div>

                    <div className='mx-auto'>
                        <button className='btn border-none bg-slate-700 text-lg hover:bg-green-400 hover:text-black text-white w-full my-4' type="submit">Sign Up</button>
                    </div>
                    <p className=' text-center'>Already have an Account ? <Link to='/login' className='text-cyan-500'>Please Login</Link> </p>
                    <div className="divider my-4 text-black">OR</div>
                    <button onClick={handleGoogleSignIn} className='btn btn-outline text-lg hover:bg-green-400 text-black w-full mt-6 mb-16' type="submit">Continue With <img className='w-6 ml-4' src={googleIcon} alt="" /></button>
                </form>
            </div>

        </div>
    );
};

export default SignUp;