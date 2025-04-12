import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import React from 'react'
import { useState } from 'react';

const Form13 = () => {

    async function buttonClick(){
      
      axios.get(`/localhost:3000/form13/`)
      .then(function (res) {
        
        console.log(res);
        setOutput(true);
      })
      .catch(function (error) {
        
        console.log(error);
      })
      
    }

    const [output, setOutput] = useState(false);

    return (
      <>
        <h3>Retrieve All Pending Requests</h3>
        <Form>
    
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



export default Form13;
