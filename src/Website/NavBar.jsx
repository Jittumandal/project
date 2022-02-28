import React from "react";
import { Container, fluid, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "./Imges/logo.svg";
import CourseNavBar from "./CourseNavBar";
import TutorialsSubMenu from "./TutorialsSubMenu";
import "./WesiteStyle.css";

const NavBar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink exact activeClassName="active_class" to="/">
                Home
              </NavLink>
              <NavLink exact activeClassName="active_class" to="/about">
                About
              </NavLink>
              <NavLink exact activeClassName="active_class" to="/services">
                Services
              </NavLink>
              <NavLink exact activeClassName="active_class" to="/DigitalDesign">
                Digital Design
              </NavLink>
              <TutorialsSubMenu />
              <CourseNavBar />
              <NavLink exact activeClassName="active_class" to="/gallery">
                3D
              </NavLink>
              <NavLink exact activeClassName="active_class" to="/reacttemplate">
                React Template
              </NavLink>
              <NavLink exact activeClassName="active_class" to="/contact">
                Contact Us
              </NavLink>
              <NavLink exact activeClassName="active_class" to="/search">
                <i className="fa fa-search"></i>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default NavBar;
