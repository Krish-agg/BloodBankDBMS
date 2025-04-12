import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import React from 'react'
import { useState } from 'react';

const Form5 = () => {

    async function buttonClick(){
      
      axios.get(`/localhost:3000/form5/${noofyears}`)
      .then(function (res) {
        
        console.log(res);
        setOutput(res.data);
      })
      .catch(function (error) {
        
        console.log(error);
      })
      
    }

    const [noofyears, setNoOfYears] = useState("");
    const [output, setOutput] = useState(null);

    return (
      <>
      <h3>Find recipients who requested blood in the last x years</h3>
      <Form>
          <Form.Group className="mb-3">
            <Form.Label>No of Years</Form.Label>
            <Form.Control type="text" placeholder="Enter No of Years Intervals" onChange={(event)=>{
              setNoOfYears(event.target.value);
            }}/>
            
          </Form.Group>
    
          <Button variant="primary" type="submit" onClick = {buttonClick}>
            Submit
          </Button>
        </Form>
        {(output ==null)?<div>
          <h1>No Output Yet!!</h1>
          </div>:
          <div>
          <h1>Output</h1>
          </div>
        }
        </>
      );
}

export default Form5;
