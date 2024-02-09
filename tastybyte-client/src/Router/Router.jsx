import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from '../Pages/Error/Error';
import Home from "../Pages/Home/Home";
import Menus from "../Pages/Menus/Menus";
import RestaurantDetails from "../Pages/RestaurantDetails/RestaurantDetails";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import RestaurantDashbord from "../Pages/RestaurantDashbord/RestaurantDashbord";
import AdminDashbord from "../Pages/AdminDashbord/AdminDashbord";
import AddResturent from "../Pages/AddResturent/AddResturent";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/menu',
                element: <Menus />
            },
            {
                path: '/restaurantDetails',
                element: <RestaurantDetails />
            },
            {
                path: '/addRestaurant',
                element: <AddResturent />
            }
        ]
    },
    {
        path: '/signUp',
        element: <SignUp />
    },
    {
        path: '/signIn',
        element: <SignIn />
    },
    {
        path: '/restaurantDashbord',
        element: <RestaurantDashbord />
    },
    {
        path: '/adminDashbord',
        element: <AdminDashbord />
    }
])

export default router;