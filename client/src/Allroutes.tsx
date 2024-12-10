import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';

type AllroutesProps = {
    slidein: boolean;
    handleSlidein: () => void;
}

const Allroutes:React.FC<AllroutesProps> = ({slidein, handleSlidein}) => {
    return (
        <Routes>
            <Route path='/' element={<Home slidein={slidein} handleSlidein={handleSlidein}/>}>

            </Route>
        </Routes>
    )
}

export default Allroutes;