import { Link } from "react-router-dom";
import { UserType } from "./Userslist";

type UserProps = {
    user: UserType;
};

const User:React.FC<UserProps> = ({user}) => {
    return (
        <Link to={`/Users/${user._id}`} className="user-profile-link">
            <h3>{user.name.charAt(0).toUpperCase()}</h3>
            <h5>{user.name}</h5>
        </Link>
    )
};

export default User;