import React from 'react';
import { useRouteLoaderData } from 'react-router-dom';



const Home = () => {
    const topic = useRouteLoaderData
    return (
        <div>
            <h1>this is home</h1>
            
        </div>
    );
};

export default Home;