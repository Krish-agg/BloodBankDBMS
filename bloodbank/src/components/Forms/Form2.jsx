import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import DataTable from './DataTable';

const Form2 = () => {

    async function buttonClick(e){
      
      e.preventDefault();
      console.log(noofmonths);
      axios.get(`http://localhost:8080/form2/${noofmonths}`)
      .then(function (res) {
        
        console.log(res.data);
        setOutput((res.data));
      })
      .catch(function (error) {
        
        console.log(error);
      })
      
    }

    const [noofmonths, setNoofmonths] = useState("");
    const [output, setOutput] = useState(null);

    return (
      <>
        <h3>Find all blood donations made in the last x months</h3>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>No of months</Form.Label>
            <Form.Control type="text" placeholder="Enter No of Months Intervals" onChange={(event)=>{
              setNoofmonths(event.target.value);
            }}/>
            
          </Form.Group>
    
          <Button variant="primary" type="submit" onClick = {buttonClick}>
            Submit
          </Button>
        </Form>
        <DataTable data={output} />
        </>
      );
}

export default Form2;
