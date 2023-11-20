/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(res => toast.success('Account loged out'))
            .catch(err => toast.error(err.message))
    }

    const navlinks = <>
        <li><NavLink className={({ isActive }) => isActive ? 'text-red-500 font-semibold' : ''} to='/'>Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'text-red-500 font-semibold' : ''} to='/services'>Services</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'text-red-500 font-semibold' : ''} to='/contact'>Contact</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'text-red-500 font-semibold' : ''} to='/about'>About</NavLink></li>
        {
            user ? <>
                <li className="me-2">{user?.displayName}</li>
                <li className="btn btn-primary" onClick={handleLogOut}>Log Out</li>
            </>
                :
                <Link to='/login'>
                    <li className="btn btn-primary">Login</li>
                </Link>
        }
    </>

    return (
        <div>
            <div className="navbar bg-base-100 lg:px-24">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-2xl font-semibold">Tech Flow</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 items-center">
                        {navlinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;