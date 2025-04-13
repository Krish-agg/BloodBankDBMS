import Table from 'react-bootstrap/Table';
import React from 'react';

const DataTable = ({ data, title }) => {
  
  if (!Array.isArray(data) || data.length === 0) {
    return <h3>No Data To Display !</h3>;
  }

  const headers = Object.keys(data[0]);

  return (
    <div className="mt-4">
      {title && <h4>{title}</h4>}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            {headers.map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              {headers.map((key) => (
                <td key={key}>{item[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DataTable;
