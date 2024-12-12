import { tagType } from "./Tags";

type TaglistProps = {
    tag: tagType;
};

const Taglist:React.FC<TaglistProps> = ({tag}) => {
    return (
        <div className="tag">
            <h5>{tag.tagName}</h5>
            <p>{tag.tagDesc}</p>
        </div>
    )
};

export default Taglist;