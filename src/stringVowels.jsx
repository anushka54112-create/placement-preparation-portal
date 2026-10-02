import { useState } from "react";
import "./stringPalindrome.css";

function StringVowels() {
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
          <h2>Count the number of vowels in a string</h2>

          <p>
            Given a string, count how many vowels (a, e, i, o, u) it contains.
          </p>

          <h3>Example</h3>

          <div className="palindrome-example">
            <p>Input: education</p>
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
#include <string>
using namespace std;

int main() {
    string str = "education";
    int count = 0;

    for (int i = 0; i < str.length(); i++) {
        char ch = str[i];

        if (ch == 'a' || ch == 'e' || ch == 'i' ||
            ch == 'o' || ch == 'u' ||
            ch == 'A' || ch == 'E' || ch == 'I' ||
            ch == 'O' || ch == 'U') {
            count++;
        }
    }

    cout << "Number of vowels = " << count;

    return 0;
}`}</pre>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default StringVowels;