import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <nav className="navbar">
        <h2>Placement Prep</h2>

        <div className="nav-links">
         <Link to="/">Home</Link>
<Link to="/dsa">DSA</Link>
<Link to="/aptitude">Aptitude</Link>
<Link to="/mock-interview">Interview</Link>
<Link to="/resume">Resume</Link>
       <Link to="/login">Login</Link>
        </div>
      </nav><button
  onClick={() => {
    fetch("http://localhost:5001/")
      .then((response) => response.text())
      .then((data) => alert(data))
      .catch((error) => alert("Backend not connected"));
  }}
>
  Test Backend
</button>

      <section className="hero">
        <div className="hero-content">
          <h1>
            Prepare Smarter.
            <br />
            Get Placed Faster.
          </h1>

          <p>
            One platform to prepare for coding, aptitude,
            interviews and your dream placement.
          </p>

          <Link to="/dashboard">
  <button className="start-btn">
    Start Preparing
  </button>
</Link>
        </div>
      </section>

      <section className="features">
        <h2>Everything You Need for Placement</h2>

        <div className="feature-container">

          <div className="feature-card">
            <h3>💻 DSA & Coding</h3>
            <p>
              Practice arrays, strings, linked lists, trees,
              searching, sorting and more.
            </p>
          </div>

          <div className="feature-card">
            <h3>🧠 Aptitude</h3>
            <p>
              Improve quantitative aptitude, logical reasoning
              and verbal ability.
            </p>
          </div>

<div className="feature-card">
  <h3>📝 Mock Test</h3>
  <p>
    Test your aptitude, programming and placement preparation
    with practice questions.
  </p>
  <Link to="/mock">
    <button>Start Test</button>
  </Link>
</div>
          <div className="feature-card">
            <h3>📄 Resume Builder</h3>
            <p>
              Create a professional resume and get useful
              suggestions for improvement.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Home;