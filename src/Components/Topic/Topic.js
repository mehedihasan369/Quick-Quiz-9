import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Topic = ({topics}) => {
    
const {name,total,logo} = topics
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
        <Button variant="outline-dark fw-bold w-100 ">Lets Start</Button>
      </Card.Body>
    </Card>
        </div>
    );
};

export default Topic;