import React, { useEffect, useState } from "react";
import { useSpring, animated, config } from "react-spring";
import { Link as ScrollLink } from "react-scroll";
import {
  Button,
  Container,
  Col,
  Row,
  Form,
  Image,
  InputGroup,
  FormControl,
  Card,
} from "react-bootstrap";
import section4 from "../images/image-removebg-preview.png";
import webdevelopment from "../images/webdevelopment.png";
import amazing from "../images/amazing.jpg";
import section5back from "../images/section5back.jpg";
import section1 from "../images/section1.gif";

const AnimatedText = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const props = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0%)" : "translateY(100%)",
    config: config.molasses,
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return <animated.div style={props}>{children}</animated.div>;
};

// Create a TeamMember component
const TeamMember = ({ name, role, imgSrc }) => (
  <Col lg={4}>
    <Card className="text-center">
      <Card.Img variant="top" src={imgSrc} alt={name} className="rounded" />
      <Card.Body>
        <Card.Title className="display-6">{name}</Card.Title>
        <Card.Text className="h4">
          <span style={{ color: "#FCB12D" }}>{role}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
);

const Home = () => {
  const [readMore, setReadMore] = useState(false);

  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  const contactUS = () => {
    alert("Form Submitted Successfully!!");
  };

  // Define team members
  const teamMembers = [
    { name: "Anish Wanare", role: "Co-Founder, Tech Lead", imgSrc: amazing },
    { name: "Nikhil Damare", role: "Founder, Market Lead", imgSrc: amazing },
    {
      name: "Ashutosh Karale",
      role: "Co-Founder, Designing Lead",
      imgSrc: amazing,
    },
  ];

  return (
    <Container fluid className="p-0">
      {/* Section 1 */}
      <section
        className="section2"
        style={{
          backgroundImage: `url(${section1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Container className="px-4 py-5 text-center text-white">
          <h1 className="display-4 fw-bold py-3">
            <AnimatedText>
              Resiliency in the <span style={{ color: "#FCB12D" }}>Making</span>
            </AnimatedText>
          </h1>
          <Container className="col-lg-8 mx-auto">
            <AnimatedText>
              <p className="mb-4 font-sm font-lg display-6">
                We are not just creators; we are architects of innovation,
                crafting resilience into every idea we bring to life.
              </p>
            </AnimatedText>
            <Container className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <AnimatedText>
                <Button variant="primary" size="lg" className="px-4 gap-3">
                  Explore Our Work
                </Button>
              </AnimatedText>
            </Container>
          </Container>
        </Container>
      </section>

      {/* Section 2 */}

      <section className="section3 bg-light py-5">
        <Container className="text-center">
          <Container className="col-lg-12 mx-auto">
            <h1 className="display-4 fw-bold py-5">
              Our Design Process for Business{" "}
              <span style={{ color: "#FCB12D" }}>Success</span>
            </h1>
            <p className="display-6">
              Every project begins with a deep understanding of the goals. We
              tailor our design process to help businesses achieve their
              objectives through creative solutions.
            </p>
            <Container className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-4">
              <ScrollLink
                to="contact-section" // ID of the element you want to scroll to
                spy={true}
                smooth={true}
                duration={100}
              >
                <Button variant="primary" size="lg" className="px-4 text-black">
                  Contact Us
                </Button>
              </ScrollLink>
            </Container>
          </Container>
        </Container>
      </section>
      {/* Section 3 */}
      <section
        className="section2 my-2"
        style={{
          backgroundImage: `url(${amazing})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "40vh", // Set minimum height for the section
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Container className="px-4 py-5 text-center text-white">
          <h1 className="display-4 fw-bold py-5">
            Let's Create <span style={{ color: "#FCB12D" }}>Amazing</span>
          </h1>
          <Container className="col-lg-12 mx-auto">
            <p className=" mb-4 font-sm font-lg display-6">
              We help organizations engage audiences through creative design.
              Whether it's a website, brochure, or an entire marketing campaign,
              our goal is to provide quality work in which our clients can find
              success.
            </p>
            <Container className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <Button variant="primary" size="lg" className="px-4 gap-3">
                Learn More
              </Button>
            </Container>
          </Container>
        </Container>
      </section>
      {/* Section 4 */}
      <section className="section4 py-5 text-center">
        <Container className=" col-xxl-8 px-4 py-5 text-center" id="about-us">
          <h1 className="display-4 fw-bold text-primary lh-1 mb-3">About Us</h1>
          <h5 className="display-5 fw-bold text-Dark lh-1 mb-3">
            From Concept to <span style={{ color: "#FCB12D" }}>Perfection</span>
          </h5>
          <Row className="flex-lg-col-reverse align-items-center g-5">
            <Col lg={6}>
              <p className="display-6">
                {readMore
                  ? "We pride ourselves on transforming innovative ideas into flawless technological solutions. Our seasoned team meticulously analyzes client concepts, offering tailored strategies to align technology with their vision. Through constant collaboration, we sculpt and refine these concepts into functional prototypes, ensuring each step is optimized for efficiency and excellence. Our commitment to perfection is unwavering; we relentlessly iterate, fine-tune, and quality-check every facet of the project, leaving no room for compromise. The end result is not merely a product but a masterpiece, meticulously crafted from concept to perfection – a testament to our dedication and expertise."
                  : "We pride ourselves on transforming innovative ideas into flawless technological solutions. Our seasoned team meticulously analyzes client concepts..."}
                <span id="dots">...</span>
                <span
                  className=""
                  style={{ display: readMore ? "inline" : "none" }}
                >
                  Additional details about our process and the value we bring to
                  our clients. You can find more information on our success
                  stories and the impact of our solutions.
                </span>
              </p>
              <Button
                onClick={toggleReadMore}
                variant="outline-primary"
                className="mt-3"
              >
                {readMore ? "Read Less" : "Read More"}
              </Button>
            </Col>
            <Col lg={6} className="d-none d-lg-block">
              <Image src={section4} alt="Section Image" fluid />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section 5 */}
      <section
        className="section5 py-5 text-center"
        style={{
          backgroundImage: `url(${section5back})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "40vh", // Set minimum height for the section
          color: "#fff", // Set text color to white or any contrasting color
        }}
      >
        <h1 className="display-6 fw-bold text-light lh-1 mb-3">
          Web Design & <span style={{ color: "#FCB12D" }}>Development</span>
        </h1>
        <Container className=" col-xxl-8 px-4 py-5 text-center">
          <Row className="flex-lg-row-reverse align-items-center g-5 py-5">
            <Col lg={6}>
              <p className="display-6">
                Every project begins with understanding the goal. We guide you
                through each step of our process while meeting deadlines and
                challenges set forth to accomplish these goals.
              </p>
            </Col>
            <Col lg={6} className=" d-lg-block">
              <Image src={webdevelopment} alt="Web Development" fluid />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section 6 */}
      <section className="container-fluid py-5 text-center">
        <h1 className="h1">
          About Our <span style={{ color: "#FCB12D" }}>Team</span>{" "}
        </h1>
        <Row>
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </Row>
      </section>

      {/* {section 7} */}
      {/* Section 7 */}
      <section className="section7 container-fluid py-5 text-center">
        <h1 className="h1" id="contact-section">
          Contact<span style={{ color: "#FCB12D" }}> Us</span>{" "}
        </h1>
        <Container className="h4">
          <Card className="mb-4">
            <Card.Body>
              <Form>
                <Row className="mb-4">
                  <Col>
                    <Form.Group className="mb-4">
                      <Form.Label>First name</Form.Label>
                      <InputGroup>
                        <FormControl type="text" id="form10Example1" />
                      </InputGroup>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-4">
                      <Form.Label>Last name</Form.Label>
                      <InputGroup>
                        <FormControl type="text" id="form10Example2" />
                      </InputGroup>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-4">
                  <Form.Label>Email</Form.Label>
                  <InputGroup>
                    <FormControl type="email" id="form10Example5" required />
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Phone</Form.Label>
                  <InputGroup>
                    <FormControl type="number" id="form10Example6" />
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Additional information</Form.Label>
                  <InputGroup>
                    <FormControl as="textarea" id="form10Example7" rows="4" />
                  </InputGroup>
                </Form.Group>

                <div className="d-flex justify-content-center ">
                  <Button
                    className="text-black"
                    variant="primary"
                    type="submit"
                    onClick={contactUS}
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </section>
    </Container>
  );
};

export default Home;
