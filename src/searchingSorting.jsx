import { useNavigate } from "react-router-dom";
import "./dsa.css";

function SearchingSorting() {
  const navigate = useNavigate();

  const questions = [
    { id: 1, title: "Linear Search", type: "Searching" },
    { id: 2, title: "Binary Search", type: "Searching" },
    { id: 3, title: "Bubble Sort", type: "Sorting" },
    { id: 4, title: "Selection Sort", type: "Sorting" },
    { id: 5, title: "Insertion Sort", type: "Sorting" },
  ];

  return (
    <div className="dsa-page">
      <h1>Searching & Sorting</h1>

      <h2>Searching</h2>
      {questions
        .filter((q) => q.type === "Searching")
        .map((question) => (
          <div className="dsa-card" key={question.id}>
            <h2>{question.title}</h2>
            <button
              onClick={() =>
                navigate("/searching-sorting-practice", {
                  state: { question },
                })
              }
            >
              Practice
            </button>
          </div>
        ))}

      <h2>Sorting</h2>
      {questions
        .filter((q) => q.type === "Sorting")
        .map((question) => (
          <div className="dsa-card" key={question.id}>
            <h2>{question.title}</h2>
            <button
              onClick={() => {
  console.log("Clicked:", question);
  navigate("/searching-sorting-practice", {
    state: { question },
  });
}}
            >
              Practice
            </button>
          </div>
        ))}
    </div>
  );
}

export default SearchingSorting;