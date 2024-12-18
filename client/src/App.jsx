import { fetchallusers } from './action/users';
import Navbar from './Components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Allroutes from './Allroutes';
import './App.css';
import { useDispatch } from 'react-redux';

function App() {

  const [slidein, setSlidein] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchallusers());
  }, [dispatch]);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setSlidein(false);
    }
  }, []);

  const handleSlidein = () => {
    if (window.innerWidth <= 768) {
      setSlidein((state) => !state);
    }
  };

  return (
    <div className='App'>
      <Router>
        <Navbar handleSlidein={handleSlidein} />
        <Allroutes slidein={slidein} handleSlidein={handleSlidein} />
      </Router>
    </div>
  );
};

export default App;
