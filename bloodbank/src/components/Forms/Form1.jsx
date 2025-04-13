import Button from 'react-bootstrap/Button';


import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import DataTable from './DataTable';

const Form1 = () => {

    async function buttonClick(){

        axios.get(`http://localhost:8080/form1`)
      .then(function (res) {
        
        console.log(res.data);
        setOutput((res.data));
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
        
          <DataTable data={output} title={"Donor's Details"} />
        </>
      );
}

export default Form1;
