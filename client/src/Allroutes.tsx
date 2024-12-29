import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Askquestion from './pages/Askquestion/Askquestion';
import Auth from './pages/Auth/Auth';
import Question from './pages/Question/Question';
import Displayquestion from './pages/Question/Displayquestion';
import Tags from './pages/Tags/Tags';
import Users from './pages/Users/Users';
import Userprofile from './pages/Userprofile/Userprofile';

interface AllroutesProps {
    slidein: boolean;
};

const Allroutes: React.FC<AllroutesProps> = ({ slidein }) => {
    return (
        <Routes>
            <Route path='/' element={<Home slidein={slidein} />} />
            <Route path='/Askquestion' element={<Askquestion />} />
            <Route path='/Auth' element={<Auth />} />
            <Route path='/Question' element={<Question slidein={slidein} />} />
            <Route path='/Question/:id' element={<Displayquestion slidein={slidein} />} />
            <Route path='/Tags' element={<Tags slidein={slidein} />} />
            <Route path='/Users' element={<Users slidein={slidein} />} />
            <Route path='/Users/:id' element={<Userprofile slidein={slidein} />} />
        </Routes>
    );
};

export default Allroutes;