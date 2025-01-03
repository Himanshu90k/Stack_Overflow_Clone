import './Users.css';
import User from './User';
import { useSelector } from "react-redux";
import { RootState } from '../../state/store';
import { UserType } from '../../state/users/usersSlice';

const Userslist = () => {

    const users: UserType[] = useSelector((state: RootState) => state.users);

    return (
        <div className="user-list-container">
            {users.map((user) => (
                <User user={user} key={user._id} />
            ))}
        </div>
    );
};

export default Userslist;