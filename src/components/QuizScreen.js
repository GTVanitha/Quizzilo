import { useState } from 'react';
import QuestionList from '../data/questions.json';
import Question from './Question';
import QuizResult from './QuizResult';

function QuizScreen(){
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [markedAnswer, setMarkedAnswer] = useState(new Array(QuestionList.length));
    const isLastQuestion = currentQuestionIndex === QuestionList.length;

return (
    <>
    <div className='quiz-screen'>
        { isLastQuestion ? 
        (
            <QuizResult></QuizResult>
        ): (
            <Question 
            question={QuestionList[currentQuestionIndex]}
            totalQuestions={QuestionList.length}
            currentQuestion={currentQuestionIndex+1}
            setAnswer={(index) => { setMarkedAnswer((arr)=>{
                let newArr = [...arr];
                newArr[currentQuestionIndex] = index
            })}}></Question>
        )}
    </div>
    </>
)
}

export default QuizScreen;