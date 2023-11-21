/* eslint-disable no-unused-vars */
import { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {

    const { logIn, googleLogIn, gitHubLogIn } = useContext(AuthContext);
    // console.log(createUser);

    const handleGoogleLogin = () => {
        googleLogIn()
            .then(res => {
                toast.success('Loged In Successfully')
            })
            .catch(err => {
                toast.error(err.message);
            })
    }

    const handleGitHubLogin = () => {
        gitHubLogIn()
            .then(res => {
                toast.success('Loged In Successfully')
            })
            .catch(err => {
                toast.error(err.message);
            })
    }

    const handleFormSubmit = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;


        // form reset 
        e.target.reset()

        // login 
        logIn(email, password)
            .then(result => {
                toast.success('Loged In successfully!')
            })
            .catch(err => {
                toast.error(err.message)
            })
    }
    return (
        <div>
            <div className="h-20"></div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold">Login now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-slate-800">
                        <form className="card-body" onSubmit={handleFormSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered bg-gray-800" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered bg-gray-800" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-3">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className="py-2">News here? <Link className="text-blue-600" to='/register'>Register Now</Link></p>
                            <div className="text-2xl flex justify-center gap-3 border-t-2 pt-5 border-t-slate-500">
                                <FaGoogle onClick={handleGoogleLogin} />
                                <FaGithub onClick={handleGitHubLogin} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;