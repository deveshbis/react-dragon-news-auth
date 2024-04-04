import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const RightSide = () => {
    return (
        <div>
            <div className='p-5 space-y-3 mb-5'>
                <h2 className="text-3xl">Login Us</h2>
                <button className="btn btn-outline w-full">
                <FaGoogle></FaGoogle>
                    Google
                </button>
                <button className="btn btn-outline w-full">
                <FaGithub></FaGithub>
                    Github
                </button>
            </div>
            <div className='p-5  mb-5'>
                <h2 className="text-3xl">Find Us</h2>
                <a className='flex items-center text-xl p-4 gap-3 border rounded-t-lg' href="">
                <FaFacebook className='mr-3'></FaFacebook>
                    Facebook
                </a>
                <a className='flex items-center text-xl p-4 gap-3 border' href="">
                <FaInstagram className='mr-3'></FaInstagram>
                    Instagram
                </a>
                <a className='flex items-center text-xl p-4 gap-3 border rounded-b-lg' href="">
                <FaTwitter className='mr-3'></FaTwitter>
                    Twitter
                </a>
            </div>
            <div className='p-5 space-y-3 mb-5'>
                <h2 className="text-3xl">Q-Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
                
            </div>
        </div>
    );
};

export default RightSide;