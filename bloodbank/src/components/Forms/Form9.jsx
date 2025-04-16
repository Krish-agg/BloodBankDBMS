import React from 'react'
import { useState } from 'react';
import  Form  from 'react-bootstrap/Form';
import axios from 'axios';
import DataTable from './DataTable';

const Form9 = () => {
    const [output, setOutput] = useState(null);
    const [formData, setFormData] = useState({
        bloodType: '',
        quantity: '',
      });

      const bloodBankData = [
        ['AIIMS Blood Bank', 'New Delhi'],
        ['Apollo Blood Bank', 'Chennai'],
        ['Fortis Blood Bank', 'Mumbai'],
        ['Narayana Health Blood Bank', 'Bangalore'],
        ['Kokilaben Dhirubhai Ambani Hospital Blood Bank', 'Mumbai'],
        ['Medanta Blood Bank', 'Gurgaon'],
        ['Max Super Speciality Hospital Blood Bank', 'New Delhi'],
        ['Artemis Hospitals Blood Bank', 'Gurgaon'],
        ['Global Hospitals Blood Bank', 'Hyderabad'],
        ['Manipal Hospitals Blood Bank', 'Bangalore'],
        ['Sir Ganga Ram Hospital Blood Bank', 'New Delhi'],
        ['Ruby Hall Clinic Blood Bank', 'Pune'],
        ['Lilavati Hospital Blood Bank', 'Mumbai'],
        ['Christian Medical College Blood Bank', 'Vellore'],
        ['Jaslok Hospital Blood Bank', 'Mumbai'],
        ['Sahyadri Hospitals Blood Bank', 'Pune'],
        ['Columbia Asia Hospitals Blood Bank', 'Bangalore'],
        ['Care Hospitals Blood Bank', 'Hyderabad'],
        ['BLK Super Speciality Hospital Blood Bank', 'New Delhi'],
        ['Wockhardt Hospitals Blood Bank', 'Mumbai'],
        ['Amrita Institute of Medical Sciences Blood Bank', 'Kochi'],
        ['Sri Ramachandra Medical Centre Blood Bank', 'Chennai'],
        ['KIMS Hospitals Blood Bank', 'Hyderabad'],
        ['PSG Hospitals Blood Bank', 'Coimbatore'],
        ['Breach Candy Hospital Blood Bank', 'Mumbai'],
        ['Sanjay Gandhi Postgraduate Institute of Medical Sciences Blood Bank', 'Lucknow'],
        ['Rajiv Gandhi Cancer Institute and Research Centre Blood Bank', 'New Delhi'],
        ['Tata Memorial Hospital Blood Bank', 'Mumbai'],
        ['All India Institute of Medical Sciences Blood Bank', 'Bhubaneswar'],
        ['Post Graduate Institute of Medical Education and Research Blood Bank', 'Chandigarh'],
      ];
    
      const handleChange = (e) => {
        setFormData((prev) => ({
          ...prev,
          [e.target.name]: e.target.value
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const res = await axios.post('http://localhost:8080/form9', formData);
            setOutput(res.data);
          console.log('Update successful:', res.data);
        } catch (error) {
          console.error('Update failed:', error.response?.data || error.message);
        }
      };
    
      return (
        <>
        <h3>Insert a new record into the Requests table .</h3>
        <Form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="bloodType"
            placeholder="BloodType"
            value={formData.bloodType}
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

          <input
            type="number"
            name="bankid"
            placeholder="Enter Bank ID after chosing from below"
            value={formData.bankid}
            onChange={handleChange}
            className="border p-2 mb-4 w-full"
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Insert Request
          </button>
        </Form>
        {(output ==null)?<div>
          <h3>No Output Yet!!</h3>
          </div>:
          <div>
          <h3>Request Inserted Successfully!</h3>
          </div>
        }
          <DataTable data={bloodBankData} />
        </>
      );
}

export default Form9