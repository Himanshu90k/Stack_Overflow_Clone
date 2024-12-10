import Navbar from './Components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Allroutes from './Allroutes';
import './App.css';

function App() {

  const [slidein, setSlidein] = useState(true);
    useEffect(() => {
        if(window.innerWidth <= 768) {
            setSlidein(false);
        }
    },[]);

    const handleSlidein = () => {
        if(window.innerWidth <= 768) {
            setSlidein((state) => !state);
        }
    };

  return (
    <div className='App'>
      <Router>
        <Navbar handleSlidein = {handleSlidein}/>
        <Allroutes slidein={slidein} handleSlidein={handleSlidein}/>
      </Router>
    </div>
  );
};

export default App;
