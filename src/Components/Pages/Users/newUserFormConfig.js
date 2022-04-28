const newUserFormConfig = {
  main_heading: "",
  sub_heading: "",
  sections: [
    {
      heading: "User Details",
      fields: [
        {
          label: "First Name",
          required: true,
          id: "first_name",
          type: "text",
          placeholder: "Enter your name",
          defaultValue: null,
          disabled: false,
          spacing: {
            xs: 6,
          },
        },
        {
          label: "Last Name",
          required: true,
          id: "last_name",
          type: "text",
          placeholder: "Enter your name",
          defaultValue: null,
          disabled: false,
          spacing: {
            xs: 6,
          },
        },
        {
          label: "Profile Description",
          required: true,
          id: "profile_description",
          type: "editor_quill",
          placeholder: "Enter your description",
          defaultValue: null,
          disabled: false,
          spacing: {
            xs: 6,
          },
        },
        {
          label: "Primary Address",
          required: true,
          id: "primary_address",
          type: "textarea",
          placeholder: "Enter your description",
          defaultValue: null,
          disabled: false,
          spacing: {
            xs: 6,
          },
        },
        
      ],
    },
    {
      heading: "Other Details",
      fields: [
        {
          label: "Date of Birth",
          required: true,
          id: "dob",
          type: "date",
          placeholder: null,
          defaultValue: "",
          disabled: false,
          spacing: {
            xs: 4,
          },
        },
        {
          label: "Referral code",
          required: true,
          id: "referral_code",
          type: "text",
          placeholder: null,
          defaultValue: "",
          disabled: false,
          spacing: {
            xs: 4,
          },
        },
        {
          label: "Department",
          required: true,
          id: "department",
          type: "text",
          placeholder: null,
          defaultValue: "",
          disabled: false,
          spacing: {
            xs: 4,
          },
        },
      ],
    },
  ],
};

export default newUserFormConfig;
