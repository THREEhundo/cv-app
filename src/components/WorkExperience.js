import edit from "../edit.png";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "../App.css";
import React from "react";

const WorkExperience = (props) => {
  const hideDiv = (props) => (props ? "hide" : "");

  const hideForm = (props) => (props ? "" : "hide");

  return (
    <Container className="outline" fluid="sm">
      <Row xs={1} className={hideDiv(props.workInput)}>
        {Object.entries(props.workExperience).map((info, index) => (
          <Col key={index} id={info[0] + "View"}>
            <span>{info[1]}</span>
          </Col>
        ))}
        <Row>
          <Col>
            <Button id="workInputBtn" variant="outline-success">
              <img
                className="edit"
                src={edit}
                alt="editCareer"
                onClick={() => props.toggleInput("workInput")}
              />
            </Button>
          </Col>
        </Row>
      </Row>
      <Form
        id="workForm"
        className={hideForm(props.workInput)}
        onSubmit={props.handleSubmit}
      >
        {Object.entries(props.workExperience).map((info, index) => (
          <Form.Group controlId={info[0] + "Form"} key={index}>
            <Form.Label>{info[0]}:</Form.Label>
            <Form.Control
              type="text"
              placeholder={info[1]}
              value={info[1]}
              name={info[0]}
              key={index}
              onChange={props.handleWorkChange}
            />
            <Form.Text />
          </Form.Group>
        ))}
        <Button type="submit" value="Submit" variant="outline-success">
          ✅
        </Button>
      </Form>
    </Container>
  );
};

export default WorkExperience;
