import React from 'react';
import  { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';
import './Questions.css'


const Questions = ({question}) => {
  // console.log({question})
const rightAnswer = question.correctAnswer
console.log(rightAnswer)
  // const [name, setName] =useState()
  const optionToast = (abc) => {
    console.log(abc)
    if (abc === rightAnswer ) {
       setShow(true);
    }
    else {
      setShow2(true)
    }
   
    }

     

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    
   
    return (<div>
                    
        <div className='border border-3 border-dark w-auto m-5 p-3 rounded-3'>
          
 
               <h3 className='bg-dark text-light rounded-3 m-2 p-2'>  {question.question}</h3> 
               <div className=''>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide className='bg-dark text-light'>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2 "
              alt=""
            />
            <strong className="me-auto ">Correct Answer is _</strong>
            <small></small>
          </Toast.Header>
          <Toast.Body>{question.correctAnswer}</Toast.Body>
        </Toast>
        </div>   


        <div>
        <Toast onClose={() => setShow2(false)} show={show2} delay={3000} autohide className='bg-danger text-dark'>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Your answer is wrong!!!</strong>
            <small></small>
          </Toast.Header>
          <Toast.Body>Please, try again..</Toast.Body>
        </Toast>
        </div>   
             <div className='options'>
             {
                // question.options.map(option =><Options key={option.id} option={option} correctAnswer={question}></Options> )
                question.options.map(option => <Button  onClick={() => optionToast(option)} variant="outline-dark w-100 m-1 fw-semibold "> {option} </Button>
                )
               }
             </div>
               <Button onClick={() => setShow(true)} variant=" w-100  m-1 fw-semibold "><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"  className="icon">
  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
  <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
</svg> </Button>

              
</div>

        </div>
    );
};

export default Questions;