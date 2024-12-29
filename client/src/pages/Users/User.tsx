import { Link } from 'react-router-dom';
import { UserType } from '../../state/users/usersSlice';

interface UserProps {
    user: UserType;
};

const User: React.FC<UserProps> = ({ user }) => {
    return (
        <Link to={`/Users/${user.result._id}`} className='user-profile-link'>
            <h3>{user.result.name.charAt(0).toUpperCase()}</h3>
            <h5>{user.result.name}</h5>
        </Link>
    );
};

export default User;