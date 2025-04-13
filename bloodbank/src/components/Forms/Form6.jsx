import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import DataTable from './DataTable';

const Form6 = () => {

    async function buttonClick(e){
      e.preventDefault();
      
      axios.get(`http://localhost:8080/form6/${noofTimes}`)
      .then(function (res) {
        
        console.log(res);
        setOutput((res.data));
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
        <DataTable data={output} title={"Donor's Details"} />
        </>
      );
}

export default Form6;
