import { Link } from "react-router-dom";
import errorImg from '../assets/404_page.jpg'

const ErrorPage = () => {
    return (
        <div className="text-center">
            <div className="flex justify-center">
                <img src={errorImg} alt="" className="mx-auto" />
            </div>
            <Link to="/">
                <button className="btn btn-accent">Go to Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;
