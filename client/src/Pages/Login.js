import { current } from 'daisyui/src/colors';
import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
// import picture from '../Assets/banner/1042737.aa63ee66.5000x5000o.9a6d93431ae1.jpeg'
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useTitle from '../hooks/useTitle';

const Login = () => {
    useTitle('Login')
    const {providerLogin, login, setLoading, googleSignIn} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

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

    //logging in with email and password
    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const password = form.password.value;
        const email= form.email.value;
        console.log(email, password);
        console.log('before login');
      //log in
        login(email, password)
        .then(result =>{
            const user = result.user;

            const currentUser = {
                email: user.email
            }

            console.log(currentUser);

            //get jwt token
            fetch('https://assignment-11-server-topaz.vercel.app/jwt', {
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body:JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                localStorage.setItem('hikaru-token', data.token);
            })

            console.log("before navigate");
            navigate(from, {replace: true});
            if(user){
                toast.success('Successfully sign in!!!');
            }// toast.error('Your email is not verified. Please verify your email address.')
            
        })
        .catch(error =>{
            console.error(error)
            // setError(error.message);
        })
       
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content grid grid-cols-1 md:grid-cols-2 gap-[100px] lg:flex-row-reverse">
                <div className="text-center lg:text-left ">
                    <img className='w-[400px] shadow-2xl rounded-2xl' src="https://www.pngitem.com/pimgs/m/48-488412_transparent-game-piece-png-chess-pawn-png-png.png" alt="" />
           
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 w-[450px]">
                <form onSubmit={handleSubmit} className="card-body">
                    <h1 className="text-4xl font-bold">Login now!</h1>
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
                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        <Link to='/register' className="label-text-alt link link-hover">Don't have an account? Register</Link>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button type='submit' className="btn btn-primary">Login</button>
                    </div>
                </form>
                    <div  className="">
                    <button onClick={handleGoogleSignIn} className="btn btn-primary btn-outline mx-auto w-full"> <span className='text-2xl mr-3'><FcGoogle></FcGoogle></span> Google</button>
                    </div>    
                </div>
            </div>
            </div>
        </div>
    );
};

export default Login;