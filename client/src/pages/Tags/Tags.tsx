import Leftsidebar from '../../Components/Leftsidebar/Leftsidebar';
import Taglist from './Taglist';
import './Tags.css';
import { tagsList } from './Tagslist';

interface TagsProps {
    slidein: boolean;
};

const Tags: React.FC<TagsProps> = ({ slidein }) => {
    return (
        <div className="home-container-1">
            <Leftsidebar slidein={slidein} />
            <div className="home-container-2">
                <h1 className="tags-h1">
                    Tags
                </h1>
                <p className="tags-p">A tag is akeyword or label that categorizes your question with other similar question.</p>
                <p className="tags-p">
                    Using the right tags makes it easier for others to find and answer your question
                </p>
                <div className="tags-list-container">
                    {tagsList.map((tag, index) => (
                        <Taglist tag={tag} key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Tags