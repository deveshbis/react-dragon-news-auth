import { useEffect, useState } from "react";
import { FaRegCalendar } from 'react-icons/fa';
import { Link } from "react-router-dom";
import left1 from '../../../assets/1.png';
import left2 from '../../../assets/2.png';
import left3 from '../../../assets/3.png';


const LeftSide = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("categories.json")
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])
    return (
        <div >
            <div className="space-y-6">
                <h1 className="text-3xl">All Category</h1>
                {
                
                    categories.map(category =>
                    <Link className="block ml-4 text-xl font-semibold text-center"
                    to={`/category/${category.id}`}
                    key={category.id}>{category.name}</Link>)
                }
            </div>
            <div className="mt-10 p-2">
                <div className="p-4 border">
                    <img src={left1} alt="" />
                    <h3 className="text-lg font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h3>
                    <div className="flex justify-between items-center">
                        <p>Sports</p>
                        <p className="flex items-center gap-2"> <FaRegCalendar></FaRegCalendar> 
                        Jan 4, 2022</p>
                    </div>
                </div>
                <div className="p-4 border">
                    <img src={left2} alt="" />
                    <h3 className="text-lg font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h3>
                    <div className="flex justify-between items-center">
                        <p>Sports</p>
                        <p className="flex items-center gap-2"> <FaRegCalendar></FaRegCalendar> 
                        Jan 4, 2022</p>
                    </div>
                </div>
                <div className="p-4 border">
                    <img src={left3} alt="" />
                    <h3 className="text-lg font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h3>
                    <div className="flex justify-between items-center">
                        <p>Sports</p>
                        <p className="flex items-center gap-2"> <FaRegCalendar></FaRegCalendar> 
                        Jan 4, 2022</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default LeftSide;