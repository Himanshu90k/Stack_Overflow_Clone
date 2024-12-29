import './Leftsidebar.css';
import { NavLink } from 'react-router-dom';
import Globe from "../../assets/Globe.svg";

interface LeftsidebarProps {
    slidein: boolean;
};

const Leftsidebar: React.FC<LeftsidebarProps> = ({ slidein }) => {
    const slideinstyle = {
        transform: "translateX(0%)",
    };
    const slideoutstyle = {
        transform: "translateX(-100%)",
    }
    return (
        <div className="left-sidebar" style={slidein ? slideinstyle : slideoutstyle}>
            <nav className='side-nav'>
                <button className="nav-btnn">
                    <NavLink to='/' className = {({isActive}) => isActive? 'active': 'side-nav-links'}>
                        <p>Home</p>
                    </NavLink>
                </button>
                <div className="side-nav-div">
                    <div>
                        <p>PUBLIC</p>
                    </div>
                    <button className='nav-btnn'>
                        <NavLink to='/Question' className = {({isActive}) => isActive? 'active': 'side-nav-links'}>
                            <img src={Globe} alt="globe" />
                            <p style={{ paddingLeft: '10px' }}>Questions</p>
                        </NavLink>
                    </button>
                    <button className='nav-btnn'>
                        <NavLink to='/Tags' className = {({isActive}) => isActive? 'active': 'side-nav-links'} style={{ paddingLeft: "40px" }}>
                            <p >Tags</p>
                        </NavLink>
                    </button>
                    <button className='nav-btnn'>
                        <NavLink to='/Users' className = {({isActive}) => isActive? 'active': 'side-nav-links'} style={{ paddingLeft: "40px" }}>
                            <p >Users</p>
                        </NavLink>
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Leftsidebar