import './Homemainbar.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Questionlist from './Questionlist';
import { RootState } from '../../state/store';

function Homemainbar() {
    const user = useSelector((state: RootState) => state.currentUser);
    const location = useLocation();
    const navigate = useNavigate();
    const questionlist = useSelector((state: RootState) => state.question);

    const checkauth = () => {
        if (user === null) {
            alert("Login or signup to ask a question")
            navigate("/Auth")
        } else {
            navigate("/Askquestion")
        }
    }
    return (
        <div className="main-bar">
            <div className="main-bar-header">
                {location.pathname === "/" ? (
                    <h1>Top Question</h1>
                ) : (
                    <h1>All Question</h1>
                )}
                <button className="ask-btn" onClick={checkauth}>Ask Questions</button>
            </div>
            <div>
                {questionlist === null ? (
                    <h1>Loading...</h1>
                ) : (
                    <>
                        <p>{questionlist.length} questions</p>
                        <Questionlist questionlist={questionlist} />
                    </>
                )
                }</div>
        </div>
    )
}

export default Homemainbar