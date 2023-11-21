import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { IoIosCall, IoIosMail } from "react-icons/io";


const ServiceDetails = () => {
    const [serviceDetail, setServiceDetail] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => {
                const myData = data.find(service => service.id == id)
                setServiceDetail(myData);
            })
    }, [])

    const { img, title, price, rating, description } = serviceDetail;

    return (
        <div>
            <div className="h-20"></div>
            <div className="my-20 max-sm:px-5">
                <div className="card grid grid-cols-1 md:grid-cols-2">
                    <figure><img src={img} alt="" /></figure>
                    <div className="max-sm:py-5 px-5 flex items-center">
                        <div className="space-y-3">
                            <h2 className="card-title text-3xl">{title}</h2>
                            <p>{description}</p>
                            <div className="flex items-center gap-5">
                                <h2 className="text-2xl">${price}</h2>
                                <p className="text-xl flex gap-1"><FaStar className="text-yellow-500"></FaStar>{rating}</p>
                            </div>
                            <p className=" flex items-center gap-1"><IoIosMail className="text-2xl" /> info@abc.com</p>
                            <p className="flex items-center gap-1"><IoIosCall className="text-2xl" /> 212-456-7890</p>
                            <div className="card-actions justify-start">
                                <button className="btn btn-primary">Contact Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;