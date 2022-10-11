import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../questions/Questions';

const TopQuiz = () => {
    const quiz = useLoaderData();
    console.log(quiz)
    const name = quiz.data.name
      return (
        <div>
            <h1>Here is {name} questions..</h1>

            {
         quiz.data.questions.map(question => <Questions key={question.id} question={question}></Questions>)
           }
            
            
        </div>
    );
};

export default TopQuiz;