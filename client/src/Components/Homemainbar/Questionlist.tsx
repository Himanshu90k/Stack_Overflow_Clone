import Question from './Question';
import { questionState } from '../../state/question/questionSlice'

interface QuestionlistProps {
    questionlist: questionState[];
};

const Questionlist: React.FC<QuestionlistProps> = ({ questionlist }) => {
    // console.log(questionlist)
    return (
        <>
            {questionlist.map((question) => (
                <Question question={question} key={question._id} />
            ))}
        </>
    )
}

export default Questionlist