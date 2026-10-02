import { useState } from "react";
import "./arrayQuestion.css";

function ArraySearch() {
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
    <div className="array-question-page">
      <div className="array-question-container">

        <h1>Array Practice</h1>

        <div className="question-section">
          <h2>Find whether an element exists in an array</h2>

          <p>
            Given an array and a target value, check whether the target
            element is present in the array.
          </p>

          <h3>Example</h3>

          <div className="example">
            <p>Input: Array = 10, 25, 7, 40, 15; Target = 7</p>
            <p>Output: Element found</p>
          </div>
        </div>

        <div className="answer-section">
          <h3>Your Answer</h3>

          <textarea
            className="answer-box"
            rows="10"
            placeholder="Write your C++ solution here..."
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />

          <button
            className="submit-answer"
            onClick={handleSubmit}
          >
            Submit Answer
          </button>

          {submitted && (
            <div>
              <p className="success-message">
                Answer submitted successfully.
              </p>

              <button
                className="view-solution"
                onClick={() => setShowSolution(true)}
              >
                View Solution
              </button>
            </div>
          )}
        </div>

        {showSolution && (
          <div className="solution-section">
            <h3>Solution</h3>

            <pre>{`#include <iostream>
using namespace std;

int main() {
    int arr[] = {10, 25, 7, 40, 15};
    int n = 5;
    int target = 7;
    bool found = false;

    for (int i = 0; i < n; i++) {
        if (arr[i] == target) {
            found = true;
            break;
        }
    }

    if (found) {
        cout << "Element found";
    } else {
        cout << "Element not found";
    }

    return 0;
}`}</pre>
          </div>
        )}

      </div>
    </div>
  );
}

export default ArraySearch;