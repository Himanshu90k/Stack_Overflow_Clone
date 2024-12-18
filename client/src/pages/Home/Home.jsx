import Leftsidebar from "../../Components/Leftsidebar/Leftsidebar";
import Rightsidebar from "../../Components/Rightsidebar/Rightsidebar";
import Homemainbar from "../../Components/Homemainbar/Homemainbar";
import '../../App.css';


const Home = ({slidein}) => {
    return (
        <div className="home-container-1">
            <Leftsidebar slidein={slidein}/>
            <Homemainbar />
            <Rightsidebar />
        </div>
    )
};

export default Home;