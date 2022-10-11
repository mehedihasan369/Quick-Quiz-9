import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';





const Home = () => {
    const topics = useLoaderData();
   console.log(topics.data)
    return (
        <div>
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