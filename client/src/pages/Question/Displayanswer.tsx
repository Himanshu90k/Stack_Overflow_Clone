import moment from "moment";
import { Link } from "react-router-dom";
import Avatar from "../../Components/Avatar/Avatar";

type DisplayanswerProps = {
    question: string;
    handleshare: () => void;
};

const Displayanswer: React.FC<DisplayanswerProps> = ({ question, handleshare }) => {

    const user = null;
    const handleDelete = (answerid, noofanswers) => {

    }

    return (
        <div>
            {question.answer.map((ans) => (
                <div className="display-ans" key={ans._id}>
                    <p>{ans.answerbody}</p>
                    <div className="question-actions-user">
                        <div>
                            <button type="button" onClick={handleshare}>Share</button>
                            {user?.result?._id === ans?.userid && (
                                <button type="button" onClick={() => handleDelete(ans._id, question.noofanswers)}>Delete</button>
                            )}
                        </div>
                        <p>answered {moment(ans.answerdon).fromNow()}</p>
                        <Link to={`Users/${ans.userid}`} className="user-link" style={{ color: "#0086d8" }}>
                            <Avatar backgroundColor={"orange"} px="8px" py="5px" borderRadius="4px">
                                {ans.useranswered.charAt(0).toUpperCase()}
                            </Avatar>
                            <div>{ans.useranswered}</div>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Displayanswer;