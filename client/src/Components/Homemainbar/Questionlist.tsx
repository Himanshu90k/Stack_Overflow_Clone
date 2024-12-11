import Question from "./Question";

export interface answer {
    answerbody: string;
    useranswered: string;
    userid: string;
    answeredon: string;
};

export interface question {
    _id: string;
    questiontitle: string;
    questionbody: string;
    questiontags: string[];
    noofanswers: number;
    upvote: string[];
    downvote: string[];
    userposted: string;
    userid: string;
    askedon: string;
    answer: answer[];
};

export type questionlist = question[];

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