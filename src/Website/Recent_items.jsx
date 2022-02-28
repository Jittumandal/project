import React from "react";
import { Button, Card, Col, Container, Row, fluid } from "react-bootstrap";
import Recent_Data from "./Recent_Data";
import Recent_Content from "./Recent_Content";
import "./RecentStyle.css";

const Recent_items = () => {
  return (
    <>
      <Container>
        <Row>
          {Recent_Data.map((val, ind) => {
            return (
              <Recent_Content
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
    </>
  );
};
export default Recent_items;
