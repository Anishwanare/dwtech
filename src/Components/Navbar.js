import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import logo from "../images/logogo.png";

import { Link as ScrollLink } from "react-scroll";

const MyNavbar = () => {
  const navLinkStyle = { color: "black" };
  const dropdownItemStyle = { color: "black"};

  const maxWidthLogo = 
    {
        maxWidth: "200px",
    }
;

  return (
    <Navbar
      bg="body-light"
      variant="light"
      expand="lg"
      className="text-black h2 font-weight-normal px-5 "
    >
      <Navbar.Brand href="/" className="w-25">
        <img
          src={logo}
          className="img-fluid img-thumbnail w-full"
          style={maxWidthLogo}
          alt=""
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto font-weight-normal">
            <ScrollLink
            to="about-us" // ID of the element you want to scroll to
            spy={true}
            smooth={true}
            duration={100}
          >
          <Nav.Link href="/about" style={navLinkStyle} className="mx-3">
            About
          </Nav.Link>
          </ScrollLink>
          <NavDropdown
            title="Services"
            id="basic-nav-dropdown"
            style={navLinkStyle}
            className="mx-3"
          >
            <NavDropdown.Item href="" className="h3" style={dropdownItemStyle}>
              Web Development
            </NavDropdown.Item>
            <NavDropdown.Item href="" className="h3" style={dropdownItemStyle}>
              App Development
            </NavDropdown.Item>
            <NavDropdown.Item href="" className="h3" style={dropdownItemStyle}>
              Software Development
            </NavDropdown.Item>
            <NavDropdown.Item href="" className="h3" style={dropdownItemStyle}>
              Graphics Development
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="" className="h3" style={dropdownItemStyle}>
              Digital Marketing
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/careers" style={navLinkStyle} className="mx-3">
            Careers
          </Nav.Link>
          <ScrollLink
            to="contact-section" // ID of the element you want to scroll to
            spy={true}
            smooth={true}
            duration={100}
          >
            <Nav.Link href="/contact-us" style={navLinkStyle} className="mx-3">
              Contact Us
            </Nav.Link>
          </ScrollLink>
        </Nav>
      <Button variant="danger" size="sm" className="d-block d-sm-none">
        <a
          href="tel:+919767722793"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Call now
        </a>
      </Button>

      <Button
        variant="danger"
        size="lg"
        className="d-none d-sm-block text-black"
      >
        <a
          href="tel:+919767722793"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Call now
        </a>
      </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
