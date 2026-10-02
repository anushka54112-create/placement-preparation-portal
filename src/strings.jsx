import { Link } from "react-router-dom";
import "./strings.css";

function Strings() {
  return (
    <div className="strings-page">

      <div className="strings-header">
        <h1>Strings</h1>
      </div>

      <div className="strings-container">

        <div className="string-question">
          <h3>Question 1</h3>
          <p>Reverse a string.</p>
          <Link to="/string-question">
  <button>Solve</button>
</Link>
        </div>

        <div className="string-question">
          <h3>Question 2</h3>
          <p>Check whether a string is a palindrome.</p>
          <Link to="/string-palindrome">
  <button>Solve</button>
</Link>
        </div>

        <div className="string-question">
          <h3>Question 3</h3>
          <p>Count the number of vowels in a string.</p>
          <Link to="/string-vowels">
  <button>Solve</button>
</Link>
        </div>

        <div className="string-question">
          <h3>Question 4</h3>
          <p>Find the length of a string without using a built-in function.</p>
          <Link to="/string-length">
  <button>Solve</button>
</Link>
        </div>

        <div className="string-question">
          <h3>Question 5</h3>
          <p>Find the first non-repeating character in a string.</p>
          <Link to="/string-non-repeating">
  <button>Solve</button>
</Link>
        </div>

      </div>

    </div>
  );
}

export default Strings;