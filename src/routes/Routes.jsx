import Home from "../Pages/Home/Home";
import Root from "../Pages/Root/Root";
import { createBrowserRouter } from "react-router-dom";
import NotFound from "../Pages/Shared/NotFound";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Services from "../Pages/Services/Services";
import PrivateRoute from "./PrivateRoute";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";


const routes = createBrowserRouter([{
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
        {
            path: '/',
            loader: () => fetch('/services.json'),
            element: <Home />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/register',
            element: <Register />
        },
        {
            path: '/services',
            loader: () => fetch('/services.json'),
            element: <PrivateRoute><Services /></PrivateRoute>
        },
        {
            path: '/serviceDetail/:id',
            element: <PrivateRoute><ServiceDetails /></PrivateRoute>
        }
    ]
}])


export default routes;