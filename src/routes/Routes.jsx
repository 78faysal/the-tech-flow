import Home from "../Pages/Home/Home";
import Root from "../Pages/Root/Root";
import { createBrowserRouter } from "react-router-dom";
import NotFound from "../Pages/Shared/NotFound";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";


const routes = createBrowserRouter([{
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/register',
            element: <Register />
        }
    ]
}])


export default routes;