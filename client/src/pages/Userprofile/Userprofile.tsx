import Leftsidebar from "../../Components/Leftsidebar/Leftsidebar";
import { useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import Avatar from "../../Components/Avatar/Avatar";
import Editprofileform from "./Editprofileform";
import Profilebio from "./Profilebio";
import { UsersListType } from "../Users/Userslist";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake, faPen } from "@fortawesome/free-solid-svg-icons";

type UserprofileProps = {
    slidein: boolean;
};

const Userprofile:React.FC<UserprofileProps> = ({slidein}) => {

    const { id } = useParams<string>();
    const [Switch, setswitch] = useState(false);
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

    const currentprofile = users.filter((user) => user._id === id)[0];
    const currentuser = {
        "_id": "u54321",
        "name": "Jane Smith",
        "email": "janesmith@example.com",
        "password": "mypassword456",
        "about": "Data Scientist with expertise in machine learning and big data.",
        "tags": ["Machine Learning", "Python", "Data Science"],
        "answered": 25,
        "joinedon": "2024-06-10T09:00:00Z"
    };

    return (
        <div className="home-container-1">
            <Leftsidebar slidein={slidein}/>
            <div className="home-container-2">
                <section>
                    <div className="user-details-container">
                        <div className="user-details">
                            <Avatar backgroundColor="purple" color="white" fontSize="50px" px="40px" py="30px">
                                {currentprofile.name.charAt(0).toUpperCase()}
                            </Avatar>
                            <div className="user-name">
                                <h1>{currentprofile?.name}</h1>
                                <p>
                                    <FontAwesomeIcon icon={faBirthdayCake}/> Joined{" "} {moment(currentprofile?.joinedon).fromNow()}
                                </p>
                            </div>
                        </div>
                        {currentuser?._id === id && (
                            <button className="edit-profile-btn" type="button" onClick={() => setswitch(true)}>
                                <FontAwesomeIcon icon={faPen}/> Edit Profile
                            </button>
                        )}
                    </div>
                    <>
                        {Switch ? (
                            <Editprofileform currentuser={currentuser} setswitch={setswitch}/>
                        ) : (
                            <Profilebio currentprofile={currentprofile}/>
                        )}
                    </>
                </section>
            </div>
        </div>
    )
};

export default Userprofile;