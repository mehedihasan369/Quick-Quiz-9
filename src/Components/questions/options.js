import React from 'react';
import Form from 'react-bootstrap/Form';

const Options = ({option}) => {
    return (
        <div className='fw-semibold d-flex'>
  <Form>
      {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label= {option}
            name="group1"
            type={type}
            id={`inline-${type}`}
          />
          

        </div>
      ))}
    </Form>
        </div>
    );
};

export default Options;