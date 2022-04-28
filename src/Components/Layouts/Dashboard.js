import React from "react";
import { Outlet } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { TopNavbar } from "../Organisms/TopNavbar";

export const Dashboard = () => {
  return (
    <>
      <TopNavbar />
      <Container>
        <Row>
          <Col md={12}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
};
