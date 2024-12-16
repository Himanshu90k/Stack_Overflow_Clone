import './Users.css';
import User from './User';
import { useSelector, UseSelector } from 'react-redux';

export interface UserType {
    _id: string;
    name: string;
    email: string;
    password: string;
    about: string;
    tags: string[];
    answered: number;
    joinedon: string;
};

export type UsersListType = UserType[];

const Userslist = () => {

    const users: UsersListType = useSelector((state) => state.usersreducer);
    console.log(users);

    return (
        <div className='user-list-container'>
            {users.map((user) => (
                <User user={user} key={user?._id}/>
            ))}
        </div>
    )
};

export default Userslist;