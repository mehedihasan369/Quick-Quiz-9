import React from 'react';

const Blog = () => {
    return (
        <div>
            
            <h1>Quick Quiz Blogs....</h1>

           <div  className='border border-3 border-dark w-auto m-5 p-1 rounded-3'>
           <h3 className='bg-dark text-light rounded-3 m-2 p-2'>What is the purpous of React Router?</h3>
           <p  className='fw-semibold d-flex'>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
           </div>



           <div  className='border border-3 border-dark w-auto m-5 p-1 rounded-3'>
           <h3 className='bg-dark text-light rounded-3 m-2 p-2'>How does context API works?</h3>
           <p  className='fw-semibold d-flex'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
           </div>


           <div  className='border border-3 border-dark w-auto m-5 p-1 rounded-3'>
           <h3 className='bg-dark text-light rounded-3 m-2 p-2'>About useRef..</h3>
           <p  className='fw-semibold d-flex'>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
           </div>
        </div>
    );
};

export default Blog;