import logo from '../../../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center space-y-'>
            <img className='mx-auto ' src={logo} alt="" />
            <p className=''>ournalism Without Fear or Favour </p>
            <p className='text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
            
        </div>
    );
};

export default Header;