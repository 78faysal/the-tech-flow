/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    console.log(location);

    if(loading){
        return <div className="flex justify-center items-center min-h-screen">
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }
    
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login' />
};

export default PrivateRoute;