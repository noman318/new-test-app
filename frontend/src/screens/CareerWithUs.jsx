import React from "react";
import { ContactForm } from "../components/ContactForm";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const CareerWithUs = () => {
  const images = [
    { src: "https://via.placeholder.com/300x400", width: 30 },
    { src: "https://via.placeholder.com/300x400", width: 15 },
    { src: "https://via.placeholder.com/300x400", width: 35 },
    { src: "https://via.placeholder.com/300x400", width: 15 },
    // Add more images as needed, alternating widths
  ];

  return (
    <>
      <div
        style={{
          marginTop: "3.3rem",
          width: "100% !important",
          minHeight: "75vh",
          marginBottom: "-100px", // Use a valid negative pixel value
        }}
      >
        <Carousel
          controls={false}
          indicators={false}
          interval={4000}
          pause={false}
          style={{ minHeight: "75vh" }} // Removed !important
        >
          <Carousel.Item>
            <img
              loading="lazy"
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
              alt="First slide"
              style={{
                height: "75vh",
                objectFit: "cover",
                borderRadius: "30px",
              }}
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              loading="lazy"
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45"
              alt="Second slide"
              style={{
                height: "75vh",
                objectFit: "cover",
                borderRadius: "30px",
              }}
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              loading="lazy"
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
              alt="Third slide"
              style={{
                height: "75vh",
                objectFit: "cover",
                borderRadius: "30px",
              }}
            />
          </Carousel.Item>
        </Carousel>
      </div>

      <Container className="">
        <Row className="justify-content-center text-center mb-4">
          <Col lg={12}>
            <h1 className="display-4 fw-5">
              Where{" "}
              <span
                className="fw-bold"
                style={{ color: `var(--secondary-color) !important` }}
              >
                Adventure
              </span>{" "}
              Meets <span className="fw-bold">Opportunity</span>
            </h1>
          </Col>
        </Row>

        <Row className="justify-content-center text-center">
          <Col lg={12}>
            <p className="lead mb-4">
              We are a vibrant{" "}
              <span className="fw-bold">Social Travel Community</span> that
              brings like-minded explorers together through meticulously
              organized trips and fixed departures. If you’re eager to make a
              difference in the travel industry and help others create
              unforgettable memories, you’ve come to the right place!
            </p>
          </Col>
        </Row>

        {/* Marquee */}
        <div className="container">
          <Marquee
            speed={60}
            pauseOnHover={true}
            gradient={false}
            className="my-3"
            style={{ height: "15rem" }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={`img-${index}`}
                style={{
                  width: `${image.width}rem`,
                  height: "15rem",
                  objectFit: "cover",
                  borderRadius: "30px",
                }}
                className="mx-2"
              />
            ))}
          </Marquee>
        </div>

        <div className="container">
          <Marquee
            pauseOnHover={true}
            speed={60}
            gradient={false}
            className="my-3"
            style={{ height: "15rem" }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={`img-${index}`}
                style={{
                  width: `${image.width}rem`,
                  height: "15rem",
                  objectFit: "cover",
                  borderRadius: "30px",
                }}
                className="mx-2"
              />
            ))}
          </Marquee>
        </div>

        {/* Marque */}

        <ContactForm />
      </Container>
    </>
  );
};

export default CareerWithUs;
