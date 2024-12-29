import moment from 'moment';
import { Link, useParams } from 'react-router-dom';
import Avatar from '../../Components/Avatar/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAnswerAsync, questionState } from '../../state/question/questionSlice';
import { AppDispatch, RootState } from '../../state/store';

interface DisplayanswerProps {
    question: questionState;
    handleshare: () => void;
};

const Displayanswer: React.FC<DisplayanswerProps> = ({ question, handleshare }) => {

    const user = useSelector((state: RootState) => state.currentUser);
    const { id } = useParams();
    const dispatch = useDispatch<AppDispatch>();

    const handledelete = (answerId: string, noofanswers: number) => {

        if(id) {
            dispatch(deleteAnswerAsync({id, answerId, noOfAnswers: noofanswers - 1}));
        }
    };

    return (
        <div>
            {question.answer.map((ans) => (
                <div className="display-ans" key={ans._id}>
                    <p>{ans.answerBody}</p>
                    <div className="question-actions-user">
                        <div>
                            <button type='button' onClick={handleshare} >Share</button>
                            {user?.result?._id === ans?.userId && (
                                <button type='button' onClick={() => handledelete(ans._id, question.noOfAnswers)}>Delete</button>
                            )}
                        </div>
                        <div>
                            <p>answered {moment(ans.answeredOn).fromNow()}</p>
                            <Link to={`Users/${ans.userId}`} className='user-limk' style={{ color: "#0086d8" }}>
                                <Avatar backgroundColor="lightgreen" px="2px" py="2px" borderRadius="2px">
                                    {ans.userAnswered.charAt(0).toUpperCase()}
                                </Avatar>
                                <div>{ans.userAnswered}</div>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Displayanswer;