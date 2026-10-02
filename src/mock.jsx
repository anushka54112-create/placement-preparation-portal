import { useState } from "react";
import "./mock.css";

function Mock() {
  const questions = [
    {
      question: "What is 20% of 150?",
      options: ["20", "25", "30", "35"],
      answer: "30",
    },
    {
      question: "Find the next number: 3, 6, 9, 12, ?",
      options: ["13", "14", "15", "16"],
      answer: "15",
    },
    {
      question: "Which data structure follows FIFO?",
      options: ["Stack", "Queue", "Tree", "Graph"],
      answer: "Queue",
    },
    {
      question: "Which keyword is used to declare a constant in JavaScript?",
      options: ["var", "let", "const", "int"],
      answer: "const",
    },
    {
      question: "What is the time complexity of Binary Search?",
      options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
      answer: "O(log n)",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleNext = () => {
    if (
      selectedAnswer === questions[currentQuestion].answer
    ) {
      setScore(score + 1);
    }

    setSelectedAnswer("");

    if (currentQuestion === questions.length - 1) {
      setCompleted(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setScore(0);
    setCompleted(false);
  };

  return (
    <div className="mock-page">
      <div className="mock-card">
        <h1>Mock Test</h1>
        <p>Test your placement preparation</p>

        {!completed ? (
          <>
            <p>
              Question {currentQuestion + 1} of {questions.length}
            </p>

            <h3>{questions[currentQuestion].question}</h3>

            <div className="mock-options">
              {questions[currentQuestion].options.map((option) => (
                <button
                  key={option}
                  className={
                    selectedAnswer === option ? "selected-option" : ""
                  }
                  onClick={() => setSelectedAnswer(option)}
                >
                  {option}
                </button>
              ))}
            </div>

            <button
              className="mock-next"
              disabled={!selectedAnswer}
              onClick={handleNext}
            >
              {currentQuestion === questions.length - 1
                ? "Finish Test"
                : "Next"}
            </button>
          </>
        ) : (
          <>
            <h2>Test Completed!</h2>
            <h3>
              Your Score: {score} / {questions.length}
            </h3>
            <button className="mock-next" onClick={handleRestart}>
              Try Again
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Mock;