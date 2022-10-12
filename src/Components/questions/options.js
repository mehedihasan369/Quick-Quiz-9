// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import  { useState } from 'react';
// import Toast from 'react-bootstrap/Toast';

// const Options = ({option},{correctAnswer}) => {
//   console.log(correctAnswer)

//  const optionToast = (value) => {
//   // if (value === {}) {
//   //   return setShow(true);
//   // } else {
//   //   return setShow(false);
//   // }
//   return setShow(true);

//   }
//   const [show, setShow] = useState(false);
  
  
//     return (
//       <div>
//          <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
//           <Toast.Header>
//             <img
//               src="holder.js/20x20?text=%20"
//               className="rounded me-2"
//               alt=""
//             />
//             <strong className="me-auto">Bootstrap</strong>
//             <small>11 mins ago</small>
//           </Toast.Header>
//           <Toast.Body> you're reading this text in a Toast!</Toast.Body>
//         </Toast>
      
//         <div className=''>
//    <Button variant="outline-dark w-100 m-1 fw-semibold " onClick={() => optionToast({option})}>{option}</Button>
//         </div>
//         </div>
//     );
// };

// export default Options;