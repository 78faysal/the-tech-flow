import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="min-h-screen text-center flex justify-center items-center">
            <div>
                <h2 className="text-3xl font-bold">404</h2>
                <h2 className="text-4xl font-bold">Page Not Found</h2>
                <Link className="text-blue-500" to='/'>Go Home</Link>
            </div>
        </div>
    );
};

export default NotFound;