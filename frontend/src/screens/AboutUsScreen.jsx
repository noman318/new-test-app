import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LocationInfo from "../components/LocationInfo";

const AboutUsScreen = () => {
  return (
    <Container fluid className="destination-container py-5 mt-4rem">
      <Row className="justify-content-center text-center mb-4">
        <Col lg={6}>
          <h1 className="display-4 fw-bold">
            Our Vision Helping You Explore The World...
          </h1>
          <p>
            At International Youth Club, your worry-free adventure starts with
            us. Share your needs, and we’ll craft customized, top-tier packages
            just for you!
          </p>
        </Col>
        <Col lg={6}>
          <img
            src="https://cdn.pixabay.com/photo/2017/02/18/23/14/people-2078486_640.jpg"
            alt=""
          />
        </Col>
      </Row>

      <Row className="justify-content-center text-center"></Row>
      <LocationInfo />
    </Container>
  );
};

export default AboutUsScreen;
