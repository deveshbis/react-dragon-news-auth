import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSide from "../Shared/RightSide/RightSide";


const NewsPage = () => {
    const {id} = useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                    <h1 className="text-4xl">News Details</h1>
                    <p>{id}</p>
                </div>

                <div className="col-span-1">
                    <RightSide></RightSide>
                </div>

            </div>
        </div>
    );
};

export default NewsPage;