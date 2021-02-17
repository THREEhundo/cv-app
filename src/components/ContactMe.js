import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import edit from "../edit.png";
import "./ContactMe.css";
import "../App.css";
import React from "react";

const ContactMe = (props) => {
  const formatPhone = (props) => {
    const cell = props;
    const areaCode = cell.slice(0, 3);
    const three = cell.slice(3, 6);
    const four = cell.slice(6, 10);
    return areaCode.concat("-", three).concat("-", four);
  };

  const hideDiv = (props) => (props ? "hide" : "");

  const hideInput = (props) => (props ? "" : "hide");

  return (
    <Container className="outline offSetTop" fluid="sm">
      <h4>Contact Me</h4>
      <div>
        <div className={hideDiv(props.contactInput)} id="name">
          {props.name}
          <Button id="editContactBtn" variant="outline-success">
            <img
              className="edit"
              src={edit}
              alt="editField"
              onClick={() => props.toggleInput("contactInput")}
            />
          </Button>
        </div>
        <Form
          id="contactForm"
          onSubmit={props.handleSubmit}
          className={hideInput(props.contactInput)}
        >
          <Form.Group className="">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder={props.name}
              onChange={props.handleChange}
              value={props.name}
              name="fullName"
              id="fullNameInput"
            />
            <Form.Text />
          </Form.Group>
          <Form.Group className="">
            <Form.Label>Number:</Form.Label>
            <Form.Control
              type="tel"
              placeholder={props.cell}
              value={props.cell}
              onChange={props.handleChange}
              name="cell"
              id="cell"
            />
            <Form.Text />
          </Form.Group>
          <Form.Group className="">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder={props.email}
              value={props.email}
              name="email"
              id="email"
              onChange={props.handleChange}
            />
            <Form.Text />
          </Form.Group>

          <Button type="submit" value="Submit" variant="outline-success">
            ✅
          </Button>
        </Form>
      </div>
      <div className={hideDiv(props.contactInput)}>
        📱
        {formatPhone(props.cell)}
      </div>
      <div className={hideDiv(props.contactInput)}>📧 {props.email}</div>
    </Container>
  );
};

export default ContactMe;
