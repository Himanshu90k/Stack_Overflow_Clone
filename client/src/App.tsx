import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Allroutes from './Allroutes';
import { useDispatch } from 'react-redux';
import { fetchUsersAsync } from './state/users/usersSlice';
import { fetchAllQuestionAsync } from './state/question/questionSlice';
import { AppDispatch } from './state/store';

function App() {

  const [slidein, setslidein] = useState(true);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUsersAsync());
    dispatch(fetchAllQuestionAsync());
  }, [dispatch]);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setslidein(false)
    }
  }, []);
  
  const handleslidein = () => {
    if (window.innerWidth <= 768) {
      setslidein((state) => !state);
    }
  };

  return (
    <div className="App">
      <Router>
        <Navbar handleslidein={handleslidein} />
        <Allroutes slidein={slidein} />
      </Router>
    </div>
  );
};

export default App;
