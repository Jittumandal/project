import React from "react";
import { Container, fluid, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./WesiteStyle.css";

const CourseNavBar = () => {
  const react_link =
    "https://www.youtube.com/watch?v=tiLWCNFzThE&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=1";
  const Photoshop = "https://ixdzone.com/category/courses/adobe-photoshop/";
  const Illustrator = "https://ixdzone.com/category/courses/adobe-illustrator/";
  const CorelDRAW =
    "https://ixdzone.com/category/courses/coreldraw-graphics-suite/";
  const Axure = "https://ixdzone.com/category/courses/axure-rp-9/";
  const Dreamweaver = "https://ixdzone.com/category/courses/adobe-dreamweaver/";
  const Adobe = "https://ixdzone.com/category/courses/adobe-xd/";
  const HTML = "https://ixdzone.com/category/courses/html/";
  const CSS = "https://ixdzone.com/category/courses/css/";
  const Scss = "https://ixdzone.com/category/courses/scss/";
  return (
    <>
      <NavDropdown title="Courses" id="basic-nav-dropdown">
        <span className="triangle-up"></span>
        <NavDropdown.Item href={react_link} target="_blank">
          React JS
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href={Photoshop} target="_blank">
          Adobe Photoshop
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href={Illustrator} target="_blank">
          Adobe Illustrator
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href={CorelDRAW} target="_blank">
          CorelDRAW Graphics Suite
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href={Axure} target="_blank">
          Axure RP 9
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href={Dreamweaver} target="_blank">
          Adobe Dreamweaver
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href={Adobe} target="_blank">
          Adobe XD
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href={HTML} target="_blank">
          HTML
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href={CSS} target="_blank">
          CSS
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href={Scss} target="_blank">
          Scss
        </NavDropdown.Item>
      </NavDropdown>
    </>
  );
};

export default CourseNavBar;
