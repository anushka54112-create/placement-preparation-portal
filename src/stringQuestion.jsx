import { useState } from "react";
import "./stringQuestion.css";

function StringQuestion() {
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
    <div className="string-question-page">

      <div className="string-question-container">

        <h1>String Practice</h1>

        <div className="string-question-section">

          <h2>Reverse a string</h2>

          <p>
            Given a string, write a program to reverse the string.
          </p>

          <h3>Example</h3>

          <div className="string-example">
            <p>Input: hello</p>
            <p>Output: olleh</p>
          </div>

          <h3>Your Answer</h3>

          <textarea
            className="string-answer-box"
            rows="10"
            placeholder="Write your C++ solution here..."
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          ></textarea>

          <button
            className="string-submit-answer"
            onClick={handleSubmit}
          >
            Submit Answer
          </button>

          {submitted && (
            <div>
              <p className="string-success-message">
                Answer submitted successfully.
              </p>

              <button
                className="string-view-solution"
                onClick={() => setShowSolution(true)}
              >
                View Solution
              </button>
            </div>
          )}

          {showSolution && (
            <div className="string-solution-section">

              <h3>Solution</h3>

              <pre>{`#include <iostream>
#include <string>
using namespace std;

int main() {
    string str = "hello";

    for (int i = str.length() - 1; i >= 0; i--) {
        cout << str[i];
    }

    return 0;
}`}</pre>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}

export default StringQuestion;