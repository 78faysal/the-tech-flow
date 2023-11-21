import { FaStar } from "react-icons/fa";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

const Services = () => {
    const services = useLoaderData();
    const navigate = useNavigate();

    return (
        <div className="min-h-screen">
            <div className="h-20"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center my-20">
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
                                        <button className="btn btn-primary" onClick={() => navigate(`/serviceDetail/${service.id}`)}>See Details</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Services;