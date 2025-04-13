import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import DataTable from "./DataTable";

const Form19 = () => {

    async function buttonClick(e){

      e.preventDefault();
      
      axios.get(`http://localhost:8080/form19/${donorid}`)
      .then(function (res) {
        
        console.log(res);
        setOutput(res.data);
      })
      .catch(function (error) {
        
        console.log(error);
      })
      
    }

    const [output, setOutput] = useState([]);
    const [donorid, setDonorid] = useState("");

    return (
      <>
      <h3>Find all donations made by a specific donor (e.g., Donor ID 5)</h3>
      <Form>
          <Form.Group className="mb-3">
            <Form.Label>Donor ID</Form.Label>
            <Form.Control type="text" placeholder="Enter Donor ID" onChange={(event)=>{
              setDonorid(event.target.value);
            }}/>
     
          </Form.Group>
    
          <Button variant="primary" type="submit" onClick = {buttonClick}>
            Submit
          </Button>
        </Form>
        <DataTable data={output} title="Donation Details" />
        </>
      );
}

export default Form19;
