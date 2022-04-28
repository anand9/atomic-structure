import React from "react";
import { FormText, Input } from "reactstrap";

export default function InputField(props) {
  let { fields, onEdit } = props;
  const {
    id,
    defaultValue,
    placeholder,
    type,
    label,
    disabled,
    errorMessage,
    required,
  } = fields;
  return (
    <>
      <label>
        {label}
        {required ? <span className="text-danger"> *</span> : null}
      </label>
      <Input
        type={type}
        id={id}
        placeholder={placeholder}
        defaultValue={defaultValue}
        disabled={disabled}
        onChange={onEdit}
        invalid={errorMessage}
      />
      <FormText color="danger">{errorMessage}</FormText>
    </>
  );
}
