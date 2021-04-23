import React from "react";
import { Link } from "react-router-dom";

import { Form, Button } from "react-bootstrap";

import "./../../component_styles/auth.styles.css";

const Login = () => {
  return (
    <div className="auth-container">
      <h2>UNM SR</h2> <p>Manager Login</p>
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
        <Form.Group controlId="loginFormAccounTypeCheckbox">
          <Form.Check type="switch" label="I am a UNM Student Activities Center Representative" />
        </Form.Group>
        <Button className="auth-button" variant="dark">
          Log in
        </Button>
      </Form>
      <Link to="/signup">
        <Button className="auth-button" variant="secondary" >
          Sign Up
        </Button>
      </Link>
    </div>
  );
};

export default Login;
