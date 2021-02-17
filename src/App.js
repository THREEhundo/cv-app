import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Heading from "./components/Heading";
import ContactMe from "./components/ContactMe";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education.js";

const App = (props) => {
  const [fullName, setFullName] = useState("Ned Flanders");
  const [cell, setCell] = useState("7189005000");
  const [email, setEmail] = useState("nedflanders@gmail.com");
  const [contactInput, setContactInput] = useState(false);
  const [workExperience, setWorkExperience] = useState({
    role: "4th Grade Teacher",
    company: "Springfield Elementary School",
    city: "Springfield, OR",
    from: 1989,
    to: "Present",
    description: "Bart Simpson's teacher",
  });
  const [workInput, setWorkInput] = useState(false);
  const [education, setEducation] = useState([
    {
      school: "Cornell University",
      city: "Ithica, NY",
      from: 1978,
      to: 1982,
      degree: "Bachelor of Science",
    },
    {
      school: "Yale University",
      city: "New Haven, CT",
      from: 1983,
      to: 1985,
      degree: "Master of Engineering",
    },
  ]);
  const [educationForm, setEducationForm] = useState({
    school: "",
    city: "",
    from: "",
    to: "",
    degree: "",
  });
  const [educationInput, setEducationInput] = useState(false);

  const handleDelete = (e) => {
    let index = parseInt(e.target.id);

    setEducation(education.filter((_, i) => i !== index));
  };

  const toggleInput = (props) => {
    if (props === "contactInput") {
      setContactInput({
        [props]: !props,
      });
    } else if (props === "educationInput") {
      setEducationInput({
        [props]: !props,
      });
    } else if (props === "workInput") {
      setWorkInput({
        [props]: !props,
      });
    }
  };

  const handleChange = (e) => {
    const id = e.target.name;

    if (
      id === "school" ||
      id === "city" ||
      id === "from" ||
      id === "to" ||
      id === "degree"
    ) {
      setEducation({
        ...education,
        [id]: e.target.value,
      });
    } else if (id === "fullName" || id === "email") {
      setFullName(e.target.value);
    } else if (id === "cell") {
      setCell(e.target.value);
    } else if (id === email) {
      setEmail(e.target.value);
    }
  };

  const handleWorkChange = (e) => {
    const { value, name } = e.target;
    setWorkExperience({ ...workExperience, [name]: value });
  };

  const handleEducationChange = (e) => {
    const { value, name } = e.target;
    setEducationForm({
      ...educationForm,
      [name]: value,
    });
  };

  const submitEducation = (e) => {
    e.preventDefault();
    setEducation([...education, educationForm]);
    setEducationInput(false);
    setEducationForm({
      school: "",
      city: "",
      from: "",
      to: "",
      degree: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    e.target.id === "contactForm"
      ? setContactInput(false)
      : e.target.id === "workForm"
      ? setWorkInput(false)
      : setEducationInput(false);
  };

  return (
    <div>
      <Heading />
      <Container id="appContainer" fluid="sm">
        <div className="module">
          <ContactMe
            name={fullName}
            cell={cell}
            email={email}
            contactInput={contactInput}
            handleChange={handleChange}
            toggleInput={toggleInput}
            handleSubmit={handleSubmit}
          />
          <WorkExperience
            workExperience={workExperience}
            handleWorkChange={handleWorkChange}
            toggleInput={toggleInput}
            workInput={workInput}
            handleSubmit={handleSubmit}
          />
          <Education
            education={education}
            educationForm={educationForm}
            toggleInput={toggleInput}
            educationInput={educationInput}
            handleChange={handleEducationChange}
            handleDelete={handleDelete}
            handleSubmit={submitEducation}
            className="offSetBtm"
          />
        </div>
      </Container>
    </div>
  );
};

export default App;
