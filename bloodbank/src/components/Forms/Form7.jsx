import React from 'react'
import { useState } from 'react';
import  Form  from 'react-bootstrap/Form';

const Form7 = () => {
    const [output, setOutput] = useState(null);
    const [formData, setFormData] = useState({
        id: '',
        role: ''
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
        <h3>Update the role of a staff member based on their Staff_ID.</h3>
        <Form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="id"
            placeholder="User ID"
            value={formData.id}
            onChange={handleChange}
            className="border p-2 mb-4 w-full"
            required
          />
          <input
            type="text"
            name="role"
            placeholder="New Role"
            value={formData.role}
            onChange={handleChange}
            className="border p-2 mb-4 w-full"
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Update Staff
          </button>
        </Form>
        {(output ==null)?<div>
          <h1>No Output Yet!!</h1>
          </div>:
          <div>
          <h1>Staff Updated Successfully!</h1>
          </div>
        }
        </>
      );
}

export default Form7