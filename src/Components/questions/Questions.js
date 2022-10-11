import React from 'react';
import Options from './options';


const Questions = ({question}) => {
    return (
        <div className='border border-3 border-dark w-auto m-5 p-3 rounded-3'>
               <h3 className='bg-dark text-light rounded-3 m-2 p-2'>  {question.question}</h3> 
               {
                question.options.map(option =><Options key={option.id} option={option}></Options> )
               }

            
        </div>
    );
};

export default Questions;