import React from "react";
import FormFieldContainer from "../Atoms/Form/FormFieldContainer";
import FormCard from "../Atoms/Form/FormCard";
import TextEditorQuill from "../Atoms/Form/TextEditorQuill";
import InputCheck from "../Atoms/Form/InputCheck";
import InputField from "../Atoms/Form/InputField";

export default function FormTemplate(props) {
  let { config, onAction, onInput, onSubmit } = props;
  const { sections } = config;

  const handleEdit = (e) => {
    onAction(e.target.value, e.target.id, e.target.type);
  };

  const handleSelect = (obj, id) => {
    onAction(obj, id);
  };

  const handleInput = (value, id) => {
    onInput(value, id);
  };

  const handleChecked = (e) => {
    onAction(e.target.checked, e.target.id);
  };

  const handleCreate = (obj, i) => {
    onSubmit(obj, i);
  };

  const handleEditorEdit = (obj, i) => {
    onAction(obj, i);
  };

  return (
    <>
      {sections?.map((sec, i) => (
        <FormCard heading={sec.heading} key={i}>
          {sec.fields.map((f, i) => (
            <FormFieldContainer key={i} spacing={f.spacing}>
              <Field
                fields={f}
                onEdit={handleEdit}
                onSelect={handleSelect}
                onCheck={handleChecked}
                onInput={handleInput}
                onSubmit={onSubmit}
                onEditorEdit={handleEditorEdit}
              />
            </FormFieldContainer>
          ))}
        </FormCard>
      ))}
    </>
  );
}

const Field = ({
  fields,
  onEdit,
  onSelect,
  onCheck,
  onInput,
  onSubmit,
  onEditorEdit,
}) => {
  if (
    fields.type === "text" ||
    fields.type === "number" ||
    fields.type === "date" ||
    fields.type === "time" ||
    fields.type === "textarea"
  ) {
    return <InputField fields={fields} onEdit={onEdit} />;
  }

  if (fields.type === "editor_quill") {
    return <TextEditorQuill fields={fields} onEditorEdit={onEditorEdit} />;
  }


  if (fields.type === "checkbox") {
    return <InputCheck fields={fields} onCheck={onCheck} />;
  }

  return <>undefined field</>;
};
