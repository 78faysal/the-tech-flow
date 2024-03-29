import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const About = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className=" max-sm:px-5">
            <div className="h-20"></div>
            <div className="min-h-screen flex items-center" >
                <div className="card grid grid-cols-1 md:grid-cols-2">
                    <img data-aos="fade-right" src='https://i.ibb.co/FVm57p4/team.jpg' alt="" />
                    <div data-aos="fade-left" className="max-sm:py-5 px-5 flex items-center">
                        <div className="space-y-3">
                            <h2 className="text-2xl font-semibold mt-20 mb-4 w-32 pb-1 border-b-2 border-secondary">About Us</h2>
                            <h2 className="card-title text-3xl">Who We Are?</h2>
                            <p>With a track record of successful events spanning various industries, we bring a wealth of experience to the table. Our team is expertise ensures that your event is in capable hands from conceptualization to execution.</p>
                            <div className="card-actions justify-start">
                                <Link to='joinUs' className="btn btn-primary">Join Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;