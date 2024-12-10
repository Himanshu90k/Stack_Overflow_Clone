import Question from "./Question";

export interface question {
    _id: string;
    upvote: string[];
    downvote: string[];
    noofanswers: number;
    questiontitle: string;
    questiontags: string[];
    askedon: Date;
    userposted: string;
};

type questionlist = question[];

type QuestionlistProps = {
    questionlist: questionlist;
};

const Questionlist:React.FC<QuestionlistProps> = ({questionlist}) => {
    return (
        <>
        {questionlist.map((question) => (
            <Question question={question} key={question._id}/>
        ))}
        </>
    )
};

export default Questionlist;