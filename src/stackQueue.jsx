import { useNavigate } from "react-router-dom";
import "./stackQueue.css";

function StackQueue() {
  const navigate = useNavigate();

  const questions = [
    {
      id: 1,
      title: "Question 1",
      description: "Implement a stack using an array.",
    },
    {
      id: 2,
      title: "Question 2",
      description: "Implement push and pop operations in a stack.",
    },
    {
      id: 3,
      title: "Question 3",
      description: "Implement a queue using an array.",
    },
    {
      id: 4,
      title: "Question 4",
      description: "Implement enqueue and dequeue operations in a queue.",
    },
    {
      id: 5,
      title: "Question 5",
      description: "Check whether parentheses are balanced using a stack.",
    },
  ];

  return (
    <div className="stack-queue-page">
      <header className="stack-queue-header">
        <h1>Stack &amp; Queue</h1>
        <p>Practice basic Stack and Queue questions</p>
      </header>

      <div className="stack-queue-container">
        {questions.map((question) => (
          <div className="stack-queue-question" key={question.id}>
            <h2>{question.title}</h2>
            <p>{question.description}</p>

            <button
              onClick={() =>
                navigate("/stack-practice", {
                  state: { question },
                })
              }
            >
              Practice
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StackQueue;