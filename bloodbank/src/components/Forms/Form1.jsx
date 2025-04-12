import Button from 'react-bootstrap/Button';


import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const Form1 = () => {

    async function buttonClick(){

        axios.get(`/localhost:8080/`)
      .then(function (res) {
        
        console.log(res.data);
        setOutput(res.data);
      })
      .catch(function (error) {
        
        console.log(error);
      })
      
      
    }

    const [output, setOutput] = useState(null);

    return (
      <>
        <h3>Retrieve all donor's details</h3>
    
          <Button variant="primary" type="submit" onClick = {buttonClick}>
            Submit
          </Button>
        
        {(output==null)?<div>
          <h1>No Output Yet!!</h1>
          </div>:
          <div>
          <h1>{output}</h1>
          </div>
        }
        </>
      );
}

export default Form1;
