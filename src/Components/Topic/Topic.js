import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Topic = ({topics}) => {
    
const {name,total,logo,id} = topics
    // console.log(topics.name)
    return (
        <div className='col-sm  mb-5 '>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" className='bg-secondary' src={logo} />
      <Card.Body>
        <Card.Title className='fw-bold fs-5'>{name}</Card.Title>
        <Card.Text className='fw-semibold'>
          {total} Questions
        </Card.Text>
        
        <Link to={`/quiz/${id}`} className="outline-dark text-decoration-none btn btn-outline-dark fw-bold w-100 ">Lets Start</Link>
      </Card.Body>
    </Card>

   
        </div>
    );
};

export default Topic;