import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';





const Home = () => {
    const topics = useLoaderData();
   console.log(topics.data)
    return (
        <div className='container'>
           <div className='d-flex '>
           <h1 className='w-50 pt-1 mt-2 align-self-center'>Test your skills with Quick Quizzes.</h1>
           <img src="https://static.vecteezy.com/system/resources/previews/008/214/810/original/quiz-set-in-doodle-style-illustration-icon-question-symbol-for-print-and-design-quiz-and-exam-concept-isolated-element-on-a-white-background-collection-of-sign-for-school-and-event-vector.jpg" alt="" className='h-50 w-50 ps-2'/>
            
           </div>
            <div className='m-5 p-2 d-flex  justify-content-between row'>
         {
            topics.data.map(topic=><Topic
            key={topic.id} topics={topic} ></Topic>)
         }
         </div>    
        </div>
    );
};

export default Home;