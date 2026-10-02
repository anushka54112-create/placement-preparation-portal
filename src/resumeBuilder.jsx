import { useState } from "react";
import "./resumeBuilder.css";

function ResumeBuilder() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    college: "",
    degree: "",
    year: "",
    cgpa: "",
    skills: "",
    projectName: "",
    projectDescription: "",
  });

  const [resume, setResume] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleGenerate = () => {
    setResume({ ...formData });
  };

  return (
    <div className="resume-page">

      <div className="resume-header">
        <h1>Resume Builder</h1>
        <p>Enter your details to create your placement resume.</p>
      </div>

      <div className="resume-form">

        <div className="form-section">
          <h2>Personal Details</h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />

          <input
            type="text"
            name="linkedin"
            placeholder="LinkedIn Profile"
            value={formData.linkedin}
            onChange={handleChange}
          />
        </div>

        <div className="form-section">
          <h2>Education</h2>

          <input
            type="text"
            name="college"
            placeholder="College / University"
            value={formData.college}
            onChange={handleChange}
          />

          <input
            type="text"
            name="degree"
            placeholder="Degree / Branch"
            value={formData.degree}
            onChange={handleChange}
          />

          <input
            type="text"
            name="year"
            placeholder="Year of Graduation"
            value={formData.year}
            onChange={handleChange}
          />

          <input
            type="text"
            name="cgpa"
            placeholder="CGPA / Percentage"
            value={formData.cgpa}
            onChange={handleChange}
          />
        </div>

        <div className="form-section">
          <h2>Skills</h2>

          <input
            type="text"
            name="skills"
            placeholder="Example: C++, JavaScript, React, SQL"
            value={formData.skills}
            onChange={handleChange}
          />
        </div>

        <div className="form-section">
          <h2>Projects</h2>

          <input
            type="text"
            name="projectName"
            placeholder="Project Name"
            value={formData.projectName}
            onChange={handleChange}
          />

          <textarea
            name="projectDescription"
            placeholder="Brief description of your project"
            rows="4"
            value={formData.projectDescription}
            onChange={handleChange}
          ></textarea>
        </div>

        <button
          type="button"
          className="generate-btn"
          onClick={handleGenerate}
        >
          Generate Resume
        </button>

      </div>

      {resume && (
        <div className="resume-preview">

          <h2>{resume.name || "Your Name"}</h2>

          <p>
            {resume.email}
            {resume.phone && ` | ${resume.phone}`}
          </p>

          {resume.linkedin && <p>{resume.linkedin}</p>}

          <hr />

          <h3>Education</h3>
          <p>{resume.college}</p>
          <p>{resume.degree}</p>
          <p>
            {resume.year}
            {resume.cgpa && ` | ${resume.cgpa}`}
          </p>

          <h3>Skills</h3>
          <p>{resume.skills}</p>

          <h3>Projects</h3>
          <p>
            <strong>{resume.projectName}</strong>
          </p>
          <p>{resume.projectDescription}</p>
<button
  className="download-btn"
  onClick={() => window.print()}
>
  Download Resume
</button>
        </div>
      )}

    </div>
  );
}

export default ResumeBuilder;