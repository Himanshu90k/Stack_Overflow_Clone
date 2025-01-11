import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import bars from '../../assets/bars-solid.svg';
import logo from '../../assets/logo.png';
import search from '../../assets/search-solid.svg';
import Avatar from '../Avatar/Avatar';
import './navbar.css';
import { setCurrentUser } from '../../state/currentUser/currentUserSlice';
import { jwtDecode } from "jwt-decode"
import { AppDispatch, RootState } from '../../state/store';
import { logout } from '../../state/auth/authSlice';

interface NavbarProps {
    handleslidein: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ handleslidein }) => {

    var User = useSelector((state: RootState) => state.currentUser);
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const handlelogout = () => {

        dispatch(logout());
        navigate("/");
        dispatch(setCurrentUser({
            result: {
                _id: '',
                name: '',
                email: '',
                password: '',
                about: '',
                tags: [''],
                joinedon: ''
            },
            token: '',
        }));
    };

    useEffect(() => {
        const token = User.token;
        if (token && token !== '') {
            const decodedtoken = jwtDecode<{exp: number}>(token);
            if (decodedtoken.exp * 1000 < new Date().getTime()) {
                handlelogout();
            };
        };
        
        const profile = localStorage.getItem('Profile');
        if(profile) {
            dispatch(setCurrentUser(JSON.parse(profile)));
        };

    }, [User.token, dispatch]);
    return (
        <nav className="main-nav">
            <div className="navbar">
                <button className="slide-in-icon" onClick={() => handleslidein()}>
                    <img src={bars} alt="bars" width='15' />
                </button>
                <div className="navbar-1">
                    <Link to='/' className='nav-item nav-logo'>
                        <img src={logo} alt="logo" />
                    </Link>
                    <Link to="/" className="nav-item nav-btn res-nav">
                        About
                    </Link>
                    <Link to="/" className="nav-item nav-btn res-nav">
                        Products
                    </Link>
                    <Link to="/" className="nav-item nav-btn res-nav">
                        For Teams
                    </Link>
                    <form><input type="text" placeholder='Search...' />
                        <img src={search} alt="search" width='18' className='search-icon' />
                    </form>
                </div>
                <div className="navbar-2">
                    {User.result.name === '' ? (
                        <Link to='/Auth' className='nav-item nav-links'>
                            Log in
                        </Link>
                    ) : (
                        <>
                            <Avatar backgroundColor='#009dff' px={'10px'} py={'7px'} borderRadius='50%' color="white">
                                <Link to={`/Users/${User.result._id}`} style={{ color: "white", textDecoration: "none" }}>
                                    {User.result.name.charAt(0).toUpperCase()}
                                </Link>
                            </Avatar>
                            <button title='log out' className="nav-item nav-links" onClick={handlelogout}>Log out</button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar