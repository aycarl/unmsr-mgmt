import React from "react";
import { useDispatch } from "react-redux";

import { Form, Col, Button } from "react-bootstrap";

import { CreateOrganization } from "../../redux/organization/organization-actions";

import "./../../css/form.styles.css";

// displays a page for creating a new organization
const NewOrg = () => {

  // state management for creating form fields
  const [name, setName] = React.useState("");
  const [nickname, setNickname] = React.useState("");
  const [fullDescription, setFullDescription] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [dateFounded, setDateFounded] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [websiteUrl, setWebsiteUrl] = React.useState("");
  const [shortDescription, setShortDescription] = React.useState("");
  const [organizationType, setOrganizationType] = React.useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    let newOrganization = {
      name,
      nickname,
      fullDescription,
      email,
      dateFounded,
      phoneNumber,
      location,
      websiteUrl,
      shortDescription,
      organizationType,
    };

    console.log(JSON.stringify(newOrganization));

    dispatch(CreateOrganization(newOrganization));
  };

  return (
    <div>
      <h2>New Organization</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label className="form-label">Name</Form.Label>
            <Form.Control
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter full official name of organization"
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridShortDesc">
            <Form.Label className="form-label">Short Description</Form.Label>
            <Form.Control
              name="short_description"
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
              placeholder="Enter short description of organization"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="form-label">Date Founded</Form.Label>
            <Form.Control
              name="date_founded"
              value={dateFounded}
              onChange={(e) => setDateFounded(e.target.value)}
              placeholder="MM/DD/YYYY"
            />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridDescription">
          <Form.Label className="form-label">Description</Form.Label>
          <Form.Control
            name="full_description"
            value={fullDescription}
            onChange={(e) => setFullDescription(e.target.value)}
            as="textarea"
            rows={3}
            placeholder="Enter full description of organization"
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridNickname">
            <Form.Label className="form-label">Nickname</Form.Label>
            <Form.Control
              name="nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="Enter organization nickname OR acronym"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="form-label">Email</Form.Label>
            <Form.Control
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter organization email"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPhoneNumber">
            <Form.Label className="form-label">Phone Number</Form.Label>
            <Form.Control
              name="phone_number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter organization phone number"
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridWebsite">
            <Form.Label className="form-label">Website</Form.Label>
            <Form.Control
              name="website_url"
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
              placeholder="www.example.unm.edu"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridOrgType">
            <Form.Label className="form-label">Organization Type</Form.Label>
            <Form.Control
              as="select"
              name="organization_type"
              value={organizationType}
              onChange={(e) => setOrganizationType(e.target.value)}
            >
              <option value="student_organization">Student Organization</option>
              <option value="department">Department</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridLocation">
          <Form.Label className="form-label">Location</Form.Label>
          <Form.Control
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            as="textarea"
            rows={3}
            placeholder="Enter full address/location of organization"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default NewOrg;
