import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React from "react";

const Education = (props) => {
  const hideDiv = (props) => (props ? "hide" : "");

  const hideInput = (props) => (props ? "" : "hide");

  const view = props.education.map((info) => {
    let index = props.education.indexOf(info);
    const schools = Object.entries(info).map((item, index) => (
      <div key={index}>
        <div>
          <span>{item[0]}: </span>
          {item[1]}
        </div>
      </div>
    ));
    return (
      <Container className="outline" fluid="sm" key={index}>
        {schools}
        <Button
          className="schoolBtn"
          id={index}
          onClick={props.handleDelete}
          variant="outline-warning"
        >
          ❌
        </Button>
      </Container>
    );
  });

  const EduArr = (
    <Form id="educationInput" onSubmit={props.handleSubmit}>
      <Form.Group>
        <Form.Label id="school">School: </Form.Label>
        <Form.Control
          name="school"
          onChange={props.handleChange}
          value={props.educationForm.school}
        />
        <Form.Text />
      </Form.Group>
      <Form.Group>
        <Form.Label id="city">City: </Form.Label>
        <Form.Control
          name="city"
          onChange={props.handleChange}
          value={props.educationForm.city}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label id="from">From: </Form.Label>
        <Form.Control
          name="from"
          onChange={props.handleChange}
          value={props.educationForm.from}
        />
        <Form.Text />
      </Form.Group>
      <Form.Group>
        <Form.Label id="to">To: </Form.Label>
        <Form.Control
          name="to"
          onChange={props.handleChange}
          value={props.educationForm.to}
        />
        <Form.Text />
      </Form.Group>
      <Form.Group>
        <Form.Label id="degree">Degree: </Form.Label>
        <Form.Control
          name="degree"
          onChange={props.handleChange}
          value={props.educationForm.degree}
        />
        <Form.Text />
      </Form.Group>
      <Button type="submit" value="Submit" variant="outline-success">
        ✅
      </Button>
    </Form>
  );

  return (
    <Container id="educationContainer" className="offSetBtm">
      <div className={hideDiv(props.educationInput)}>
        {view}
        <Button
          className="schoolBtn"
          id="addSchoolBtn"
          variant="outline-success"
          onClick={() => props.toggleInput("educationInput")}
        >
          ➕
        </Button>
      </div>
      <Container id="educationForm" className={hideInput(props.educationInput)}>
        {EduArr}
      </Container>
    </Container>
  );
};

export default Education;
