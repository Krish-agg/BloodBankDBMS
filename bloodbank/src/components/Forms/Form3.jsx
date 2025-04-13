import Button from 'react-bootstrap/Button';


import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const Form3 = () => {

    async function buttonClick(){

        axios.get(`http://localhost:8080/form3`)
      .then(function (res) {
        
        console.log(res);
        setOutput(JSON.stringify(res.data));
      })
      .catch(function (error) {
        
        console.log(error);
      })
      
      
    }

    const [output, setOutput] = useState(null);

    return (
      <>
        <h3>List available blood stock by blood group</h3>
    
          <Button variant="primary" type="submit" onClick = {buttonClick}>
            Submit
          </Button>
        
        {(output==null)?<div>
          <h1>No Output Yet!!</h1>
          </div>:
          <div>
          <h5>{output}</h5>
          </div>
        }
        </>
      );
}

export default Form3;
