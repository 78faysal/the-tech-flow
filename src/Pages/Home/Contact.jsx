
const Contact = () => {
    return (
        <div className=" max-sm:px-5">
            <div className="h-20"></div>
            <div className="" >
                <div className="hero min-h-screen">
                    <div className="hero-content grid grid-cols-1 md:grid-cols-2">
                        <div data-aos="fade-right" className="text-center lg:text-left">
                            <h1 className="text-3xl font-bold">Stay Connected</h1>
                            <p className="py-6">Connect with us today and let us bring your events to life! Reach out for seamless event management solutions. Your extraordinary event experience starts with a simple message to info@abc.com</p>
                        </div>
                        <div data-aos="fade-left" className="card shrink-0 w-full max-w-sm shadow-2xl bg-slate-800 mx-auto">
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="name" placeholder="Your Name" className="input input-bordered bg-gray-800" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="Your mail" className="input input-bordered bg-gray-800" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Message</span>
                                    </label>
                                    <textarea type="text" placeholder="Your Message" className="input input-bordered bg-gray-800 h-24" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Send Massage</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;