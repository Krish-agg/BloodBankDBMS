import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import DataTable from "./DataTable";

const Form14 = () => {

    async function buttonClick(e){

      e.preventDefault();
      
      axios.get(`http://localhost:8080/form14`)
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
      <h3>Find the total quantity of blood requested per blood bank</h3>
        <Form>
          
    
          <Button variant="primary" type="submit" onClick = {buttonClick}>
            Submit
          </Button>
        </Form>
        <DataTable data={output} title="Blood Bank Details" />
        </>
      );
}

export default Form14;
