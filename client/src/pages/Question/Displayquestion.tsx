import Leftsidebar from "../../Components/Leftsidebar/Leftsidebar";
import Rightsidebar from "../../Components/Rightsidebar/Rightsidebar";
import Questiondetails from "./Questiondetails";

type DisplayquestionProps = {
    slidein: boolean;
};

const Displayquestion:React.FC<DisplayquestionProps> = ({slidein}) => {
    return (
        <div className="home-container-1">
            <Leftsidebar slidein={slidein}/>
            <div className="home-container-2">
                <Questiondetails />
                <Rightsidebar />
            </div>
        </div>
    )
};

export default Displayquestion;