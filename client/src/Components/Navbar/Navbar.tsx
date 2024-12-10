import { Link, useNavigate } from "react-router-dom";
import bars from '../../assets/bars-solid.svg';
import logo from '../../assets/logo.png';
import search from '../../assets/search-solid.svg';
import Avatar from "../Avatar/Avatar";
import './Navbar.css';

type NavbarProps = {
    handleSlidein: () => void;
};

const Navbar:React.FC<NavbarProps> = ({handleSlidein}) => {

    var User = null;

    return (
        <nav className="main-nav">
            <div className="navbar">
                <button className="slide-in-icon" onClick={() => handleSlidein()}>
                    <img src={bars} alt="bars" width='15'/>
                </button>
                <div className="navbar-1">
                    <Link to={'/'} className="nav-item nav-logo">
                        <img src={logo} alt="logo"/>
                    </Link>
                    <Link to={'/'} className="nav-item nav-btn res-nav">
                        About
                    </Link>
                    <Link to={'/'} className="nav-item nav-btn res-nav">
                        Products
                    </Link>
                    <Link to={'/'} className="nav-item nav-btn res-nav">
                        For Teams
                    </Link>
                    <form>
                        <input type="text" placeholder="Search..."/>
                        <img src={search} alt="search" width='18' className="search-icon"/>
                    </form>
                </div>
                <div className="navbar-2">
                    {User === null? (
                        <Link to='/' className="nav-item nav-links">
                            Log in
                        </Link>
                    ):(
                        <>
                            <Avatar backgroundColor='#009dff' px='10px' py='7px' borderRadius="50%" color="white">
                                <Link to='' style={{color:'white', textDecoration:'none'}}>
                                
                                </Link>
                            </Avatar>
                            <button className="nav-item nav-links">Log out</button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    )
};

export default Navbar;