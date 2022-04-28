import React, { useState } from "react";
import FormTemplate from "../../Template/FormTemplate";
import { Button, CardBody, Card } from "reactstrap";
import newUserFormConfig from "../../Pages/Users/newUserFormConfig";

export const NewUser = () => {
  const [formData, setFormData] = useState("");

  const handleFormChange = (obj, id, type) => {
    setFormData({ ...formData, [id]: obj });
    // formData = { ...formData, [id]: obj };
    // this.setState({ formData: formData, check: "changed" });
  };

  const onSubmit = () => {
    console.log("the op is", formData);
  };

  return (
    <>
      <Card>
        <CardBody>
          <FormTemplate
            config={newUserFormConfig}
            onAction={handleFormChange}
            onCreate={onSubmit}
          />

          <div className="d-flex flex-row-reverse mb-5 mt-4">
            <div>
              <Button onClick={onSubmit} color="primary">
                Submit
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};
