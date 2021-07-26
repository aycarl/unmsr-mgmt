import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Col } from "react-bootstrap";

import OrgTitleList from "./../organization-components/org-title-list";

import { FetchAllOrganizationsFromDB } from "./../../redux/organization/organization-actions";

const Organizations = () => {

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
  return (
    <Col>
      <h4>Clubs & Organizations</h4>
      <hr />
      <OrgTitleList fetched={fetched} />
    </Col>
  );
}

export default Organizations