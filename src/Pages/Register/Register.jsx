/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Register = () => {

    const { createUser, googleLogIn, gitHubLogIn } = useContext(AuthContext);
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

    const handleOnSubmit = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        // const requiredPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).+$/;



        if (password.length < 6) {
            return toast.error('Password should be atleast 6 charecters')
        }
        else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).+$/.test(password)) {
            return toast.error('Please add more secure password with lowercase, uppercase, and symbols');
        }


        // create account 
        createUser(email, password)
            .then(result => {
                toast.success('Account created successfully!')
            })
            .catch(err => {
                toast.error(err.message)
            })
    }
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold">Register now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-slate-800">
                        <form className="card-body" onSubmit={handleOnSubmit}>
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
                            </div>
                            <div className="form-control mt-3">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <p className="py-2">Have an account? <Link className="text-blue-600" to='/login'>Login Now</Link></p>
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

export default Register;