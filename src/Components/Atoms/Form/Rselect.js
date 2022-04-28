import React from "react";
import Select from "react-select";
import { FormText } from "reactstrap";

export default function Rselect(props) {
  const { fields, onSelect, onInput, errorMessage } = props;

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: fields.errorMessage ? "1px solid red" : null,
      height: 45,
    }),
  };

  const handleSelect = (obj) => {
    if (!fields.isMulti) {
      onSelect(obj.value, fields.id);
    } else {
      onSelect(getFlatValues(obj), fields.id);
    }
  };

  const onInputChange = (inputValue, action) => {
    if (action.action === "input-change") {
      onInput(inputValue, fields.id);
    }
  };

  const getFlatValues = (arr) => {
    let values = [];
    arr.map((i) => {
      values.push(i.value);
    });
    return values;
  };
  return (
    <>
      <label>
        {fields.label}
        {fields.required ? <span className="text-danger"> *</span> : null}
      </label>
      <Select
        isMulti={fields.isMulti}
        styles={customStyles}
        options={fields.options}
        defaultValue={fields.defaultValue}
        onChange={(obj) => handleSelect(obj)}
        onInputChange={onInputChange}
      />
      <FormText color="danger">{fields.errorMessage}</FormText>
    </>
  );
}
