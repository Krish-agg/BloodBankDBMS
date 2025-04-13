import Button from 'react-bootstrap/Button';


import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import DataTable from './DataTable';

const Form3 = () => {

    async function buttonClick(){

        axios.get(`http://localhost:8080/form3`)
      .then(function (res) {
        
        console.log(res);
        setOutput((res.data));
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
        
          <DataTable data={output} title={"Blood Stock Details"} />
        </>
      );
}

export default Form3;
