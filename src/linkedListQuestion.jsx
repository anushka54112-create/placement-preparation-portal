import { useState } from "react";
import "./linkedListQuestion.css";

function LinkedListQuestion() {
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

  const handleViewSolution = () => {
    setShowSolution(true);
  };

  return (
    <div className="linked-question-page">

      <div className="linked-question-container">

        <h1>Linked List Practice</h1>

        <h2>
          Insert a node at the beginning of a linked list
        </h2>

        <p>
          Given a linked list, write a program to insert a new node
          at the beginning of the list.
        </p>

        <h3>Example</h3>

        <div className="linked-example">
          <p>Input: 10 → 20 → 30</p>
          <p>Insert: 5</p>
          <p>Output: 5 → 10 → 20 → 30</p>
        </div>

        <h3>Your Answer</h3>

        <textarea
          className="linked-answer-box"
          rows="10"
          placeholder="Write your C++ solution here..."
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        ></textarea>

        <br />

        <button
          type="button"
          className="linked-submit"
          onClick={handleSubmit}
        >
          Submit Answer
        </button>

        {submitted && (
          <div>

            <p className="linked-success">
              Answer submitted successfully.
            </p>

            <button
              type="button"
              className="linked-view-solution"
              onClick={handleViewSolution}
            >
              View Solution
            </button>

          </div>
        )}

        {showSolution && (
          <div className="linked-solution">

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

    // Insert new node at beginning
    Node* newNode = new Node{5, head};

    head = newNode;

    // Print linked list
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
  );
}

export default LinkedListQuestion;