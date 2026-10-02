import { Link } from "react-router-dom";
import "./arrays.css";

function Arrays() {
  return (
    <div className="arrays-page">

      <div className="arrays-header">
        <h1>Arrays</h1>
      </div>

      <div className="arrays-container">

        <div className="question-card">
          <h3>Question 1</h3>
          <p>Find the largest element in an array.</p>
          <Link to="/array-question">
  <button>Solve</button>
</Link>
        </div>

        <div className="question-card">
          <h3>Question 2</h3>
          <p>Find the smallest element in an array.</p>
          <Link to="/array-smallest">
  <button>Solve</button>
</Link>
        </div>

        <div className="question-card">
          <h3>Question 3</h3>
          <p>Calculate the sum of all elements in an array.</p>
          <Link to="/array-sum">
  <button>Solve</button>
</Link>
        </div>

        <div className="question-card">
          <h3>Question 4</h3>
          <p>Reverse an array.</p>
          <Link to="/array-reverse">
  <button>Solve</button>
</Link>
        </div>

        <div className="question-card">
          <h3>Question 5</h3>
          <p>Find whether an element exists in an array.</p>
          <Link to="/array-search">
  <button>Solve</button>
</Link>
        </div>

      </div>

    </div>
  );
}

export default Arrays;