import React from 'react'
import { useState } from 'react';
import  Form  from 'react-bootstrap/Form';
import axios from 'axios';

const Form8 = () => {
    const [output, setOutput] = useState(null);
    const [formData, setFormData] = useState({
        request_id: '',
        quantity: '',
      });
    
      const handleChange = (e) => {
        setFormData((prev) => ({
          ...prev,
          [e.target.name]: e.target.value
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const res = await axios.post('http://localhost:8080/form8', formData);
            setOutput(res.data);
          console.log('Update successful:', res.data);
        } catch (error) {
          console.error('Update failed:', error.response?.data || error.message);
        }
      };
    
      return (
        <>
        <h3>Modify the quantity required in a request record (for example, if the patient needs a revised amount of blood).</h3>
        <Form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="request_id"
            placeholder="Request ID"
            value={formData.request_id}
            onChange={handleChange}
            className="border p-2 mb-4 w-full"
            required
          />
          <input
            type="text"
            name="quantity"
            placeholder="New Quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="border p-2 mb-4 w-full"
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Update Request
          </button>
        </Form>
        {(output ==null)?<div>
          <h1>No Output Yet!!</h1>
          </div>:
          <div>
          <h1>Request Modified Successfully!</h1>
          </div>
        }
        </>
      );
}

export default Form8