import React from 'react';
import Leftsidebar from '../../Components/Leftsidebar/Leftsidebar';
import './Users.css';
import Userslist from './Userslist';
import '../../App.css';

interface UsersProps {
    slidein: boolean;
};

const Users: React.FC<UsersProps> = ({ slidein }) => {
    
    return (
        <div className="home-container-1">
            <Leftsidebar slidein={slidein} />
            <div className="home-container-2" style={{ marginTop: "30px" }}>
                <h1 style={{ fontWeight: "400" }}>Users</h1>
                <Userslist />
            </div>
        </div>
    );
};

export default Users;