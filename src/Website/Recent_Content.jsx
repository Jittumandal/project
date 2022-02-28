import React from "react";
import { Button, Card, Col, Container, Row, fluid } from "react-bootstrap";

const Recent_Content = (props) => {
  return (
    <>
      <Col className="mt-4" xs={12} md={4}>
        <Card style={{ width: "100%" }}>
          <Card.Img variant="top" src={props.imgscr} alt="carimg" />
          <Card.Body>
            <Card.Title className="recent_items">
              <a href={props.link} target="_blank">
                {props.title}
              </a>
            </Card.Title>
            <Card.Text className="Price_tag">
              <a href={props.link} className="tag" target="_blank">
                Free
              </a>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};
export default Recent_Content;
