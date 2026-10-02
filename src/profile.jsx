import { Link } from "react-router-dom";
import "./profile.css";

function Profile() {
  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-avatar">S</div>

        <h1>Student Profile</h1>
        <p className="profile-subtitle">
          Your placement preparation account
        </p>

        <div className="profile-details">
          <div>
            <span>Name</span>
            <strong>Student</strong>
          </div>

          <div>
            <span>Email</span>
            <strong>Not added yet</strong>
          </div>

          <div>
            <span>Course</span>
            <strong>CSIT</strong>
          </div>
        </div>

        <Link to="/dashboard" className="profile-back">
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}

export default Profile;