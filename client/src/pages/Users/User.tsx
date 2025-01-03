import { Link } from 'react-router-dom';
import { UserType } from '../../state/users/usersSlice';
import './Users.css';

interface UserProps {
    user: UserType;
};

const User: React.FC<UserProps> = ({ user }) => {
    return (
        <Link to={`/Users/${user._id}`} className='user-profile-link'>
            <h3>{user.name?.charAt(0).toUpperCase() ?? '?'}</h3>
            <h5>{user.name ?? 'name'}</h5>
        </Link>
    );
};

export default User;