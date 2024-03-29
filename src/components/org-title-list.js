import React from "react";
import { useSelector } from "react-redux";

import { Card } from "react-bootstrap";

import { selectAllOrganizations } from "../redux/organization/organization-selectors";

// displays list of organization categories and the respective number of organizations
const OrgTitleList = ({ fetched }) => {
  const listOfOrganizations = useSelector(selectAllOrganizations);

  console.log("orgs list: " + listOfOrganizations);

  return (
    <div>
      {fetched && listOfOrganizations ? (
        listOfOrganizations.map((org) => (
          <Card key={org.id}>
            <Card.Body>{org.name}{' '}({org.nickname})</Card.Body>
          </Card>
        ))
      ) : (
        <Card>
          <Card.Body>No organizations yet!</Card.Body>
        </Card>
      )}
    </div>
  );
};

export default OrgTitleList;
