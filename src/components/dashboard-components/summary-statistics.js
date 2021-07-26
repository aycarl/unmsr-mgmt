import React from "react";

import { Row, Col } from "react-bootstrap";

const SummaryStatisticsCard = ({title, value}) => {
  return (
    <Col lg={3} md={3} sm={6} >
      <div className="statistics-card" >
        <p className="statistics-title" >{value}</p>
        <p className="statistics-value" >{title}</p>
      </div>
    </Col>
  );
}

const SummaryStatistics = () => {

  const data = [
    {
      id: 1,
      title: "Active Organizations",
      value: 15
    },
    {
      id: 2,
      title: "Total Events",
      value: 65
    },
    {
      id: 3,
      title: "Active Student Memberships",
      value: 215
    },
    {
      id: 4,
      title: "New Organizations Pending Review",
      value: 3
    }
  ];

  return (
    <section>
      <Row>
        <Col>
          <h2>Summary Statistics</h2>
          <hr />
        </Col>
      </Row>
      <Row>
        {
          data.map(
            (statistic, idx) => <SummaryStatisticsCard key={idx} title={statistic.title} value={statistic.value} />
          )
        }
      </Row>
    </section>
  );
};

export default SummaryStatistics;
