import React from "react";

import { Table } from "react-bootstrap";


// displays list of organization categories and the respective number of organizations
const OrgTableList = ({truncated}) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Category</th>
            <th>Number of Organizations</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default OrgTableList;
