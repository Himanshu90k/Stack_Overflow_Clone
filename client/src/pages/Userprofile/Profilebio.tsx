import { UserType } from "../../state/users/usersSlice";

interface ProfilebioProps {
    currentprofile: UserType
};

const Profilebio: React.FC<ProfilebioProps> = ({ currentprofile }) => {

    return (
        <div>
            <div>
                {currentprofile?.result.tags.length !== 0 ? (
                    <>
                        <h4>Tags watched</h4>
                        {currentprofile?.result.tags.map((tag) => (
                            <p key={tag}>{tag}</p>
                        ))}
                    </>
                ) : (
                    <p> 0 Tags watched</p>
                )}
            </div>
            <div>{currentprofile?.result.about ? (
                <>
                    <h4>About</h4>
                    <p>{currentprofile?.result.about}</p>
                </>
            ) : (
                <p>No bio found</p>
            )}</div>
        </div>
    );
};

export default Profilebio;