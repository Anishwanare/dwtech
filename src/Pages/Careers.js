import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import careers from "../images/careers.png"

const Careers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const careersData = [
    {
      title: "Software Developer",
      location: "Work From Home",
      description:
        "Join our team as a software developer and work on exciting projects.",
      requirements: [
        "Bachelor's degree in Computer Science",
        "Experience with React.js and Node.js",
      ],
      applyLink: "mailto:anishwanare9@gmail.com",
    },
    {
      title: "Software Developer",
      location: "New York, NY",
      description:
        "Join our team as a software developer and work on exciting projects.",
      requirements: [
        "Bachelor's degree in Computer Science",
        "Experience with React.js and Node.js",
      ],
      applyLink: "mailto:anishwanare9@gmail.com",
    },
    {
      title: "Software Developer",
      location: "New York, NY",
      description:
        "Join our team as a software developer and work on exciting projects.",
      requirements: [
        "Bachelor's degree in Computer Science",
        "Experience with React.js and Node.js",
      ],
      applyLink: "mailto:anishwanare9@gmail.com",
    },
    {
      title: "Software Developer",
      location: "New York, NY",
      description:
        "Join our team as a software developer and work on exciting projects.",
      requirements: [
        "Bachelor's degree in Computer Science",
        "Experience with React.js and Node.js",
      ],
      applyLink: "mailto:anishwanare9@gmail.com",
    },
    {
      title: "Software Developer",
      location: "New York, NY",
      description:
        "Join our team as a software developer and work on exciting projects.",
      requirements: [
        "Bachelor's degree in Computer Science",
        "Experience with React.js and Node.js",
      ],
      applyLink: "mailto:anishwanare9@gmail.com",
    },
    {
      title: "Software Developer",
      location: "New York, NY",
      description:
        "Join our team as a software developer and work on exciting projects.",
      requirements: [
        "Bachelor's degree in Computer Science",
        "Experience with React.js and Node.js",
      ],
      applyLink: "mailto:anishwanare9@gmail.com",
    },
    {
      title: "Software Developer",
      location: "New York, NY",
      description:
        "Join our team as a software developer and work on exciting projects.",
      requirements: [
        "Bachelor's degree in Computer Science",
        "Experience with React.js and Node.js",
      ],
      applyLink: "mailto:anishwanare9@gmail.com",
    },
  ];

  const filteredCareers = careersData.filter((career) =>
    career.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <section
        className="section5 py-5 text-center"
        style={{
          backgroundImage: `url(${careers})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "80vh",
          color: "#fff",
          filter: "blur(0.4px)", // Adjust the blur value as needed
        }}
      >
        <Container className="col-xxl-8 px-4 py-5 text-center">
          <Row className="flex-lg-col-reverse align-items-center g-5 py-5">
            <Col lg={12}>
              <h1 className="display-2 fw-bold text-light lh-1 mb-3">
                Search For Your Dream{" "}
                <span style={{ color: "#FCB12D" }}>Job</span>
              </h1>
              <p className="display-6">
                Here at D&W Tech, we help people like you find a position that
                won’t feel like work.
              </p>
            </Col>
            <Col lg={12} className="">
              <Form className="mb-4">
                <Form.Group controlId="jobSearch">
                  <Form.Control
                    type="text"
                    placeholder="Search for a job..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="rounded-pill form-control-lg h3"
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>

      <Container>
        <h1 className="mt-5 mb-4 text-center text-dark h1">
          Explore <span style={{ color: "#FCB12D" }}> Now</span>
        </h1>
        <Row>
          {filteredCareers.map((career, index) => (
            <Col key={index} lg={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title className="display-6 text-primary">
                    {career.title}
                  </Card.Title>
                  <Card.Subtitle
                    className="mb-2 text-muted"
                    style={{ fontSize: "1.5rem" }}
                  >
                    {career.location}
                  </Card.Subtitle>
                  <Card.Text
                    className="text-dark"
                    style={{ fontSize: "1.3rem" }}
                  >
                    {career.description}
                  </Card.Text>
                  <h6
                    className="mt-3 text-primary"
                    style={{ fontSize: "2rem" }}
                  >
                    Requirements:
                  </h6>
                  <ul className="text-dark" style={{ fontSize: "1.4rem" }}>
                    {career.requirements.map((requirement, reqIndex) => (
                      <li key={reqIndex}>{requirement}</li>
                    ))}
                  </ul>
                  <Button
                    href={`mailto:${career.applyLink}`}
                    variant="success"
                    className="mt-3"
                  >
                    Apply Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Careers;

