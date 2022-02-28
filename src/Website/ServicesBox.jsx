import React from "react";
import { Button, Card, Col, Container, Row, fluid } from "react-bootstrap";

const ServicesBox = (props) => {
  return (
    <>
      <Col className="mt-4" xs={12} md={3}>
        <Card style={{ width: "100%" }}>
          <Card.Img variant="top" src={props.imgscr} alt="carimg" />
          <Card.Body>
            <Card.Title>{props.title} </Card.Title>
            <Card.Text className="react_templ">
              <a href={props.link} target="_blank">
                {props.sname}
              </a>
            </Card.Text>
            <Card.Text className="Price_tag">
              <a href={props.link} className="tag" target="_blank">
                FREE
              </a>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};
export default ServicesBox;
