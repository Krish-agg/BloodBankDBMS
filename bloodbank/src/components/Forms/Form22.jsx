import React from 'react'
import { useState } from 'react';
import  Form  from 'react-bootstrap/Form';
import axios from 'axios';

const Form22 = () => {
    const [output, setOutput] = useState(null);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        gender: '',
        dob: '',
        bloodtype:'',
        address:'',
        contact:''

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
          const res = await axios.post('http://localhost:8080/form18', formData);
            setOutput(res.data);
          console.log('Update successful:', res.data);
        } catch (error) {
          console.error('Update failed:', error.response?.data || error.message);
        }
      };
    
      return (
        <>
        <h3>Register a New Donor</h3>
        <Form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="border p-2 mb-4 w-full"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="border p-2 mb-4 w-full"
          />
          <input
            type="text"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            className="border p-2 mb-4 w-full"
          />
          <input
            type="text"
            name="gender"
            placeholder="Gender"
            value={formData.gender}
            onChange={handleChange}
            className="border p-2 mb-4 w-full"
          />

          <input
            type="text"
            name="contact"
            placeholder="Contact Number"
            value={formData.contact}
            onChange={handleChange}
            className="border p-2 mb-4 w-full"
          />
          <input
            type="text"
            name="bloodtype"
            placeholder="Blood Group"
            value={formData.bloodtype}
            onChange={handleChange}
            className="border p-2 mb-4 w-full"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="border p-2 mb-4 w-full"
          />
          <input
            type="date"
            name="dob"
            placeholder="Date of Birth"
            value={formData.dob}
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

export default Form22