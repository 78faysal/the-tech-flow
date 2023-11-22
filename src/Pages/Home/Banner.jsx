/* eslint-disable no-unused-vars */
import bannerImg from '../../assets/banner.jpg';


const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen absolute left-0 z-0" style={{ backgroundImage: 'url(https://i.ibb.co/h1Zz5zB/banner.jpg)' }}>
                <div className="hero-overlay bg-opacity-75"></div>
                <div className="hero-content text-center text-neutral-content ">
                    <div data-aos="fade-up" className="max-w-4xl">
                        <h1 className="mb-5 text-5xl font-bold">Make tech-driven events <br /> <span className='text-primary'>Elevated</span></h1>
                        <p className="mb-5">Get seamless event experiences meet cutting-edge technology, offering comprehensive event management solutions tailored to elevate every digital or in-person gathering with innovation and precision.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;