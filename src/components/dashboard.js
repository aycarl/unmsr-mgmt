import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./../component_styles/dashboard.styles.css";

import LargeButton from "./large-button";
import OrgTableList from "./org-table-list";

const Dashboard = () => {
  return (
    <Container fluid>
      <h1>Dashboard</h1>
      <Row className="section">
        <Col>
          <LargeButton title="Add Organization" url="/new-org" />
        </Col>
        <Col>
          <LargeButton title="Add Event" url="/events" />
        </Col>
      </Row>
      <Row className="section">
        <Col>
          <h4>Clubs & Organizations</h4>
          <hr />
          <OrgTableList />
        </Col>
        <Col>
          <h4>Events</h4>
          <hr />
          <p>Upcoming</p>
          <hr />
          <Row></Row>
          <p>Past</p>
          <hr />
          <Row></Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
