import { useState } from "react";
import "./stringPalindrome.css";

function StringLength() {
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  const handleSubmit = () => {
    if (answer.trim() === "") {
      alert("Please write your answer first.");
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className="palindrome-page">
      <div className="palindrome-container">

        <h1>String Practice</h1>

        <div className="palindrome-question">
          <h2>Find the length of a string without using a built-in function</h2>

          <p>
            Given a string, find its length without using any built-in
            length function.
          </p>

          <h3>Example</h3>

          <div className="palindrome-example">
            <p>Input: hello</p>
            <p>Output: 5</p>
          </div>

          <h3>Your Answer</h3>

          <textarea
            className="palindrome-answer-box"
            rows="10"
            placeholder="Write your C++ solution here..."
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />

          <button
            className="palindrome-submit"
            onClick={handleSubmit}
          >
            Submit Answer
          </button>

          {submitted && (
            <div>
              <p className="palindrome-success">
                Answer submitted successfully.
              </p>

              <button
                className="palindrome-view-solution"
                onClick={() => setShowSolution(true)}
              >
                View Solution
              </button>
            </div>
          )}

          {showSolution && (
            <div className="palindrome-solution">
              <h3>Solution</h3>

              <pre>{`#include <iostream>
using namespace std;

int main() {
    char str[] = "hello";
    int count = 0;

    while (str[count] != '\\0') {
        count++;
    }

    cout << "Length = " << count;

    return 0;
}`}</pre>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default StringLength;