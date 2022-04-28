import React from "react";
import { Input, Label } from "reactstrap";

export default function InputCheck(props) {
  let { fields, onCheck } = props;
  const { id, defaultValue, placeholder, type, label, disabled, required } =
    fields;
  return (
    <div className="pl-4">
      <Input
        type={type}
        id={id}
        placeholder={placeholder}
        defaultValue={defaultValue}
        disabled={disabled}
        onChange={onCheck}
      />{" "}
      <Label check>
        {label}
        {required ? <span className="text-danger"> *</span> : null}
      </Label>
    </div>
  );
}
