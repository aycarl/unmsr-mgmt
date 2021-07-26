import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

import "./../component_styles/dashboard.styles.css";

import { FetchAllOrganizationsFromDB } from "../redux/organization/organization-actions";

import LargeButton from "./large-button";
import OrgTitleList from "./org-title-list";
import SummaryStatistics from "./dashboard-components/summary-statistics";

const Dashboard = () => {

  const dispatch = useDispatch();

  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    if (!fetched) {
      try {
        dispatch(FetchAllOrganizationsFromDB());
        setFetched(true);
      } catch (error) {
        console.log(error + " while fetching orgs!");
      }
    }
  }, [fetched, dispatch]);

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
      <Row className="section">
        <Col>
          <h4>Clubs & Organizations</h4>
          <hr />
          <OrgTitleList fetched={fetched} />
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
