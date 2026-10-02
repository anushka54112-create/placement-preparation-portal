import { useState } from "react";
import "./stringPalindrome.css";

function StringNonRepeating() {
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
          <h2>Find the first non-repeating character in a string</h2>

          <p>
            Given a string, find the first character that appears only once.
          </p>

          <h3>Example</h3>

          <div className="palindrome-example">
            <p>Input: swiss</p>
            <p>Output: w</p>
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
#include <string>
using namespace std;

int main() {
    string str = "swiss";

    for (int i = 0; i < str.length(); i++) {
        int count = 0;

        for (int j = 0; j < str.length(); j++) {
            if (str[i] == str[j]) {
                count++;
            }
        }

        if (count == 1) {
            cout << "First non-repeating character = " << str[i];
            return 0;
        }
    }

    cout << "No non-repeating character found";

    return 0;
}`}</pre>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default StringNonRepeating;