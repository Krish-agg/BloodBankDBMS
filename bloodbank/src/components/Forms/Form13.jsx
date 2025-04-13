import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import DataTable from "./DataTable";

const Form13 = () => {

    async function buttonClick(e){

      e.preventDefault();
      
      axios.get(`http://localhost:8080/form13/`)
      .then(function (res) {
        
        console.log(res);
        setOutput(res.data);
      })
      .catch(function (error) {
        
        console.log(error);
      })
      
    }

    const [output, setOutput] = useState([]);

    return (
      <>
        <h3>Retrieve All Pending Requests</h3>
        <Form>
    
          <Button variant="primary" type="submit" onClick = {buttonClick}>
            Submit
          </Button>
        </Form>
        <DataTable data={output} title="Pending Requests" />
        </>
      );
}



export default Form13;
