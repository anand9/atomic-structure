import * as yup from "yup";

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
          validation: yup
            .string()
            .required("Mandatory Field")
            .nullable("Mandatory Field"),
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
          validation: yup
            .string()
            .required("Mandatory Field")
            .nullable("Mandatory Field"),
          spacing: {
            xs: 6,
          },
        },
        // {
        //   label: "Number of Positions",
        //   required: true,
        //   id: "no_of_positions",
        //   type: "number",
        //   placeholder: null,
        //   defaultValue: null,
        //   disabled: false,
        //   validation: yup
        //     .string()
        //     .required("Mandatory Field")
        //     .nullable("Mandatory Field"),
        //   spacing: {
        //     xs: 6,
        //   },
        // },
        // {
        //   label: "Department",
        //   required: true,
        //   id: "department",
        //   type: "c-select",
        //   placeholder: "eg: department",
        //   defaultValue: null,
        //   disabled: false,
        //   validation: yup
        //     .string()
        //     .required("Mandatory Field")
        //     .nullable("Mandatory Field"),
        //   options: [],
        //   spacing: {
        //     xs: 6,
        //   },
        // },
        // // {
        // //   label: "Experience",
        // //   required: false,
        // //   id: "experience",
        // //   type: "select",
        // //   isMulti: false,
        // //   placeholder: null,
        // //   defaultValue: "",
        // //   disabled: false,
        // //   options: [],
        // //   spacing: {
        // //     xs: 6,
        // //   },
        // // },
        // {
        //   label: "Experience Min",
        //   required: false,
        //   id: "experience_lower",
        //   type: "number",
        //   placeholder: null,
        //   defaultValue: "",
        //   disabled: false,
        //   spacing: {
        //     xs: 2,
        //   },
        // },
        // {
        //   label: "Experience Max",
        //   required: false,
        //   id: "experience_upper",
        //   type: "number",
        //   placeholder: null,
        //   defaultValue: "",
        //   disabled: false,
        //   spacing: {
        //     xs: 2,
        //   },
        // },
        // {
        //   label: "Mandatory Skills",
        //   required: true,
        //   id: "primary_skills",
        //   type: "select",
        //   isMulti: true,
        //   placeholder: "eg: java",
        //   defaultValue: [],
        //   disabled: false,
        //   validation: yup
        //     .array()
        //     .of(yup.string())
        //     .min(1, "Add atleast one skill")
        //     .required("Mandatory Field")
        //     .nullable("Mandatory Field"),
        //   options: [],
        //   spacing: {
        //     xs: 12,
        //   },
        // },
        // {
        //   label: "Optional Skills",
        //   required: false,
        //   id: "secondary_skills",
        //   type: "select",
        //   placeholder: "eg: java",
        //   defaultValue: null,
        //   disabled: false,
        //   isMulti: true,
        //   options: [],
        //   spacing: {
        //     xs: 12,
        //   },
        // },

        // {
        //   label: "Job Description",
        //   required: true,
        //   id: "job_description",
        //   type: "editor_quill",
        //   placeholder: null,
        //   defaultValue: "",
        //   disabled: false,
        //   validation: yup
        //     .string()
        //     .required("Mandatory Field")
        //     .nullable("Mandatory Field"),
        //   spacing: {
        //     xs: 12,
        //   },
        // },
        // {
        //   label: "Additional Information",
        //   required: false,
        //   id: "additional_info",
        //   type: "textarea",
        //   placeholder: null,
        //   defaultValue: "",
        //   disabled: false,
        //   spacing: {
        //     xs: 12,
        //   },
        // },
        // {
        //   label: "Currency Type",
        //   required: false,
        //   id: "currency_type",
        //   type: "select",
        //   placeholder: null,
        //   defaultValue: { label: "INR", value: "INR" },
        //   disabled: false,
        //   options: [
        //     { label: "INR", value: "INR" },
        //     { label: "USD", value: "USD" },
        //     { label: "EUR", value: "EUR" },
        //   ],
        //   spacing: {
        //     xs: 2,
        //   },
        // },
        // {
        //   label: "CTC Min",
        //   required: false,
        //   id: "ctc_min",
        //   type: "number",
        //   placeholder: null,
        //   defaultValue: "",
        //   disabled: false,
        //   spacing: {
        //     xs: 2,
        //   },
        // },
        // {
        //   label: "CTC Max",
        //   required: false,
        //   id: "ctc_max",
        //   type: "number",
        //   placeholder: null,
        //   defaultValue: "",
        //   disabled: false,
        //   spacing: {
        //     xs: 2,
        //   },
        // },
        // {
        //   label: "Location",
        //   required: true,
        //   id: "city",
        //   type: "auto-suggestions",
        //   placeholder: null,
        //   defaultValue: "",
        //   disabled: false,
        //   validation: yup
        //     .string()
        //     .required("Mandatory Field")
        //     .nullable("Mandatory Field"),
        //   spacing: {
        //     xs: 6,
        //   },
        //   options: [],
        // },
        // {
        //   label: "Remote Job",
        //   required: false,
        //   id: "remote_working",
        //   type: "checkbox",
        //   placeholder: null,
        //   defaultValue: "",
        //   disabled: false,
        //   spacing: {
        //     xs: 3,
        //   },
        // },
        // {
        //   label: "Publish to Career Site",
        //   required: false,
        //   id: "publish_to_careersite",
        //   type: "checkbox",
        //   placeholder: null,
        //   defaultValue: false,
        //   disabled: false,
        //   spacing: {
        //     xs: 3,
        //   },
        // },
      ],
    },
    {
      heading: "Other Details",
      fields: [
        {
          label: "Onboarding Date",
          required: true,
          id: "onboard_by",
          type: "date",
          placeholder: null,
          defaultValue: "",
          disabled: false,
          validation: yup
            .string()
            .required("Mandatory Field")
            .nullable("Mandatory Field"),
          spacing: {
            xs: 4,
          },
        },
        {
          label: "Job Type",
          required: false,
          id: "job_type",
          type: "select",
          isMulti: false,
          placeholder: null,
          defaultValue: "",
          disabled: false,
          options: [],
          spacing: {
            xs: 4,
          },
        },
        {
          label: "Employment Type",
          required: false,
          id: "employment_type",
          type: "select",
          placeholder: null,
          defaultValue: null,
          disabled: false,
          options: [],
          spacing: {
            xs: 4,
          },
        },
      ],
    },
    {
      heading: "Hiring Details",
      fields: [
        {
          label: "Recruiter Name",
          required: false,
          id: "recruiter_name",
          type: "select",
          placeholder: null,
          defaultValue: null,
          disabled: false,
          options: [],
          spacing: {
            xs: 6,
          },
        },
      ],
    },
  ],
};

export default newUserFormConfig;
