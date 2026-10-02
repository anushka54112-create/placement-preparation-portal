import "./mockInterview.css";
import { useState } from "react";
function MockInterview() {
  const [selectedRound, setSelectedRound] = useState("");
  const interviewQuestions = {
  "Technical Interview": [
    "Tell me about yourself.",
    "What is the difference between C and C++?",
    "What is the difference between Stack and Queue?",
  ],

  "HR Interview": [
    "Tell me about yourself.",
    "What are your strengths and weaknesses?",
    "Why should we hire you?",
  ],

  "Communication Round": [
    "Introduce yourself in English.",
    "Describe your favourite hobby.",
    "Where do you see yourself in five years?",
  ],
};

const [currentQuestion, setCurrentQuestion] = useState(0);
    return (
  <div className="interview-page">
    {!selectedRound ? (
      <>
        <div className="interview-header">
          <h1>Mock Interview</h1>
        </div>

        <div className="interview-container">
          <div className="interview-card">
            <h3>Technical Interview</h3>
            <button
              onClick={() => {
                setSelectedRound("Technical Interview");
                setCurrentQuestion(0);
              }}
            >
              Start Interview
            </button>
          </div>

          <div className="interview-card">
            <h3>HR Interview</h3>
            <button
              onClick={() => {
                setSelectedRound("HR Interview");
                setCurrentQuestion(0);
              }}
            >
              Start Interview
            </button>
          </div>

          <div className="interview-card">
            <h3>Communication Round</h3>
            <button
              onClick={() => {
                setSelectedRound("Communication Round");
                setCurrentQuestion(0);
              }}
            >
              Start Interview
            </button>
          </div>
        </div>
      </>
    ) : (
      <div className="interview-container">
        <div className="interview-card">
          <h2>{selectedRound}</h2>

          <p>
            Question {currentQuestion + 1} of{" "}
            {interviewQuestions[selectedRound].length}
          </p>

          <h3>{interviewQuestions[selectedRound][currentQuestion]}</h3>

          <button
            onClick={() => {
              if (
                currentQuestion <
                interviewQuestions[selectedRound].length - 1
              ) {
                setCurrentQuestion(currentQuestion + 1);
              } else {
                setSelectedRound("");
                setCurrentQuestion(0);
              }
            }}
          >
            {currentQuestion ===
            interviewQuestions[selectedRound].length - 1
              ? "Finish Round"
              : "Next Question"}
          </button>

          <button
            onClick={() => {
              setSelectedRound("");
              setCurrentQuestion(0);
            }}
          >
            Back to Rounds
          </button>
        </div>
      </div>
    )}
  </div>
);
}

export default MockInterview;