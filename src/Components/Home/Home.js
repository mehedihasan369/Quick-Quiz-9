import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';





const Home = () => {
    const topics = useLoaderData();
   console.log(topics.data)
    return (
        <div>
         <h2> ei bar mil </h2>
         {
            topics.data.map(topic=><Topic
            key={topic.id} topics={topic} ></Topic>)
         }
         
            
        </div>
    );
};

export default Home;