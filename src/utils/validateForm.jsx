const validateForm = (values) => {
  const errors = {};

  if (!values.fullName) errors.fullName = "Full Name is required";
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email must be a valid email format";
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = "Phone Number is required";
  } else if (!/^\d{10}$/.test(values.phoneNumber)) {
    errors.phoneNumber = "Phone Number must be exactly 10 digits";
  }
  if (
    ["Developer", "Designer"].includes(values.position) &&
    !values.experience
  ) {
    errors.experience = "Relevant Experience is required";
  } else if (
    values.experience &&
    (isNaN(values.experience) || values.experience <= 0)
  ) {
    errors.experience = "Relevant Experience must be a number greater than 0";
  }
  if (values.position === "Designer" && !values.portfolioUrl) {
    errors.portfolioUrl = "Portfolio URL is required";
  } else if (
    values.portfolioUrl &&
    !/^https?:\/\/\S+\.\S+$/.test(values.portfolioUrl)
  ) {
    errors.portfolioUrl = "Portfolio URL must be a valid URL";
  }
  if (values.position === "Manager" && !values.managementExperience) {
    errors.managementExperience = "Management Experience is required";
  }
  if (!Object.values(values.skills).some((skill) => skill)) {
    errors.skills = "At least one skill must be selected";
  }
  if (!values.interviewTime) {
    errors.interviewTime = "Preferred Interview Time is required";
  } else if (isNaN(Date.parse(values.interviewTime))) {
    errors.interviewTime =
      "Preferred Interview Time must be a valid date and time";
  }

  return errors;
};

export default validateForm;
