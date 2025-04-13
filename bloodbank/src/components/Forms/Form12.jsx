import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

import React from 'react'
import { useState } from 'react';
import DataTable from "./DataTable";

const Form12 = () => {

    async function buttonClick(e){
      e.preventDefault();
      
      axios.get(`http://localhost:8080/form12/${bloodGroup}`)
      .then(function (res) {
        
        console.log(res);
        setOutput(res.data);
      })
      .catch(function (error) {
        
        console.log(error);
      })
      
    }

    const [bloodGroup, setBloodGroup] = useState(null);
    const [output, setOutput] = useState([]);

    return (
      <>
      <h3>Find blood banks that have handled a specific blood type {" (e.g., A-)"}</h3>
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
        <DataTable data={output} title="Blood Banks" />
        </>
      );
}

export default Form12;
