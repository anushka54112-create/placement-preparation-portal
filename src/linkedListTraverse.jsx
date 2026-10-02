import { useState } from "react";
import "./linkedListTraverse.css";

function LinkedListTraverse() {
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
    <div className="linked-traverse-page">

      <div className="linked-traverse-container">

        <h1>Linked List Practice</h1>

        <div className="linked-traverse-section">

          <h2>Traverse and print all elements of a linked list</h2>

          <p>
            Given a linked list, write a program to traverse the list
            and print all its elements.
          </p>

          <h3>Example</h3>

          <div className="linked-traverse-example">
            <p>Input: 10 → 20 → 30 → 40</p>
            <p>Output: 10 20 30 40</p>
          </div>

          <h3>Your Answer</h3>

          <textarea
            className="linked-traverse-answer"
            rows="10"
            placeholder="Write your C++ solution here..."
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          ></textarea>

          <button
            className="linked-traverse-submit"
            onClick={handleSubmit}
          >
            Submit Answer
          </button>

          {submitted && (
            <div>
              <p className="linked-traverse-success">
                Answer submitted successfully.
              </p>

              <button
                className="linked-traverse-view"
                onClick={() => setShowSolution(true)}
              >
                View Solution
              </button>
            </div>
          )}

          {showSolution && (
            <div className="linked-traverse-solution">

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

    Node* temp = head;

    while (temp != nullptr) {
        cout << temp->data << " ";
        temp = temp->next;
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

export default LinkedListTraverse;