import React from 'react'
import { useState } from 'react';
import  Form  from 'react-bootstrap/Form';

const Form11 = () => {
    const [output, setOutput] = useState(null);
    const [formData, setFormData] = useState({
        id:''
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
          const res = await axios.post('http://localhost:5000/api/update-user', formData);
            setOutput(res.data);
          console.log('Update successful:', res.data);
        } catch (error) {
          console.error('Update failed:', error.response?.data || error.message);
        }
      };
    
      return (
        <>
        <h3>Remove a request from the database after it has been fulfilled </h3>
        <Form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="id"
            placeholder="ID"
            value={formData.id}
            onChange={handleChange}
            className="border p-2 mb-4 w-full"
            required
          />
          
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Delete Request
          </button>
        </Form>
        {(output ==null)?<div>
          <h1>No Output Yet!!</h1>
          </div>:
          <div>
          <h1>Request Deleted Successfully!</h1>
          </div>
        }
        </>
      );
}

export default Form11