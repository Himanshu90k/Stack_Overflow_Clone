import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Askquestion from './pages/Askquestion/Askquestion';

type AllroutesProps = {
    slidein: boolean;
    handleSlidein: () => void;
}

const Allroutes:React.FC<AllroutesProps> = ({slidein, handleSlidein}) => {
    return (
        <Routes>
            <Route path='/' element={<Home slidein={slidein} handleSlidein={handleSlidein}/>} />
            <Route path='/Askquestion' element={<Askquestion />} />
        </Routes>
    )
}

export default Allroutes;