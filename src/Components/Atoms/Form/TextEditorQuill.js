import React from "react";
import ReactQuill from "react-quill";
import { FormText } from "reactstrap";
const TextEditorQuill = ({ fields, onEditorEdit }) => {
  const [reactQuillText, setReactQuillText] = React.useState("");

  const customStyles = {
    // border: () => ({
    //   container: "1px solid red",
    // }),
    border: "1px solid red",
    borderRadius: "5px",
  };

  const handleChange = (value) => {
    setReactQuillText(value);
    onEditorEdit(value, fields.id);
  };

  return (
    <>
      <div data-quill-placeholder="Quill WYSIWYG" data-toggle="quill" />
      <label>
        {fields?.label}
        {fields?.required ? <span className="text-danger"> *</span> : null}
      </label>
      <ReactQuill
        value={reactQuillText}
        onChange={handleChange}
        theme="snow"
        style={fields?.errorMessage ? customStyles : null}
        modules={{
          toolbar: [
            // [{ 'header': [1, 2] }],
            ["bold", "italic"],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ["link", "blockquote", "code", ],
          ],
        }}
      />
      <FormText color="danger">{fields?.errorMessage}</FormText>
    </>
  );
};

export default TextEditorQuill;
