/* eslint-disable no-unused-vars */
import Banner from "./Banner";
import Services from "../Services/Services";
import ShortServices from "./ShortServices";

const Home = () => {
    return (
        <div>
            <Banner />
            <div className="min-h-screen"></div>
            <ShortServices />
        </div>
    );
};

export default Home;