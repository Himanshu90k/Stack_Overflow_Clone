import moment from "moment";
import { Link, useParams } from "react-router-dom";
import Avatar from "../../Components/Avatar/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { deleteanswer } from "../../api";

const Displayanswer = ({ question, handleshare }) => {

    const user = useSelector((state) => state.currentuserreducer);
    const { id } = useParams();
    const dispatch = useDispatch();
    const handleDelete = (answerid, noofanswers) => {
        dispatch(deleteanswer(id, answerid, noofanswers));
    };

    return (
        <div>
            {question.answer.map((ans) => (
                <div className="display-ans" key={ans.userid}>
                    <p>{ans.answerbody}</p>
                    <div className="question-actions-user">
                        <div>
                            <button type="button" onClick={handleshare}>Share</button>
                            {user?.result?._id === ans?.userid && (
                                <button type="button" onClick={() => handleDelete(ans.userid, question.noofanswers)}>Delete</button>
                            )}
                        </div>
                        <div>
                            <p>answered {moment(ans.answeredon).fromNow()}</p>
                            <Link to={`Users/${ans.userid}`} className="user-link" style={{ color: "#0086d8" }}>
                                <Avatar backgroundColor={"orange"} px="8px" py="5px" borderRadius="4px">
                                    {ans.useranswered.charAt(0).toUpperCase()}
                                </Avatar>
                                <div>{ans.useranswered}</div>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Displayanswer;