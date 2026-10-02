import { useState } from "react";
import "./stringPalindrome.css";

function StringPalindrome() {
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

          <h2>Check whether a string is a palindrome</h2>

          <p>
            Given a string, check whether it reads the same forward and backward.
          </p>

          <h3>Example</h3>

          <div className="palindrome-example">
            <p>Input: madam</p>
            <p>Output: Palindrome</p>
          </div>

          <h3>Your Answer</h3>

          <textarea
            className="palindrome-answer-box"
            rows="10"
            placeholder="Write your C++ solution here..."
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          ></textarea>

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
    string str = "madam";
    bool palindrome = true;

    int start = 0;
    int end = str.length() - 1;

    while (start < end) {
        if (str[start] != str[end]) {
            palindrome = false;
            break;
        }

        start++;
        end--;
    }

    if (palindrome)
        cout << "Palindrome";
    else
        cout << "Not Palindrome";

    return 0;
}`}</pre>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}

export default StringPalindrome;