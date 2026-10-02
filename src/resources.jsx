import { Link } from "react-router-dom";
import "./resources.css";

function Resources() {
  const resources = [
    {
      title: "DSA Practice",
      description: "Learn and practice arrays, strings, linked lists, stacks and queues.",
      link: "/dsa",
      button: "Start Practicing",
    },
    {
      title: "Aptitude Preparation",
      description: "Practice quantitative aptitude, logical reasoning and verbal ability.",
      link: "/aptitude",
      button: "Practice Aptitude",
    },
    {
      title: "Mock Interview",
      description: "Prepare for technical, HR and communication interview rounds.",
      link: "/mock-interview",
      button: "Start Interview",
    },
    {
      title: "Resume Builder",
      description: "Create a professional resume for placement applications.",
      link: "/resume-builder",
      button: "Build Resume",
    },
  ];

  return (
    <div className="resources-page">
      <h1>Learning Resources</h1>
      <p className="resources-subtitle">
        Explore useful sections to prepare for your placements.
      </p>

      <div className="resources-grid">
        {resources.map((resource) => (
          <div className="resource-card" key={resource.title}>
            <h2>{resource.title}</h2>
            <p>{resource.description}</p>
            <Link to={resource.link}>
              <button>{resource.button}</button>
            </Link>
          </div>
        ))}
      </div>

      <Link to="/dashboard" className="resources-back">
        Back to Dashboard
      </Link>
    </div>
  );
}

export default Resources;