import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./../../css/dashboard.styles.css";

import LargeButton from "./../shared-components/large-button";
import SummaryStatistics from "../dashboard-components/summary-statistics";

const Dashboard = () => {

  console.log("dashbaard loads");

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
      <SummaryStatistics />
    </Container>
  );
};

export default Dashboard;
