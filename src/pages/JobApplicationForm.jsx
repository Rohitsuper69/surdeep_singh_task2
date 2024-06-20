import React from "react";
import useForm from "../utils/useForm";
import validateForm from "../utils/validateForm";

const getCurrentDateTime = () => {
  const now = new Date();
  return now.toISOString().slice(0, 16);
};

const JobApplicationForm = () => {
  const initialValues = {
    fullName: "",
    email: "",
    phoneNumber: "",
    position: "",
    experience: "",
    portfolioUrl: "",
    managementExperience: "",
    skills: {
      JavaScript: false,
      CSS: false,
      Python: false,
      English: false,
      ReactJs: false,
    },
    interviewTime: "",
  };

  const { formValues, errors, submittedData, handleChange, handleSubmit } =
    useForm(initialValues, validateForm);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formValues.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <p>{errors.fullName}</p>}
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={formValues.phoneNumber}
            onChange={handleChange}
          />
          {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
        </div>

        <div>
          <label>Applying for Position:</label>
          <select
            name="position"
            value={formValues.position}
            onChange={handleChange}
          >
            <option value="">Select Position</option>
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="Manager">Manager</option>
          </select>
        </div>

        {["Developer", "Designer"].includes(formValues.position) && (
          <div>
            <label>Relevant Experience (years):</label>
            <input
              type="number"
              name="experience"
              value={formValues.experience}
              onChange={handleChange}
            />
            {errors.experience && <p>{errors.experience}</p>}
          </div>
        )}

        {formValues.position === "Designer" && (
          <div>
            <label>Portfolio URL:</label>
            <input
              type="text"
              name="portfolioUrl"
              value={formValues.portfolioUrl}
              onChange={handleChange}
            />
            {errors.portfolioUrl && <p>{errors.portfolioUrl}</p>}
          </div>
        )}

        {formValues.position === "Manager" && (
          <div>
            <label>Management Experience:</label>
            <input
              type="text"
              name="managementExperience"
              value={formValues.managementExperience}
              onChange={handleChange}
            />
            {errors.managementExperience && (
              <p>{errors.managementExperience}</p>
            )}
          </div>
        )}

        <div>
          <label>Additional Skills:</label>
          <div>
            <label>
              <input
                type="checkbox"
                name="skills.JavaScript"
                checked={formValues.skills.JavaScript}
                onChange={handleChange}
              />
              JavaScript
            </label>
            <label>
              <input
                type="checkbox"
                name="skills.CSS"
                checked={formValues.skills.CSS}
                onChange={handleChange}
              />
              CSS
            </label>
            <label>
              <input
                type="checkbox"
                name="skills.Python"
                checked={formValues.skills.Python}
                onChange={handleChange}
              />
              Python
            </label>
            <label>
              <input
                type="checkbox"
                name="skills.English"
                checked={formValues.skills.English}
                onChange={handleChange}
              />
              Python
            </label>
            <label>
              <input
                type="checkbox"
                name="skills.ReactJs"
                checked={formValues.skills.ReactJs}
                onChange={handleChange}
              />
              Python
            </label>
          </div>
          {errors.skills && <p>{errors.skills}</p>}
        </div>

        <div>
          <label>Preferred Interview Time:</label>
          <input
            type="datetime-local"
            name="interviewTime"
            value={formValues.interviewTime}
            onChange={handleChange}
            min={getCurrentDateTime()}
          />
          {errors.interviewTime && <p>{errors.interviewTime}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div>
          <h2>Submitted Data:</h2>
          <p>Full Name: {submittedData.fullName}</p>
          <p>Email: {submittedData.email}</p>
          <p>Phone Number: {submittedData.phoneNumber}</p>
          <p>Applying for Position: {submittedData.position}</p>
          {["Developer", "Designer"].includes(submittedData.position) && (
            <p>Relevant Experience: {submittedData.experience}</p>
          )}
          {submittedData.position === "Designer" && (
            <p>Portfolio URL: {submittedData.portfolioUrl}</p>
          )}
          {submittedData.position === "Manager" && (
            <p>Management Experience: {submittedData.managementExperience}</p>
          )}
          <p>
            Additional Skills:{" "}
            {Object.keys(submittedData.skills)
              .filter((skill) => submittedData.skills[skill])
              .join(", ")}
          </p>
          <p>
            Preferred Interview Time:{" "}
            {new Date(submittedData.interviewTime).toLocaleString()}
          </p>
        </div>
      )}
    </div>
  );
};

export default JobApplicationForm;
