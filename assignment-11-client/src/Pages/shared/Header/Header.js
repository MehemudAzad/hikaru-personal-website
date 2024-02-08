import userEvent from '@testing-library/user-event';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
// import './Header.css'

const Header = () => {
  const {user, logOut,darkToggle, setDarkToggle} = useContext(AuthContext);

  const handleLogOut = () =>{
      logOut()
      .then(()=>{})
      .catch(error => console.error(error))
      toast.success("You are now Logged out")
  }
  console.log(user);
    
    return (
       
<nav className="bg-white  px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
  <Link to="/" className="flex items-center">
      <img src="https://iconarchive.com/download/i104085/blackvariant/shadow135-system/Chess.ico" className="mr-3 h-6 sm:h-9" alt="hikaru logo"/>
      <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">GM Hikaru</span>
  </Link>
  <div className="flex md:order-2">
    {
      user?.uid ?
      <>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={user?.photoURL ? user.photoURL : "https://w7.pngwing.com/pngs/96/435/png-transparent-world-chess-championship-pawn-chess-piece-chess-engine-cheess-game-king-queen-thumbnail.png"} />
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
          <li><a>{user.displayName}</a></li>
            <li>
              <Link to='/addservice' className="justify-between">
                Add Service
                <span className="badge">New</span>
              </Link>
            </li>
            <li><Link to={`reviews`}>My Reviews</Link></li>
            <li><Link onClick={handleLogOut} to='login'>Logout</Link></li>
          </ul>
        </div>
      </>
      :
      <>
          <Link to='/login'>
          <div href="#_" class="relative inline-block text-lg group">
          <span class="relative z-10 block px-5 py-1 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
          <span class="absolute inset-0 w-full h-full px-5 py-1 rounded-lg bg-gray-50"></span>
          <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
          <span class="relative">Login</span>
          </span>
          <span class="absolute bottom-0 right-0 w-full h-9 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
          </div>
            <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
          </Link>
      </>
    }
    
  </div>
  <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <Link to="/" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</Link>
      </li>
      <li>
        <Link to="/about" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
      </li>
      <li>
        <Link to="/blogs" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blogs</Link>
      </li>
      <li>
        <Link to="/services" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Courses</Link>
      </li>
    
    </ul>
  </div>
  </div>
</nav>

    );
};

export default Header;