import './Users.css';
import User from './User';

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

    const users: UsersListType = [
        {
            "_id": "u54321",
            "name": "Jane Smith",
            "email": "janesmith@example.com",
            "password": "mypassword456",
            "about": "Data Scientist with expertise in machine learning and big data.",
            "tags": ["Machine Learning", "Python", "Data Science"],
            "answered": 25,
            "joinedon": "2024-06-10T09:00:00Z"
        },
        {
            "_id": "u54321",
            "name": "Jane Smith",
            "email": "janesmith@example.com",
            "password": "mypassword456",
            "about": "Data Scientist with expertise in machine learning and big data.",
            "tags": ["Machine Learning", "Python", "Data Science"],
            "answered": 25,
            "joinedon": "2024-06-10T09:00:00Z"
        },
        {
            "_id": "u54321",
            "name": "Jane Smith",
            "email": "janesmith@example.com",
            "password": "mypassword456",
            "about": "Data Scientist with expertise in machine learning and big data.",
            "tags": ["Machine Learning", "Python", "Data Science"],
            "answered": 25,
            "joinedon": "2024-06-10T09:00:00Z"
        },
        {
            "_id": "u54321",
            "name": "Jane Smith",
            "email": "janesmith@example.com",
            "password": "mypassword456",
            "about": "Data Scientist with expertise in machine learning and big data.",
            "tags": ["Machine Learning", "Python", "Data Science"],
            "answered": 25,
            "joinedon": "2024-06-10T09:00:00Z"
        }
    ];

    return (
        <div className='user-list-container'>
            {users.map((user) => (
                <User user={user} key={user?._id}/>
            ))}
        </div>
    )
};

export default Userslist;