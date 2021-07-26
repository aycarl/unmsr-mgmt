import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Form, Button } from "react-bootstrap";

import "./../../css/auth.styles.css";
import { userRole } from "./userRole";

const SignUp = () => {
  return (
    <div className="auth-container">
      <h2>UNM SR</h2>
      <p>Create a Manager Account</p>
      <br />
      <Form>
        <Form.Group controlId="loginFormEmailAddress">
          <Form.Label>Email Address</Form.Label>
          <Form.Control placeholder="Email email" type="email" />
        </Form.Group>
        <Form.Group controlId="loginFormPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="loginFormConfirmPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>
        <Form.Group controlId="loginFormAccounTypeCheckbox">
          <Form.Check 
            type="radio"
            name="userRole"
            value={userRole.organizationManager}
            label="I manage an organization"
          />
          <Form.Check 
            type="radio"
            name="userRole"
            value={userRole.communityManager}
            label="I manage the student community"
          />
        </Form.Group>
        <Button className="auth-button" variant="dark">
          Sign Up
        </Button>
      </Form>
      <Link to="/login">
        <Button className="auth-button" variant="secondary">
          I already Have an account
        </Button>
      </Link>
    </div>
  );
};

export default SignUp;
