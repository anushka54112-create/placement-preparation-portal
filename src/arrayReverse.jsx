import { useState } from "react";
import "./arrayQuestion.css";

function ArrayReverse() {
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
          <h2>Reverse an array</h2>

          <p>
            Given an array of integers, reverse the order of its elements.
          </p>

          <h3>Example</h3>

          <div className="example">
            <p>Input: 10, 25, 7, 40, 15</p>
            <p>Output: 15, 40, 7, 25, 10</p>
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

    for (int i = 0; i < n / 2; i++) {
        int temp = arr[i];
        arr[i] = arr[n - 1 - i];
        arr[n - 1 - i] = temp;
    }

    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }

    return 0;
}`}</pre>
          </div>
        )}

      </div>
    </div>
  );
}

export default ArrayReverse;