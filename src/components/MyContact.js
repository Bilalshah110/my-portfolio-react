import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Col, Container, Row } from "react-bootstrap";
import { FaUserAlt, FaTag } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { MdMessage } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { GiCancel } from "react-icons/gi";
import { MdDoneAll } from "react-icons/md";

function MyContact() {
  //############## useState FOR FORM INPUTS ###############//

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  //############## useStates FOR ERRORS ###############//

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [meessageError, setMeessageError] = useState("");

  //############## useStates FOR EMAIL STATUS ###############//

  const [emailStatus, setEmailStatus] = useState(false);
  const [emailStatusMsg, setEmailStatusMsg] = useState("");

  const emailSendingButton = (
    <>
      <span
        className="spinner-border spinner-border-sm"
        role="status"
        aria-hidden="true"
      />{" "}
      &nbsp;Sending
    </>
  );

  //############## FORM VALIDATION ###############//

  const nameValidation = (name) => {
    if (name.length === 0) {
      setNameError("Name is required");
    } else if (name.length < 3) {
      setNameError("Name should have atleast 3 letters");
    } else if (name.length > 20) {
      setNameError("Name can have maximum 20 letters");
    } else {
      setNameError("");
    }
  };

  const emailValidation = (email) => {
    const validEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (email.length === 0) {
      setEmailError("Email is required");
    } else if (!email.match(validEmail)) {
      setEmailError("Please enter a valid email");
    } else {
      setEmailError("");
    }
  };

  const subjectValidation = (subject) => {
    if (subject.length === 0) {
      setSubjectError("Subject is required");
    } else if (subject.length < 3) {
      setSubjectError("Subject should have atleast 3 characters");
    } else if (subject.length > 50) {
      setSubjectError("Subject can have maximum 50 characters");
    } else {
      setSubjectError("");
    }
  };
  const messageValidation = (message) => {
    if (message.length === 0) {
      setMeessageError("Message is required");
    } else if (message.length < 5) {
      setMeessageError("Message should have atleast 5 letters");
    } else {
      setMeessageError("");
    }
  };

  //############## METHOD TO SHOW FIELD ERRORS ###############//

  const showErrors = (fieldName) => {
    return <div className="validation-error">{fieldName}</div>;
  };

  //############## METHOD TO RESET FORM ###############//

  const resetForm = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  //############## onChange HANDLER ###############//

  const handleName = (e) => {
    const name = e.target.value;
    setName(name);
    nameValidation(name);
  };
  const handleEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
    emailValidation(email);
  };
  const handleSubject = (e) => {
    const subject = e.target.value;
    setSubject(subject);
    subjectValidation(subject);
  };
  const handleMessage = (e) => {
    const message = e.target.value;
    setMessage(message);
    messageValidation(message);
  };

  //############## onSubmit HANDLER ###############//

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((name && email && subject && message) === "") {
      nameValidation(name);
      emailValidation(email);
      subjectValidation(subject);
      messageValidation(message);
    } else if (
      (nameError && emailError && subjectError && meessageError) === ""
    ) {
      setEmailStatus(true);
      setEmailStatusMsg("");
      emailjs
        .sendForm(
          "bilal_sh110ah",
          "template_ilr18kl",
          e.target,
          "Bnzl__lfo0dyIybQo"
        )
        .then(() => {
          setEmailStatusMsg("Email Sent!");
          setEmailStatus(false);
          resetForm();
        })
        .catch(() => {
          setEmailStatusMsg("Connection Error!");
          setEmailStatus(false);
        });
    }
  };

  //############## RENDERING ###############//

  return (
    <Container fluid="md xl" id="contact">
      <div className="section-top-padding">
        <h3 className="section-heading">CONTACT</h3>
      </div>
      <Container>
        <Row>
          <Col lg={6}>
            <h5>Send Email</h5>

            {/* ############## EMAIL STATUS MESSAGE ############### */}

            {emailStatusMsg !== "" ? (
              <h6
                className={
                  emailStatusMsg === "Connection Error!"
                    ? "email-status-msg email-status-msg-error"
                    : "email-status-msg email-status-msg-success"
                }
              >
                {" "}
                {emailStatusMsg}{" "}
                <span
                  className="email-status-icon"
                  onClick={() => setEmailStatusMsg("")}
                >
                  {emailStatusMsg === "Connection Error!" ? (
                    <GiCancel />
                  ) : (
                    <MdDoneAll />
                  )}
                </span>{" "}
              </h6>
            ) : null}

            <form onSubmit={handleSubmit}>
              <div className="input-group mt-3">
                <i className="me-2 form-icons">
                  <FaUserAlt />
                </i>

                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleName}
                  placeholder="Your Name"
                  className="form-control form-inputs my-background"
                />
              </div>
              {showErrors(nameError)}
              <div className="input-group mt-2">
                <i className="me-2 form-icons">
                  <GrMail />
                </i>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={handleEmail}
                  placeholder="Your Email"
                  className="form-control form-inputs my-background"
                />
              </div>
              {showErrors(emailError)}
              <div className="input-group mt-2">
                <i className="me-2 form-icons">
                  <FaTag />
                </i>
                <input
                  type="text"
                  name="subject"
                  value={subject}
                  onChange={handleSubject}
                  placeholder="Subject"
                  className="form-control form-inputs my-background"
                />
              </div>
              {showErrors(subjectError)}

              <div className="input-group mt-2">
                <i className="me-2 form-icons">
                  <MdMessage />
                </i>
                <textarea
                  rows="4"
                  type="text"
                  name="message"
                  value={message}
                  onChange={handleMessage}
                  placeholder="Message..."
                  className="form-control form-inputs my-background message"
                />
              </div>
              {showErrors(meessageError)}

              {/* SUBMIT BUTTON */}

              <div className="text-center mt-2 mb-4">
                <button
                  type="submit"
                  className="btn btn-light px-4"
                  disabled={emailStatus === true ? true : ""}
                >
                  {emailStatus === false ? "Send" : emailSendingButton}
                </button>
              </div>
            </form>
          </Col>
          <Col lg={6} className="pb-4">
            <div className="my-location ">
              <iframe
                title="my-location"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                src="https://maps.google.com/maps?hl=en&amp;q=Kuri%20Road%20Area+(Bilal%20Hassan)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.maps.ie/distance-area-calculator.html">
                  measure distance on map
                </a>
              </iframe>
            </div>
            <div className="text-center location-items my-2">
              <i className="location-icons">
                <HiLocationMarker />
              </i>
              <span className="location-text ps-2">
                Kuri Road Area, Rawalpindi
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default MyContact;
