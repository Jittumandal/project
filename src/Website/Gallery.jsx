import React from "react";
import { useState } from "react";
import { Button, Card, Col, Container, Nav, Row } from "react-bootstrap";
import GalleryData from "./GalleryData";
// import Menu from "./Menu";

const Gallery = () => {
  const [items, setItema] = useState(GalleryData);
  const FilterItems = (categItems) => {
    const updatedIteams = GalleryData.filter((CurrElem) => {
      return CurrElem.category === categItems;
    });
    setItema(updatedIteams);
  };
  return (
    <>
      <section className="mt-5">
        <Container fluid>
          <Row>
            <Col className="mt-4" xs={12} md={3}>
              <Row>
                <Nav className="flex-column Left_menu">
                  <Nav.Link onClick={() => FilterItems("3D")}>
                    3D Electronics
                  </Nav.Link>
                  <Nav.Link onClick={() => FilterItems("Mockup")}>
                    Mockup
                  </Nav.Link>
                  <Nav.Link onClick={() => FilterItems("Brochure")}>
                    Brochure
                  </Nav.Link>
                  <Nav.Link onClick={() => FilterItems("SHIRT-PSD-MOCKUP")}>
                    T-Shirt Mockup
                  </Nav.Link>
                  <Nav.Link onClick={() => FilterItems("Bottles")}>
                    Bottles Mockup
                  </Nav.Link>
                  <Nav.Link onClick={() => setItema(GalleryData)}>All</Nav.Link>
                </Nav>
              </Row>
            </Col>
            <Col xs={12} md={9}>
              <Row>
                {items.map((elem) => {
                  const { id, img, name, category, description, link } = elem;
                  return (
                    <>
                      <Col className="mt-4" xs={12} md={4}>
                        <Card style={{ width: "100%" }}>
                          <Card.Img variant="top" src={img} alt="name" />
                          <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>{description}</Card.Text>
                            <Button variant="primary link_btn">
                              <a href={link} target="_blank">
                                Download
                              </a>
                            </Button>
                          </Card.Body>
                        </Card>
                      </Col>
                    </>
                  );
                })}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Gallery;
