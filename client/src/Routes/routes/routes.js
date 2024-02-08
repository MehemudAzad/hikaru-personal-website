import { createBrowserRouter } from "react-router-dom";
import LoginLayout from "../../layout/LoginLayout";
import Main from "../../layout/Main";
import About from "../../Pages/About";
import Blogs from "../../Pages/Blogs";
import ErrorPage from "../../Pages/ErrorPage";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login";
import Register from "../../Pages/Register";
// import Register from "../../Pages/Register";
import Reviews from "../../Pages/Reviews";
import Services from "../../Pages/Services/Services";
import SingleService from "../../Pages/Services/SingleService";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddService from "../../Pages/Services/AddService";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path: '/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'/reviews',
                element:<PrivateRoute><Reviews></Reviews></PrivateRoute>
            },
            {
                path:'/addservice',
                element:<PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path:'services',
                element:<Services></Services>
            },
            {
                path:'services/:id',
                element:<SingleService></SingleService>,
                loader:({params})=> fetch(`https://assignment-11-server-topaz.vercel.app/services/${params.id}`)
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    },
    // {
    //     path:'/login',
    //     element:<LoginLayout></LoginLayout>,
    //     children:[
    //         {
    //             path:'/login',
    //             element:<Login></Login>
    //         },
    //         {
    //             path:'/register',
    //             element:<Register></Register>
    //         }
    //     ]
    // },
    {
        path:'*',
        element:<ErrorPage></ErrorPage>
    }
])