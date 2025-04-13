import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import DataTable from './DataTable';

const Form5 = () => {

    async function buttonClick(e){
      e.preventDefault();
      
      axios.get(`http://localhost:8080/form5/${noofyears}`)
      .then(function (res) {
        
        console.log(res);
        setOutput((res.data));
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
        <DataTable data={output} title={"Recipient's Details"} />
        </>
      );
}

export default Form5;
