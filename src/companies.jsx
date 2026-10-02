import { Link } from "react-router-dom";
import "./companies.css";

function Companies() {
  const companies = [
    {
      name: "TCS",
      description: "Prepare for aptitude, coding and technical interview rounds.",
    },
    {
      name: "Infosys",
      description: "Practice problem-solving, programming and interview questions.",
    },
    {
      name: "Wipro",
      description: "Revise aptitude, logical reasoning and technical concepts.",
    },
    {
      name: "Accenture",
      description: "Prepare for cognitive, technical and communication assessments.",
    },
    {
      name: "Cognizant",
      description: "Practice coding, aptitude and technical interview topics.",
    },
  ];

  return (
    <div className="companies-page">
      <h1>Companies</h1>
      <p className="companies-subtitle">
        Explore companies and prepare for their placement process.
      </p>

      <div className="companies-grid">
        {companies.map((company) => (
          <div className="company-card" key={company.name}>
            <h2>{company.name}</h2>
            <p>{company.description}</p>
            <Link to="/mock-interview">
              <button>Prepare Now</button>
            </Link>
          </div>
        ))}
      </div>

      <Link to="/dashboard" className="companies-back">
        Back to Dashboard
      </Link>
    </div>
  );
}

export default Companies;