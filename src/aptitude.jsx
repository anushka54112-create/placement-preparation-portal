import "./aptitude.css";
import { useState } from "react";
function Aptitude() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const questions = {
  "Quantitative Aptitude": [
    {
      question: "What is 25% of 200?",
      options: ["25", "40", "50", "75"],
      answer: "50",
    },
    {
      question: "What is the square of 12?",
      options: ["124", "144", "132", "154"],
      answer: "144",
    },
    {
      question: "If 5 pens cost ₹50, what is the cost of 1 pen?",
      options: ["₹5", "₹10", "₹15", "₹20"],
      answer: "₹10",
    },
  ],
  "Logical Reasoning": [
    {
      question: "Find the next number: 2, 4, 6, 8, ?",
      options: ["9", "10", "12", "14"],
      answer: "10",
    },
    {
      question: "Which one is different?",
      options: ["Apple", "Mango", "Banana", "Carrot"],
      answer: "Carrot",
    },
    {
      question: "If A = 1, B = 2, then C = ?",
      options: ["2", "3", "4", "5"],
      answer: "3",
    },
  ],
  "Verbal Ability": [
    {
      question: "Choose the synonym of 'Happy'.",
      options: ["Sad", "Joyful", "Angry", "Tired"],
      answer: "Joyful",
    },
    {
      question: "Choose the correct spelling.",
      options: ["Recieve", "Receive", "Receeve", "Receve"],
      answer: "Receive",
    },
    {
      question: "Choose the antonym of 'Brave'.",
      options: ["Courageous", "Strong", "Cowardly", "Fearless"],
      answer: "Cowardly",
    },
  ],
};
const [currentQuestion, setCurrentQuestion] = useState(0);
const [selectedAnswer, setSelectedAnswer] = useState("");
const [score, setScore] = useState(0);
const handlePractice = (category) => {
  console.log("Practice clicked:", category);
  setSelectedCategory(category);
  setCurrentQuestion(0);
  setSelectedAnswer("");
  setScore(0);
};
  return (
  <div className="aptitude-page">
    {!selectedCategory ? (
      <>
        <div className="aptitude-header">
          <h1>Aptitude</h1>
        </div>

        <div className="aptitude-container">
          <div className="aptitude-card">
            <h3>Quantitative Aptitude</h3>
            <button onClick={() => handlePractice("Quantitative Aptitude")}>
              Practice
            </button>
          </div>

          <div className="aptitude-card">
            <h3>Logical Reasoning</h3>
            <button onClick={() => handlePractice("Logical Reasoning")}>
              Practice
            </button>
          </div>

          <div className="aptitude-card">
            <h3>Verbal Ability</h3>
            <button onClick={() => handlePractice("Verbal Ability")}>
              Practice
            </button>
          </div>
        </div>
      </>
    ) : (
      <div className="aptitude-container">
        <div className="aptitude-card aptitude-quiz">
          <h2>{selectedCategory}</h2>

          {currentQuestion < questions[selectedCategory].length ? (
            <>
              <p>
                Question {currentQuestion + 1} of{" "}
                {questions[selectedCategory].length}
              </p>

              <h3>{questions[selectedCategory][currentQuestion].question}</h3>

              {questions[selectedCategory][currentQuestion].options.map(
                (option) => (
                  <button
                    key={option}
                    onClick={() => setSelectedAnswer(option)}
                    style={{
                      background:
                        selectedAnswer === option ? "#4338ca" : "#4f46e5",
                      margin: "6px",
                    }}
                  >
                    {option}
                  </button>
                )
              )}

              <br />

              <button
                disabled={!selectedAnswer}
                onClick={() => {
                  if (
                    selectedAnswer ===
                    questions[selectedCategory][currentQuestion].answer
                  ) {
                    setScore(score + 1);
                  }

                  setSelectedAnswer("");
                  setCurrentQuestion(currentQuestion + 1);
                }}
              >
                Next
              </button>
            </>
          ) : (
            <>
              <h3>Quiz Completed!</h3>
              <p>
                Your Score: {score} / {questions[selectedCategory].length}
              </p>

              <button onClick={() => handlePractice(selectedCategory)}>
                Try Again
              </button>

              <button onClick={() => setSelectedCategory("")}>
                Back to Categories
              </button>
            </>
          )}
        </div>
      </div>
    )}
  </div>
);
}

export default Aptitude;