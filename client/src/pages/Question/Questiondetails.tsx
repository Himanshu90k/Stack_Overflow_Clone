import { useState } from "react";
import moment from "moment";
import copy from 'copy-to-clipboard';
import upvote from '../../assets/sort-up.svg';
import downvote from '../../assets/sort-down.svg';
import './Question.css';
import Avatar from "../../Components/Avatar/Avatar";
import Displayanswer from "./Displayanswer";
import { Link } from "react-router-dom";

const Questiondetails = () => {

    const [answer, setAnswer] = useState("");
    const questionlist = null;

    return (
        <div className="question-details-page">
            {questionlist === null ? (
                <h1>Loading...</h1>
            ) : (
                <>
                    {questionlist.data.filter((question) => question._id === id).map((question) => (
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
                                            <Link></Link>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    ))}
                </>
            )}
        </div>
    )
};

export default Questiondetails;