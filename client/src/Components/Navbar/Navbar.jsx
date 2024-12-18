import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import bars from '../../assets/bars-solid.svg';
import logo from '../../assets/logo.png';
import search from '../../assets/search-solid.svg';
import Avatar from "../Avatar/Avatar";
import './Navbar.css';
import { setcurrentuser } from "../../action/currentuser.Js";
import { useDispatch, useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";

const Navbar = ({ handleSlidein }) => {

    var User = useSelector((state) => state.currentuserreducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handlelogout = () => {
        dispatch({ type: "LOGOUT" });
        navigate("/");
        dispatch(setcurrentuser(null));
    };

    useEffect(() => {
        const token = User?.token;
        if (token) {
            const decodedtoken = jwtDecode(token);
            if (decodedtoken.exp * 1000 < new Date().getTime()) {
                handlelogout();
            }
        }

        dispatch(setcurrentuser(JSON.parse(localStorage.getItem("Profile"))));
    }, [User?.token, dispatch]);

    return (
        <nav className="main-nav">
            <div className="navbar">
                <button className="slide-in-icon" onClick={() => handleSlidein()}>
                    <img src={bars} alt="bars" width='15' />
                </button>
                <div className="navbar-1">
                    <Link to={'/'} className="nav-item nav-logo">
                        <img src={logo} alt="logo" />
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
                        <input type="text" placeholder="Search..." />
                        <img src={search} alt="search" width='18' className="search-icon" />
                    </form>
                </div>
                <div className="navbar-2">
                    {User === null ? (
                        <Link to='/Auth' className="nav-item nav-links">
                            Log in
                        </Link>
                    ) : (
                        <>
                            <Avatar backgroundColor='#009dff' px='10px' py='7px' borderRadius="50%" color="white">
                                <Link to={`/Users/${User?.result?._id}`} style={{ color: 'white', textDecoration: 'none' }}>
                                    {User?.result?.name.charAt(0).toUpperCase()}
                                </Link>
                            </Avatar>
                            <button className="nav-item nav-links" onClick={handlelogout}>Log out</button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    )
};

export default Navbar;