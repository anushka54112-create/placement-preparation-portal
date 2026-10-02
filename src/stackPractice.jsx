import { useLocation } from "react-router-dom";

function StackPractice() {
  const location = useLocation();
  const question = location.state?.question;

  const questionContent = {
    1: {
      title: "Implement Stack Using Array",
      description: "Write a C++ program to implement a stack using an array.",
      operations: [
        "Push an element into the stack.",
        "Pop an element from the stack.",
        "Display the top element.",
        "Display all stack elements.",
      ],
      example: [
        "Push: 10, 20, 30",
        "Stack: 10 20 30",
        "Pop: 30",
        "Stack after pop: 10 20",
      ],
    },

    2: {
      title: "Implement Push and Pop Operations",
      description: "Write a C++ program to perform push and pop operations in a stack using an array.",
      operations: [
        "Push elements into the stack.",
        "Pop an element from the stack.",
        "Display the updated stack.",
      ],
      example: [
        "Push: 10, 20, 30",
        "Stack: 10 20 30",
        "Pop: 30",
        "Push: 40",
        "Stack after operations: 10 20 40",
      ],
    },

    3: {
      title: "Implement Queue Using Array",
      description: "Write a C++ program to implement a queue using an array.",
      operations: [
        "Enqueue: Insert an element into the queue.",
        "Dequeue: Remove an element from the queue.",
        "Display all queue elements.",
      ],
      example: [
        "Enqueue: 10, 20, 30",
        "Queue: 10 20 30",
        "Dequeue: 10",
        "Queue after dequeue: 20 30",
      ],
    },

    4: {
      title: "Implement Enqueue and Dequeue Operations",
      description: "Write a C++ program to perform enqueue and dequeue operations in a queue using an array.",
      operations: [
        "Enqueue elements into the queue.",
        "Dequeue an element from the queue.",
        "Display the updated queue.",
      ],
      example: [
        "Enqueue: 10, 20, 30",
        "Queue: 10 20 30",
        "Dequeue: 10",
        "Enqueue: 40",
        "Queue after operations: 20 30 40",
      ],
    },

    5: {
      title: "Check Balanced Parentheses Using Stack",
      description: "Write a C++ program to check whether the given parentheses are balanced using a stack.",
      operations: [
        "Use a stack to check opening and closing brackets.",
        "Check whether every opening bracket has a matching closing bracket.",
        "Display whether the parentheses are balanced or not.",
      ],
      example: [
        "Input: { [ ( ) ] }",
        "Output: Balanced",
        "Input: { [ ( ] ) }",
        "Output: Not Balanced",
      ],
    },
  };

  const content = question ? questionContent[question.id] : null;

  return (
    <div>
      <h1>Stack & Queue Practice</h1>

      {content ? (
        <>
          <h2>
            Question {question.id}: {content.title}
          </h2>

          <p>{content.description}</p>

          <ol>
            {content.operations.map((operation, index) => (
              <li key={index}>{operation}</li>
            ))}
          </ol>

          <h3>Example</h3>

          {content.example.map((line, index) => (
            <p key={index}>{line}</p>
          ))}

          <h3>Write your solution in C++</h3>

          <textarea
            rows="12"
            cols="60"
            placeholder="Write your C++ code here..."
          />
        </>
      ) : (
        <p>Please select a question from the Stack & Queue page.</p>
      )}
    </div>
  );
}

export default StackPractice;