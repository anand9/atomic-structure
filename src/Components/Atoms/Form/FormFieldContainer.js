import React from "react";
import { FormGroup, Col } from "reactstrap";

export default function FormFieldContainer(props) {
  const { spacing } = props;
  const { xs } = spacing;
  return (
    <Col xs={xs}>
      <FormGroup>{props.children}</FormGroup>
    </Col>
  );
}
