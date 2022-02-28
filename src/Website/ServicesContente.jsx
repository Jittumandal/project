import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./BoxStyle.css";

const ServicesContente = () => {
  return (
    <>
      <Container>
        <div className="one">
          <h1>
            Services
            <br />
            <span>
              We Offer A Full Range Of Services Including Graphic Design, Web
              Design, E-commerce Builds. and More.
            </span>
          </h1>
        </div>
        <Row>
          <Col className="mt-4" xs={12} md={3}>
            <Card style={{ width: "100%" }}>
              <div class="serviceBox">
                <div class="service-icon">
                  <i class="fa fa-globe"></i>
                </div>
                <h3 class="title">Web Design</h3>
                <p class="description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusantium consequuntur, deleniti eaque excepturi.
                </p>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </Card>
          </Col>

          <Col className="mt-4" xs={12} md={3}>
            <Card style={{ width: "100%" }}>
              <div class="serviceBox">
                <div class="service-icon">
                  <i class="fa fa-rocket"></i>
                </div>
                <h3 class="title">Web Development</h3>
                <p class="description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusantium consequuntur, deleniti eaque excepturi.
                </p>
              </div>
            </Card>
          </Col>
          <Col className="mt-4" xs={12} md={3}>
            <Card style={{ width: "100%" }}>
              <div class="serviceBox">
                <div class="service-icon">
                  <i class="fa fa-briefcase"></i>
                </div>
                <h3 class="title">Brand Building</h3>
                <p class="description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusantium consequuntur, deleniti eaque excepturi.
                </p>
              </div>
            </Card>
          </Col>
          <Col className="mt-4" xs={12} md={3}>
            <Card style={{ width: "100%" }}>
              <div class="serviceBox">
                <div class="service-icon">
                  <i class="fa fa-mobile"></i>
                </div>
                <h3 class="title">Responsive Design</h3>
                <p class="description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusantium consequuntur, deleniti eaque excepturi.
                </p>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ServicesContente;
