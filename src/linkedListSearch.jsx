import { useState } from "react";
import "./linkedListSearch.css";

function LinkedListSearch() {
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
    <div className="linked-search-page">
      <div className="linked-search-container">

        <h1>Linked List Practice</h1>

        <h2>Search for an element in a linked list</h2>

        <p>
          Given a linked list and a value, write a program to search
          whether the given value is present in the linked list.
        </p>

        <h3>Example</h3>

        <div className="linked-search-example">
          <p>Input: 10 → 20 → 30 → 40</p>
          <p>Search: 30</p>
          <p>Output: Element found</p>
        </div>

        <h3>Your Answer</h3>

        <textarea
          className="linked-search-answer"
          rows="10"
          placeholder="Write your C++ solution here..."
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />

        <button
          type="button"
          className="linked-search-submit"
          onClick={handleSubmit}
        >
          Submit Answer
        </button>

        {submitted && (
          <>
            <p className="linked-search-success">
              Answer submitted successfully.
            </p>

            <button
              type="button"
              className="linked-search-view"
              onClick={() => setShowSolution(true)}
            >
              View Solution
            </button>
          </>
        )}

        {showSolution && (
          <div className="linked-search-solution">
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

    int searchValue = 30;

    Node* temp = head;
    bool found = false;

    while (temp != nullptr) {
        if (temp->data == searchValue) {
            found = true;
            break;
        }

        temp = temp->next;
    }

    if (found)
        cout << "Element found";
    else
        cout << "Element not found";

    return 0;
}`}</pre>
          </div>
        )}

      </div>
    </div>
  );
}

export default LinkedListSearch;