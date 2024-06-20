import { useState } from "react";

const useForm = (initialValues, validate) => {
  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormValues({
        ...formValues,
        skills: {
          ...formValues.skills,
          [name.split(".")[1]]: checked,
        },
      });
    } else {
      setFormValues({
        ...formValues,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formValues);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmittedData(formValues);
    }
  };

  return {
    formValues,
    errors,
    submittedData,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
