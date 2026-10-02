import { Link } from "react-router-dom";
import "./dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      {/* Top Navbar */}
      <nav className="dashboard-navbar">
        <h2>Placement Prep</h2>

        <div className="dashboard-user">
          Student
        </div>
      </nav>

      <div className="dashboard-container">

        {/* Sidebar */}
        <aside className="sidebar">
          <h3>Menu</h3>

          <Link to="/dashboard">Dashboard</Link>
          <Link to="/dsa">DSA & Coding</Link>
          <Link to="/aptitude">Aptitude</Link>
          <Link to="/mock-interview">Mock Interview</Link>
          <Link to="/resume-builder">Resume Builder</Link>
          <Link to="/companies">Companies</Link>
         <Link to="/resources">Resources</Link>
          <Link to="/profile">Profile</Link>
        </aside>

        {/* Main Dashboard */}
        <main className="dashboard-main">

          {/* Welcome */}
          <div className="welcome-section">
            <h1>Welcome back!</h1>

            <p>
              Continue your placement preparation and improve your skills.
            </p>
          </div>

          {/* Progress */}
          <div className="progress-card">
            <h2>Your Preparation Progress</h2>

            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>

            <p>25% completed</p>
          </div>

          {/* Section Heading */}
          <div className="section-heading">
            <h2>Start Preparing</h2>

            <p>
              Select a section to continue your preparation.
            </p>
          </div>

          {/* Cards */}
          <div className="dashboard-cards">

            {/* DSA */}
            <div className="dashboard-card">
              <h3>DSA & Coding</h3>

              <p>
                Practice arrays, strings, linked lists and other important
                coding topics.
              </p>

              <Link to="/dsa">
                <button>Practice Now</button>
              </Link>
            </div>

            {/* Aptitude */}
            <div className="dashboard-card">
              <h3>Aptitude</h3>

              <p>
                Improve quantitative aptitude, logical reasoning and verbal
                ability.
              </p>

              <Link to="/aptitude">
                <button>Start Practice</button>
              </Link>
            </div>

            {/* Mock Interview */}
            <div className="dashboard-card">
              <h3>Mock Interview</h3>

              <p>
                Practice technical and HR interview questions before your
                placement interviews.
              </p>

              <Link to="/mock-interview">
  <button>Start Interview</button>
</Link>
            </div>

            {/* Resume Builder */}
            <div className="dashboard-card">
              <h3>Resume Builder</h3>

              <p>
                Create a clean and professional resume for placement
                applications.
              </p>

              <Link to="/resume-builder">
  <button>Build Resume</button>
</Link>
            </div>

          </div>

        </main>
      </div>
    </div>
  );
}

export default Dashboard;