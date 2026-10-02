import { useState } from "react";
import "./linkedListReverse.css";

function LinkedListReverse() {
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
    <div className="linked-reverse-page">

      <div className="linked-reverse-container">

        <h1>Linked List Practice</h1>

        <h2>Reverse a linked list</h2>

        <p>
          Given a linked list, write a program to reverse the linked list
          and print the reversed list.
        </p>

        <h3>Example</h3>

        <div className="linked-reverse-example">
          <p>Input: 10 → 20 → 30 → 40</p>
          <p>Output: 40 → 30 → 20 → 10</p>
        </div>

        <h3>Your Answer</h3>

        <textarea
          className="linked-reverse-answer"
          rows="10"
          placeholder="Write your C++ solution here..."
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        ></textarea>

        <button
          type="button"
          className="linked-reverse-submit"
          onClick={handleSubmit}
        >
          Submit Answer
        </button>

        {submitted && (
          <div>

            <p className="linked-reverse-success">
              Answer submitted successfully.
            </p>

            <button
              type="button"
              className="linked-reverse-view"
              onClick={() => setShowSolution(true)}
            >
              View Solution
            </button>

          </div>
        )}

        {showSolution && (
          <div className="linked-reverse-solution">

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

    Node* previous = nullptr;
    Node* current = head;
    Node* nextNode = nullptr;

    while (current != nullptr) {

        nextNode = current->next;
        current->next = previous;
        previous = current;
        current = nextNode;
    }

    head = previous;

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

export default LinkedListReverse;