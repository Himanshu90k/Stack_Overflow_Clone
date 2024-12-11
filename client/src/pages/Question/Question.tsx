import Leftsidebar from "../../Components/Leftsidebar/Leftsidebar";
import Rightsidebar from "../../Components/Rightsidebar/Rightsidebar";
import Homemainbar from "../../Components/Homemainbar/Homemainbar";
import '../../App.css';

type QuestionProps = {
    slidein: boolean;
};

const Question:React.FC<QuestionProps> = ({slidein}) => {
    return (
        <div className="home-container-1">
            <Leftsidebar slidein={slidein}/>
            <div className="home-container-2">
                <Homemainbar />
                <Rightsidebar />
            </div>
        </div>
    )
};

export default Question;