import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const ShortServices = () => {
    const datas = useLoaderData();
    const navigate = useNavigate();

    const services = datas.slice(0, 6);

    const handleSeeDetails = (id) => {
        navigate(`/serviceDetail/${id}`)
    }

    return (
        <div className="min-h-screen max-sm:px-5">
            <h2 className="text-3xl font-semibold text-center mt-20 mb-4 w-48 pb-1 mx-auto border-b-2 border-secondary">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center ">
                {
                    services.map(service => {
                        return (
                            <div key={service.id} className="card card-compact bg-slate-800 shadow-xl">
                                <figure><img src={`${service.img}`} alt="" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{service.title}</h2>
                                    <p>{service.description.slice(0, 85)} <Link className="text-blue-500" to={`/serviceDetail/${service.id}`}>Read More...</Link></p>
                                    <div className="flex items-center gap-5">
                                        <h2 className="text-2xl">${service.price}</h2>
                                        <p className="text-xl flex gap-1"><FaStar className="text-yellow-500"></FaStar>{service.rating}</p>
                                    </div>
                                    <div className="card-actions justify-start mt-3">
                                        <button className="btn btn-primary" onClick={() => handleSeeDetails(service.id)}>See Details</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="text-center my-5">
                <Link className="btn btn-primary text-center" to='/services'>All Services</Link>
            </div>
        </div>
    );
};

export default ShortServices;