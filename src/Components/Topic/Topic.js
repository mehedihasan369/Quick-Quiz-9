import React from 'react';

const Topic = ({topics}) => {
    
const {name} = topics
    // console.log(topics.name)
    return (
        <div>
            <h1>name: {name}</h1>
        </div>
    );
};

export default Topic;