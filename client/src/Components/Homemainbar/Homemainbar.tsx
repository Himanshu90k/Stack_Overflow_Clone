import './Homemainbar.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { UseSelector } from 'react-redux';
import Questionlist from './Questionlist';

const Homemainbar = () => {

    const user = 1;
    const location = useLocation();
    const questionlist = null;

    return (
        <div className='main-bar'>
            <div className='main-bar-header'>
                {location.pathname === '/' ? (
                    <h1>Top Question</h1>
                ) : (
                    <h1>All Question</h1>
                )}
                <button className='ask-btn'>Ask Questions</button>
            </div>
            <div>
                {questionlist === null ? (
                    <h1>Loading...</h1>
                ) : (
                    <>
                        <p>{questionlist.length} questions</p>
                        <Questionlist questionlist={questionlist}/>
                    </>
                )}
            </div>
        </div>
    )
};

export default Homemainbar;