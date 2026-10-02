import { useState } from "react";
import "./linkedListLength.css";

function LinkedListLength() {
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
    <div className="linked-length-page">

      <div className="linked-length-container">

        <h1>Linked List Practice</h1>

        <h2>Find the length of a linked list</h2>

        <p>
          Given a linked list, write a program to find the total number
          of nodes present in the linked list.
        </p>

        <h3>Example</h3>

        <div className="linked-length-example">
          <p>Input: 10 → 20 → 30 → 40</p>
          <p>Output: 4</p>
        </div>

        <h3>Your Answer</h3>

        <textarea
          className="linked-length-answer"
          rows="10"
          placeholder="Write your C++ solution here..."
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        ></textarea>

        <button
          type="button"
          className="linked-length-submit"
          onClick={handleSubmit}
        >
          Submit Answer
        </button>

        {submitted && (
          <div>

            <p className="linked-length-success">
              Answer submitted successfully.
            </p>

            <button
              type="button"
              className="linked-length-view"
              onClick={() => setShowSolution(true)}
            >
              View Solution
            </button>

          </div>
        )}

        {showSolution && (
          <div className="linked-length-solution">

            <h3>Solution</h3>

            <pre>{`#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
};

int main() {

    Node* head = new Node{10, nullptr};
    head->next = new Node{20, nullptr};
    head->next->next = new Node{30, nullptr};
    head->next->next->next = new Node{40, nullptr};

    int count = 0;
    Node* temp = head;

    while (temp != nullptr) {
        count++;
        temp = temp->next;
    }

    cout << "Length of linked list = " << count;

    return 0;
}`}</pre>

          </div>
        )}

      </div>

    </div>
  );
}

export default LinkedListLength;