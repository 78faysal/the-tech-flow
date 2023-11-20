import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold">Login now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-slate-800">
                        <form className="card-body">
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
                            <p className="py-3">News here? <Link className="text-blue-600" to='/register'>Register Now</Link></p>
                            <div className="text-2xl flex justify-center gap-3">

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;