import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";

const Contact = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    comment: "",
  });
  const inputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const fromSubmit = (e) => {
    e.preventDefault();
    alert(
      `My First Name is ${data.firstname} My Last Name is ${data.lastname} My Phone Number is ${data.phone} My Email ID is ${data.email} My Comment is ${data.comment}`
    );
  };
  return (
    <>
      <section className="mt-5">
        <Container>
          <Row>
            <Col className="mt-4 mx-auto" xs={12} md={6}>
              <Form onSubmit={fromSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstname"
                    value={data.firstname}
                    onChange={inputEvent}
                    placeholder="Enter Your Name"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastname"
                    value={data.lastname}
                    onChange={inputEvent}
                    placeholder="Enter Name"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Your Phone</Form.Label>
                  <Form.Control
                    type="number"
                    name="phone"
                    value={data.phone}
                    onChange={inputEvent}
                    placeholder="Enter Your Phone"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={inputEvent}
                    placeholder="Enter Email ID"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <FloatingLabel controlId="floatingTextarea2" label="Comments">
                    <Form.Control
                      as="textarea"
                      name="comment"
                      value={data.comment}
                      onChange={inputEvent}
                      placeholder="Leave a comment here"
                      style={{ height: "100px" }}
                    />
                  </FloatingLabel>
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Contact;
