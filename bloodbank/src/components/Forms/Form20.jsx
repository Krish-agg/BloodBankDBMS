import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import React from 'react'
import { useState } from 'react';
import DataTable from './DataTable';
import axios from 'axios';

const Form20 = () => {

    async function buttonClick(e){

      e.preventDefault();
      
      axios.get(`http://localhost:8080/form20/${staffid}`)
      .then(function (res) {
        
        console.log(res);
        setOutput(res.data);
      })
      .catch(function (error) {
        
        console.log(error);
      })
      
    }

    const [output, setOutput] = useState(null);
    const [staffid, setStaffid] = useState([]);

    return (
      <>
      <h3>Retrieve all blood donations collected by a specific staff member</h3>
      <Form>
          <Form.Group className="mb-3">
            <Form.Label>Staff Member ID</Form.Label>
            <Form.Control type="text" placeholder="Enter Staff ID" onChange={(event)=>{
              setStaffid(event.target.value);
            }}/>
     
          </Form.Group>
    
          <Button variant="primary" type="submit" onClick = {buttonClick}>
            Submit
          </Button>
        </Form>
        <DataTable data={output} title="Blood Donation Details" />
        </>
      );
}

export default Form20;
