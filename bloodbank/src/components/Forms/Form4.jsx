import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import React from 'react'
import { useState } from 'react';

const Form4 = () => {

    async function buttonClick(){
      
      axios.get(`/localhost:3000/form4/${bloodGroup}`)
      .then(function (res) {
        
        console.log(res);
        setOutput(res.data);
      })
      .catch(function (error) {
        
        console.log(error);
      })
      
    }

    const [bloodGroup, setBloodGroup] = useState("");
    const [output, setOutput] = useState(null);

    return (
      <>
        <h3>Find donors with a specific blood type (e.g., O+)</h3>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Blood Group</Form.Label>
            <Form.Control type="text" placeholder="Enter Blood Group" onChange={(event)=>{
              setBloodGroup(event.target.value);
            }}/>
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>
    
          <Button variant="primary" type="submit" onClick = {buttonClick}>
            Submit
          </Button>
        </Form>
        {(output==null)?<div>
          <h1>No Output Yet!!</h1>
          </div>:
          <div>
          <h1>Output</h1>
          </div>
        }
        </>
      );
}

export default Form4;
