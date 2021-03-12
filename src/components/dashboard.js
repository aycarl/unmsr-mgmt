import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./../component_styles/dashboard.styles.css";

import LargeButton from "./large-button";

const Dashboard = () => {
  return (
    <Container fluid>
      <h1>Dashboard</h1>
      <Row>
        <Col>
          <LargeButton title="Add Organization" url="/organisations" />
        </Col>
        <Col>
          <LargeButton title="Add Event" url="/events" />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
