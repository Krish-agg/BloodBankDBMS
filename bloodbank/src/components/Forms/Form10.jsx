import React from 'react'
import { useState } from 'react';
import  Form  from 'react-bootstrap/Form';
import axios from 'axios';

const Form10 = () => {
    const [output, setOutput] = useState(null);
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        role:'',
        bankid: ''
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
          const res = await axios.post('http://localhost:8080/form10', formData);
            setOutput(res.data);
          console.log('Update successful:', res.data);
        } catch (error) {
          console.error('Update failed:', error.response?.data || error.message);
        }
      };
    
      return (
        <>
        <h3>Insert new Staff member .</h3>
        <Form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="firstname"
            placeholder="FirstName"
            value={formData.firstname}
            onChange={handleChange}
            className="border p-2 mb-4 w-full"
            required
          />
          <input
            type="text"
            name="lastname"
            placeholder="LastName"
            value={formData.lastname}
            onChange={handleChange}
            className="border p-2 mb-4 w-full"
          />
          <input
            type="text"
            name="role"
            placeholder="Role"
            value={formData.role}
            onChange={handleChange}
            className="border p-2 mb-4 w-full"
          />
          <input
            type="text"
            name="bankid"
            placeholder="Bank ID"
            value={formData.bankid}
            onChange={handleChange}
            className="border p-2 mb-4 w-full"
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Insert Request
          </button>
        </Form>
        {(output ==null)?<div>
          <h1>No Output Yet!!</h1>
          </div>:
          <div>
          <h1>Request Inserted Successfully!</h1>
          </div>
        }
        </>
      );
}

export default Form10