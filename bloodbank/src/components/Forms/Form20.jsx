import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import React from 'react'
import { useState } from 'react';

const Form20 = () => {

    async function buttonClick(){
      
      axios.get(`/localhost:3000/form20/${bloodGroup}`)
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
      <h3>Retrieve all blood donations collected by a specific staff member</h3>
      <Form>
          <Form.Group className="mb-3">
            <Form.Label>Staff Member ID</Form.Label>
            <Form.Control type="text" placeholder="Enter Staff ID" onChange={(event)=>{
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

export default Form20;
