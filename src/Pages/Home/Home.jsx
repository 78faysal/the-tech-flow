/* eslint-disable no-unused-vars */
import Banner from "./Banner";
import Services from "../Services/Services";
import ShortServices from "./ShortServices";
import About from "./About";
import Contact from "./Contact";
import Faq from "./Faq";
import WorkedWith from "./WorkedWith";

const Home = () => {
    return (
        <div>
            <Banner />
            <div className="min-h-screen"></div>
            <About />
            <ShortServices />
            <Faq />
            <WorkedWith />
            <Contact />
        </div>
    );
};

export default Home;