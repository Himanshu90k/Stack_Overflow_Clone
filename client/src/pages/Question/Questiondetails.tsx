import { useState } from "react";
import moment from "moment";
import copy from 'copy-to-clipboard';
import upvote from '../../assets/sort-up.svg';
import downvote from '../../assets/sort-down.svg';
import './Question.css';
import Avatar from "../../Components/Avatar/Avatar";
import Displayanswer from "./Displayanswer";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import { questionlist } from "../../Components/Homemainbar/Questionlist";


const Questiondetails = () => {

    const { id } = useParams();
    const [answer, setAnswer] = useState("");
    const questionlist: questionlist = [
        {
            "_id": "ql",
            "questiontitle": "How to implement a binary search algorithm in Python?",
            "questionbody": "I am trying to implement a binary search algorithm in Python bu I am stuck. Can someone provide a simple example",
            "questiontags": ["Python", "Algorithms", "Binary Search"],
            "noofanswers": 2,
            "upvote": ["user123", "user456"],
            "downvote": ["user789"],
            "userposted": "codeNewbie",
            "userid": "u12345",
            "askedon": "2024-06-10T12:00:00Z",
            "answer": [
                {
                    "answerbody": "Here's a simple example of a binary search algorithm in Python:\n```python\ndef binary_search(arr, x):\n",
                    "useranswered": "algoExpert",
                    "userid": "u6789",
                    "answeredon": "2024-06-10T13:00:00Z"
                },
                {
                    "answerbody": "Here's a simple example of a binary search algorithm in Python:\n```python\ndef binary_search(arr, x):\n",
                    "useranswered": "algoExpert",
                    "userid": "u6789",
                    "answeredon": "2024-06-10T13:00:00Z"
                }
            ]
        },
        {
            "_id": "ql",
            "questiontitle": "How to implement a binary search algorithm in Python?",
            "questionbody": "I am trying to implement a binary search algorithm in Python bu I am stuck. Can someone provide a simple example",
            "questiontags": ["Python", "Algorithms", "Binary Search"],
            "noofanswers": 2,
            "upvote": ["user123", "user456"],
            "downvote": ["user789"],
            "userposted": "codeNewbie",
            "userid": "u12345",
            "askedon": "2024-06-10T12:00:00Z",
            "answer": [
                {
                    "answerbody": "Here's a simple example of a binary search algorithm in Python:\n```python\ndef binary_search(arr, x):\n",
                    "useranswered": "algoExpert",
                    "userid": "u6789",
                    "answeredon": "2024-06-10T13:00:00Z"
                },
                {
                    "answerbody": "Here's a simple example of a binary search algorithm in Python:\n```python\ndef binary_search(arr, x):\n",
                    "useranswered": "algoExpert",
                    "userid": "u6789",
                    "answeredon": "2024-06-10T13:00:00Z"
                }
            ]
        },
        {
            "_id": "ql",
            "questiontitle": "How to implement a binary search algorithm in Python?",
            "questionbody": "I am trying to implement a binary search algorithm in Python bu I am stuck. Can someone provide a simple example",
            "questiontags": ["Python", "Algorithms", "Binary Search"],
            "noofanswers": 2,
            "upvote": ["user123", "user456"],
            "downvote": ["user789"],
            "userposted": "codeNewbie",
            "userid": "u12345",
            "askedon": "2024-06-10T12:00:00Z",
            "answer": [
                {
                    "answerbody": "Here's a simple example of a binary search algorithm in Python:\n```python\ndef binary_search(arr, x):\n",
                    "useranswered": "algoExpert",
                    "userid": "u6789",
                    "answeredon": "2024-06-10T13:00:00Z"
                },
                {
                    "answerbody": "Here's a simple example of a binary search algorithm in Python:\n```python\ndef binary_search(arr, x):\n",
                    "useranswered": "algoExpert",
                    "userid": "u6789",
                    "answeredon": "2024-06-10T13:00:00Z"
                }
            ]
        },
        {
            "_id": "ql",
            "questiontitle": "How to implement a binary search algorithm in Python?",
            "questionbody": "I am trying to implement a binary search algorithm in Python bu I am stuck. Can someone provide a simple example",
            "questiontags": ["Python", "Algorithms", "Binary Search"],
            "noofanswers": 2,
            "upvote": ["user123", "user456"],
            "downvote": ["user789"],
            "userposted": "codeNewbie",
            "userid": "u12345",
            "askedon": "2024-06-10T12:00:00Z",
            "answer": [
                {
                    "answerbody": "Here's a simple example of a binary search algorithm in Python:\n```python\ndef binary_search(arr, x):\n",
                    "useranswered": "algoExpert",
                    "userid": "u6789",
                    "answeredon": "2024-06-10T13:00:00Z"
                },
                {
                    "answerbody": "Here's a simple example of a binary search algorithm in Python:\n```python\ndef binary_search(arr, x):\n",
                    "useranswered": "algoExpert",
                    "userid": "u6789",
                    "answeredon": "2024-06-10T13:00:00Z"
                }
            ]
        }
    ];

    const user = null;
    const location = useLocation();
    const navigate = useNavigate();
    const url = "http://localhost:3000";

    const handlepostans = (e: React.FormEvent<HTMLFormElement>, answerlength) => {
        e.preventDefault();
        if(user === null) {
            alert("Login or Signup to answer a question");
            navigate('/Auth');
        } else {
            if(answer === '') {
                alert("Enter an answer before submitting");
            } else {
                setAnswer("");
            }
        }
    };

    const handleshare = () => {
        copy(url + location.pathname);
        alert("Copied url :" + url + location.pathname);
    };

    const handleDelete = () => {

    };

    const handleupvote = () => {
        if(user === null) {
            alert("Login or Signup to answer a question");
            navigate('/Auth');
        }
    };

    const handledownvote = () => {
        if(user === null) {
            alert("Login or Signup to answer a question");
            navigate('/Auth');
        }
    };

    return (
        <div className="question-details-page">
            {questionlist === null ? (
                <h1>Loading...</h1>
            ) : (
                <>
                    {questionlist.filter((question) => question._id === id).map((question) => (
                        <div key={question._id}>
                            <section className="question-details-container">
                                <h1>{question.questiontitle}</h1>
                                <div className="question-details-container-2">
                                    <img src={upvote} alt="upvote" width={18} className="votes-icon" onClick={handleupvote}/>
                                    <p>{question.upvote.length - question.downvote.length}</p>
                                    <img src={downvote} alt="downvote" width={18} className="votes-icon" onClick={handledownvote}/>
                                </div>
                                <div style={{width: '100%'}}>
                                    <p className="question-body">{question.questionbody}</p>
                                    <div className="question-details-tags">
                                        {question.questiontags.map((tag) => (
                                            <p key={tag}>{tag}</p>
                                        ))}
                                    </div>
                                    <div className="question-actions-user"> 
                                        <div>
                                            <button type="button" onClick={handleshare}>
                                                Share
                                            </button>
                                            {user?.result?._id === question?.userid && (
                                                <button type="button" onClick={handleDelete}>Delete</button>
                                            )}
                                        </div>
                                        <div>
                                            <p>Asked {moment(question.askedon).fromNow()}</p>
                                            <Link to={`Users/${question.userid}`} className="user-link" style={{color: "#0086d8"}}>
                                                <Avatar backgroundColor={"orange"} px="8px" py="5px" borderRadius="4px">
                                                    {question.userposted.charAt(0).toUpperCase()}
                                                </Avatar>
                                                <div>{question.userposted}</div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {question.noofanswers !== 0 && (
                                <section>
                                    <h3>{question.noofanswers} Answers</h3>
                                    <Displayanswer key={question._id} question={question} handleshare={handleshare}/>
                                </section>
                            )}
                            <section className="post-ans-container">
                                <h3>Your Answer</h3>
                                <form onSubmit={((e) => {
                                    handlepostans(e, question.answer.length)
                                })}>
                                    <textarea name="" id="" cols={30} rows={10} value={answer} onChange={(e) => setAnswer(e.target.value)}></textarea>
                                <br />
                                <input type="submit" className="post-ans-btn" value="Post your Answer"/>
                                </form>
                                <p>
                                    Browse other Question tagged
                                    {question.questiontags.map((tag) => (
                                        <Link to='/Tags' key={tag} className="ans-tag">
                                            {" "}
                                            {tag}{" "}
                                        </Link>
                                    ))}{" "}
                                    or
                                    <Link to="/Askquestion" style={{textDecoration: "none", color: "#009dff"}}>
                                        {" "}
                                        Ask your own question
                                    </Link>
                                </p>
                            </section>
                        </div>
                    ))}
                </>
            )}
        </div>
    )
};

export default Questiondetails;