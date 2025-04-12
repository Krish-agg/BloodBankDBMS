import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import React from 'react'
import { useState } from 'react';

const Form6 = () => {

    async function buttonClick(){
      
      axios.get(`/localhost:3000/form6/${noofTimes}`)
      .then(function (res) {
        
        console.log(res);
        setOutput(res.data);
      })
      .catch(function (error) {
        
        console.log(error);
      })
      
    }

    const [noofTimes, setNoOfTimes] = useState("");
    const [output, setOutput] = useState(null);

    return (
      <>
      <h3>Identify donors who have donated more than x times</h3>
      <Form>
          <Form.Group className="mb-3">
            <Form.Label>No of Times A Donor Donated</Form.Label>
            <Form.Control type="text" placeholder="Enter No of Times" onChange={(event)=>{
              setNoOfTimes(event.target.value);
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

export default Form6;
