import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex bg-slate-300 p-2 rounded-lg mt-8">
            <button className="btn btn-accent">Breaking News</button>
            <Marquee>
                <Link to='/'>Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as...</Link>
            </Marquee>
        </div>

    );
};

export default BreakingNews;