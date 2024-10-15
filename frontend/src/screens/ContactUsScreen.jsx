import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ContactForm } from "../components/ContactForm";

const ContactUsScreen = () => {
  return (
    <Container className="mt-4rem">
      <Row className="justify-content-center text-center mb-4">
        <Col lg={8}>
          <h1 className="display-4 fw-bold">
            Your next Adventure is just a Call away!
          </h1>
        </Col>
      </Row>

      <Row className="justify-content-center text-center">
        <Col lg={8}>
          <p className="lead text-muted mb-4">
            Got questions? Need travel tips? Or just want to share your latest
            travel story? We're all ears! At JustWravel, we're not just about
            selling trips; we're about creating unforgettable experiences. So,
            let's get the conversation started!
          </p>
        </Col>
      </Row>
      <ContactForm />
    </Container>
  );
};

export default ContactUsScreen;
