import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import React from 'react'
import { useState } from 'react';

const Form19 = () => {

    async function buttonClick(){
      
      axios.get(`/localhost:3000/form19/${bloodGroup}`)
      .then(function (res) {
        
        console.log(res);
        setOutput(res.data);
      })
      .catch(function (error) {
        
        console.log(error);
      })
      
    }

    const [output, setOutput] = useState(null);
    const [bloodGroup, setBloodGroup] = useState("");

    return (
      <>
      <h3>Find all donations made by a specific donor (e.g., Donor ID 5)</h3>
      <Form>
          <Form.Group className="mb-3">
            <Form.Label>Donor ID</Form.Label>
            <Form.Control type="text" placeholder="Enter Donor ID" onChange={(event)=>{
              setBloodGroup(event.target.value);
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

export default Form19;
