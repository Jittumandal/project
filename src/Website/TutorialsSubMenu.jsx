import React from "react";
import { Container, fluid, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Tutorial_link from "./Tutorial_link";
import "./WesiteStyle.css";

const TutorialsSubMenu = () => {
  const React_link =
    "https://www.youtube.com/watch?v=tiLWCNFzThE&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ";
  const Photoshop_link = "https://ixdzone.com/category/tutorials/photoshop/";
  const Illustrator_link =
    "https://ixdzone.com/category/tutorials/illustrator/";
  const CorelDraw_link = "https://ixdzone.com/category/tutorials/corel-draw/";
  const HTMLAndHTML5_link =
    "https://ixdzone.com/category/tutorials/html-and-html-5/";
  const CSS3andSCSS_link =
    "https://ixdzone.com/category/tutorials/css3-and-scss/";
  const javascript_link = "https://ixdzone.com/category/tutorials/javascript/";
  const Jquery_link = "https://ixdzone.com/category/tutorials/jquery/";
  const UIAndUXDesign_link =
    "https://ixdzone.com/category/tutorials/ui-and-ux-design/";
  const MobileApp_link =
    "https://ixdzone.com/category/tutorials/mobile-app-design-and-development/";

  return (
    <>
      <NavDropdown title="Tutorials" id="basic-nav-dropdown">
        <span className="triangle-up"></span>
        <NavDropdown.Item href={Photoshop_link} target="_blank">
          Photoshop
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href={Illustrator_link} target="_blank">
          Illustrator
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href={CorelDraw_link} target="_blank">
          Corel Draw
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href={HTMLAndHTML5_link} target="_blank">
          HTML And HTML 5
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href={CSS3andSCSS_link} target="_blank">
          CSS3 and SCSS
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href={javascript_link} target="_blank">
          javascript
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href={React_link} target="_blank">
          React JS
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href={Jquery_link} target="_blank">
          Jquery
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href={UIAndUXDesign_link} target="_blank">
          UI And UX Design
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href={MobileApp_link} target="_blank">
          Mobile App Design And Development
        </NavDropdown.Item>
      </NavDropdown>
    </>
  );
};
export default TutorialsSubMenu;
