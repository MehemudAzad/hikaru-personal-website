import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useTitle from '../hooks/useTitle';

const Register = () => {
    useTitle('Register')
    const {password, setPassword,email, setEmail,createUser, updateUserProfile, verifyEmail, googleSignIn, darkToggle} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const [error, setError] = useState('');
    const [errorPass, setErrorPass] = useState('');
    const [errorFirebase, setErrorFirebase] = useState('');
    const [errorPassConfirm, setErrorPassConfirm] = useState('');


    const navigate = useNavigate();
    const location = useLocation();
    // .state?.from?
    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = ()=>{
        googleSignIn(googleProvider)
        .then(result=>{
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true});
            toast.success('Successfully signed in!!!');
        })
        .catch(error => console.error(error))

    }

    const handlePassword = (event) =>{
        if(!/(?=.{8,})/.test(event.target.value)){
            setErrorPass("password must be 8 characters");
            return;
        }
        if(! /(?=.*[a-zA-Z])/.test(event.target.value)){
            setErrorPass("password must have a Uppercase letter")
            return;
        }
        if(! /(?=.*[!#$%&?@*^ "])/.test(event.target.value)){
            setErrorPass("password must have atleast one special character")
            return;
        }
        setErrorPass("");
        setPassword(event.target.value);
    }

    const handleSubmit = event=>{
        event.preventDefault(); 
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        const handleConfirmPassword =(event) =>{
            const confirmPassword = event.target.value;
            if(password !== confirmPassword){
                setErrorPassConfirm('password did not match!')
                return;
            }
            setErrorPassConfirm("");
        }

        createUser(email, password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            setError('');
            form.reset();
            
            navigate(from, {replace: true});
            handleConfirmPassword();
            toast.success('Your account has been created successfully!');
            setErrorFirebase('')
        })
        .catch(error => {
            console.error(error);
            setErrorFirebase(error.message);
        })
       
    }

    return (
        <div>
             <div className="hero min-h-screen bg-base-200">
            <div className="hero-content grid grid-cols-2 gap-[100px] lg:flex-row-reverse">
                <div className="text-center lg:text-left ">
                    <img className='w-[400px] shadow-2xl rounded-2xl' src="https://www.pngitem.com/pimgs/m/48-488412_transparent-game-piece-png-chess-pawn-png-png.png" alt="" />
           
                </div>
                <div onSubmit={handleSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 w-[450px]">
                <form className="card-body">
                    <h1 className="text-4xl font-bold">Create an account</h1>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input onChange={handlePassword} type="password" name='password' placeholder="password" className="input input-bordered" />
                   
                    <label className="label">
                        <p className='label-text-alt'>Already have an account?</p><Link to='/login' className="label-text-alt link link-hover">Login</Link>
                    </label>
                    </div>
                    <p className='text-rose-600 font'>{error}</p>
                    <div className="form-control mt-6">
                    <button type='submit' className="btn btn-primary">REGISTER</button>
                    </div>
                    
                </form>
                    <div className="">
                    <button onClick={handleGoogleSignIn} className="btn btn-primary btn-outline mx-auto w-full"> <span className='text-2xl mr-3'><FcGoogle></FcGoogle></span> Google</button>
                    </div>    
                </div>
            </div>
            </div>
        </div>
    );
};

export default Register;