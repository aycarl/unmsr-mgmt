import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

import "./../component_styles/dashboard.styles.css";

import { FetchAllOrganizationsFromDB } from "./../redux/organization/organization-actions";

import LargeButton from "./large-button";
import OrgTitleList from "./org-title-list";

class Dashboard extends React.Component {
  constructor(props) {
    super();
    this.state = {
      fetched: false,
    };
  }

  componentDidMount() {
    if (!this.state.fetched){
      try {
        this.props.fetchOrgsFromDB();
        this.setState({fetched: true});
      } catch (error) {
        console.log(error + " while fetching orgs!");
      }
    }
  }

  render() {
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
        <Row className="section">
          <Col>
            <h4>Clubs & Organizations</h4>
            <hr />
            <OrgTitleList />
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
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchOrgsFromDB: () => dispatch(FetchAllOrganizationsFromDB()),
});

export default connect(null, mapDispatchToProps)(Dashboard);
