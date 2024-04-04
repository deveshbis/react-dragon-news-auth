import Header from "../Shared/Header/Header";
import LeftSide from "../Shared/LeftSide/LeftSide";
import Navbar from "../Shared/Navbar/Navbar";
import RightSide from "../Shared/RightSide/RightSide";
import BreakingNews from "./BreakingNews";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            

            <div className="grid grid-cols-4 gap-6">
                <div className="border">
                    <LeftSide></LeftSide>
                </div>
                <div className="col-span-2 border">
                    <h1 className="text-4xl">News comming soon...</h1>
                </div>
                <div className="border">
                    <RightSide></RightSide>
                </div>
            </div>
        </div>
    );
};

export default Home;