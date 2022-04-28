import React from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";

export default function FormCard(props) {
  let { heading } = props;
  return (
    <Card className="shadow mt-3">
      <CardHeader>
        <Row className="align-items-center">
          <Col xs="8">
            {" "}
            <h3 className="mb-0">
              <i className=""></i> {heading}
            </h3>
          </Col>
        </Row>
      </CardHeader>
      <CardBody>
        <div className="pl-lg-2">
          <Row>{props.children}</Row>
        </div>
      </CardBody>
    </Card>
  );
}
