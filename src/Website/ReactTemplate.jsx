import React from "react";
import { Button, Card, Col, Container, Row, fluid } from "react-bootstrap";
import BoxContent from "./BoxContent";
import ServicesBox from "./ServicesBox";
import PageHeader from "./PageHeader";

const ReactTemplate = () => {
  return (
    <>
      <section className="mt-5">
        <PageHeader />
        <Container fluid>
          <Row>
            {BoxContent.map((val, ind) => {
              return (
                <ServicesBox
                  key={ind}
                  imgscr={val.imgscr}
                  title={val.title}
                  sname={val.sname}
                  link={val.link}
                />
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};
export default ReactTemplate;
