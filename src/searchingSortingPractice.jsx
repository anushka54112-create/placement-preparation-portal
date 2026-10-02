import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./dsa.css";

function SearchingSortingPractice() {
  const location = useLocation();
  const navigate = useNavigate();
  const question = location.state?.question;

  const questionDetails = {
    1: {
      description:
        "Given an array and a target element, find the index of the target using Linear Search. If the target is not present, return -1.",
      example: "Array: [10, 20, 30, 40, 50]\nTarget: 30",
      output: "2",
    },
    2: {
      description:
        "Given a sorted array and a target element, find the index of the target using Binary Search. If the target is not present, return -1.",
      example: "Array: [10, 20, 30, 40, 50]\nTarget: 40",
      output: "3",
    },
    3: {
      description:
        "Given an array, sort its elements in ascending order using Bubble Sort.",
      example: "Array: [5, 3, 8, 1, 2]",
      output: "[1, 2, 3, 5, 8]",
    },
4: {
  description:
    "Given an array, sort its elements in ascending order using Selection Sort.",
  example: "Array: [64, 25, 12, 22, 11]",
  output: "[11, 12, 22, 25, 64]",
},
5: {
  description:
    "Given an array, sort its elements in ascending order using Insertion Sort.",
  example: "Array: [12, 11, 13, 5, 6]",
  output: "[5, 6, 11, 12, 13]",
},
};
  const details = questionDetails[question?.id];
  const [isCompleted, setIsCompleted] = useState(false);
  const [binaryArray] = useState([10, 20, 30, 40, 50]);
const [binaryTarget, setBinaryTarget] = useState(40);
const [binaryLow, setBinaryLow] = useState(0);
const [binaryHigh, setBinaryHigh] = useState(4);
const [binaryMid, setBinaryMid] = useState(null);
const [binaryFound, setBinaryFound] = useState(false);
const [binaryNotFound, setBinaryNotFound] = useState(false);

const handleBinaryNext = () => {
  if (binaryLow > binaryHigh || binaryFound || binaryNotFound) return;

  const mid = Math.floor((binaryLow + binaryHigh) / 2);
  setBinaryMid(mid);

  if (binaryArray[mid] === Number(binaryTarget)) {
    setBinaryFound(true);
  } else if (binaryArray[mid] < Number(binaryTarget)) {
    setBinaryLow(mid + 1);
  } else {
    setBinaryHigh(mid - 1);
  }
};

const handleBinaryReset = () => {
  setBinaryTarget(40);
  setBinaryLow(0);
  setBinaryHigh(4);
  setBinaryMid(null);
  setBinaryFound(false);
  setBinaryNotFound(false);
};
  const [linearArray, setLinearArray] = useState([10, 20, 30, 40, 50]);
const [linearTarget, setLinearTarget] = useState(30);
const [linearStep, setLinearStep] = useState(0);
const [linearFound, setLinearFound] = useState(false);

const handleLinearNext = () => {
  if (linearArray[linearStep] === Number(linearTarget)) {
  setLinearFound(true);
  setIsCompleted(true);
} else {
    setLinearStep(linearStep + 1);
  }
};

const handleLinearReset = () => {
  setLinearArray([10, 20, 30, 40, 50]);
  setLinearTarget(30);
  setLinearStep(0);
  setLinearFound(false);
  setIsCompleted(false);
};
const [sortArray, setSortArray] = useState([64, 25, 12, 22, 11]);
const [currentStep, setCurrentStep] = useState(0);

const handleNextStep = () => {
  if (currentStep >= sortArray.length - 1) return;

  const newArray = [...sortArray];
  let minIndex = currentStep;

  for (let j = currentStep + 1; j < newArray.length; j++) {
    if (newArray[j] < newArray[minIndex]) {
      minIndex = j;
    }
  }

  [newArray[currentStep], newArray[minIndex]] = [
    newArray[minIndex],
    newArray[currentStep],
  ];

  setSortArray(newArray);
  setCurrentStep(currentStep + 1);
};

const handleReset = () => {
  setSortArray([64, 25, 12, 22, 11]);
  setCurrentStep(0);
};
const [bubbleArray, setBubbleArray] = useState([5, 3, 8, 1, 2]);
const [bubbleStep, setBubbleStep] = useState(0);

const handleBubbleNext = () => {
  const newArray = [...bubbleArray];
  const i = Math.floor(bubbleStep / (newArray.length - 1));
  const j = bubbleStep % (newArray.length - 1);

  if (i >= newArray.length - 1) return;

  if (newArray[j] > newArray[j + 1]) {
    [newArray[j], newArray[j + 1]] = [
      newArray[j + 1],
      newArray[j],
    ];
  }

  setBubbleArray(newArray);
  setBubbleStep(bubbleStep + 1);
};

const handleBubbleReset = () => {
  setBubbleArray([5, 3, 8, 1, 2]);
  setBubbleStep(0);
};
const [insertionArray, setInsertionArray] = useState([12, 11, 13, 5, 6]);
const [insertionStep, setInsertionStep] = useState(1);

const handleInsertionNext = () => {
  if (insertionStep >= insertionArray.length) return;

  const newArray = [...insertionArray];
  const key = newArray[insertionStep];
  let j = insertionStep - 1;

  while (j >= 0 && newArray[j] > key) {
    newArray[j + 1] = newArray[j];
    j--;
  }

  newArray[j + 1] = key;

  setInsertionArray(newArray);
  setInsertionStep(insertionStep + 1);
};

const handleInsertionReset = () => {
  setInsertionArray([12, 11, 13, 5, 6]);
  setInsertionStep(1);
};
    return (
  <div className="dsa-page">
    <button
  onClick={() => navigate("/searching-sorting")}
  style={{
    marginBottom: "20px",
    padding: "10px 18px",
    background: "#374151",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  }}
>
  ← Back to DSA
</button>
    <h1 style={{ color: "#1f2937" }}>
        {isCompleted && (
  <p
    style={{
      color: "green",
      fontWeight: "bold",
      textAlign: "center",
      fontSize: "20px",
      lineHeight: "1.5",
      margin: "20px 0 30px",
    }}
  >
    ✓ Practice Completed!
  </p>
)}
      {question ? question.title : "Practice Question"}
    </h1>

    {details && (
      <div className="dsa-card">
        <div>
          <h2>Problem Statement</h2>
          <p>{details.description}</p>

          <h2>Example</h2>
          <pre>{details.example}</pre>

          <h2>Expected Output</h2>
          <pre>{details.output}</pre>
{question?.id === 2 && (
  <div>
    <h2>Interactive Binary Search</h2>
    <p>Har step mein middle element check karne ke liye Next Step click karo.</p>

    <label>
      Target:{" "}
      <input
        type="number"
        value={binaryTarget}
        onChange={(e) => {
          setBinaryTarget(e.target.value);
          setBinaryLow(0);
          setBinaryHigh(binaryArray.length - 1);
          setBinaryMid(null);
          setBinaryFound(false);
          setBinaryNotFound(false);
        }}
      />
    </label>

    <div
      style={{
        display: "flex",
        gap: "10px",
        margin: "20px 0",
      }}
    >
      {binaryArray.map((num, index) => (
        <div
          key={index}
          style={{
            padding: "15px",
            background:
              binaryFound && index === binaryMid
                ? "#86efac"
                : index === binaryMid
                ? "#fde68a"
                : "#bfdbfe",
            borderRadius: "8px",
            fontWeight: "bold",
          }}
        >
          {num}
        </div>
      ))}
    </div>

    <p>Low: {binaryLow} | High: {binaryHigh}</p>
    <p>Middle Index: {binaryMid === null ? "-" : binaryMid}</p>

    {binaryFound && <p>Target found at index {binaryMid}!</p>}

    {binaryNotFound && <p>Target not found. Index: -1</p>}

    <button
      onClick={handleBinaryNext}
      disabled={binaryFound || binaryNotFound || binaryLow > binaryHigh}
    >
      Next Step
    </button>

    <button
      onClick={handleBinaryReset}
      style={{ marginLeft: "10px" }}
    >
      Reset
    </button>
  </div>
)}
          {question?.id === 4 && (
            <div>
              <h2>Interactive Selection Sort</h2>
              <p>
                Click Next Step to place the next smallest element in its
                correct position.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  margin: "20px 0",
                }}
              >
                {sortArray.map((num, index) => (
                  <div
                    key={index}
                    style={{
                      padding: "15px",
                      background:
                        index < currentStep ? "#86efac" : "#bfdbfe",
                      borderRadius: "8px",
                      fontWeight: "bold",
                    }}
                  >
                    {num}
                  </div>
                ))}
              </div>

              <p>Pass: {currentStep}</p>
{sortArray.every((num, index, arr) =>
  index === 0 || arr[index - 1] <= num
) && <p>Array Sorted!</p>}
              <button
                onClick={handleNextStep}
                disabled={currentStep >= sortArray.length - 1}
              >
                Next Step
              </button>

              <button
                onClick={handleReset}
                style={{ marginLeft: "10px" }}
              >
                Reset
              </button>
            </div>
          )}
          {question?.id === 1 && (
  <div>
    <h2>Interactive Linear Search</h2>
    <p>Target ko array mein find karne ke liye Next Step click karo.</p>

    <label>
      Target:{" "}
      <input
        type="number"
        value={linearTarget}
        onChange={(e) => {
          setLinearTarget(e.target.value);
          setLinearStep(0);
          setLinearFound(false);
        }}
      />
    </label>

    <div
      style={{
        display: "flex",
        gap: "10px",
        margin: "20px 0",
      }}
    >
      {linearArray.map((num, index) => (
        <div
          key={index}
          style={{
            padding: "15px",
            background:
              linearFound && index === linearStep
                ? "#86efac"
                : index === linearStep
                ? "#fde68a"
                : "#bfdbfe",
            borderRadius: "8px",
            fontWeight: "bold",
          }}
        >
          {num}
        </div>
      ))}
    </div>

    <p>Current Index: {linearStep}</p>

    {linearFound && <p>Target found at index {linearStep}!</p>}

    {!linearFound && linearStep >= linearArray.length && (
      <p>Target not found. Index: -1</p>
    )}

    <button
      onClick={handleLinearNext}
      disabled={linearFound || linearStep >= linearArray.length}
    >
      Next Step
    </button>

    <button
      onClick={handleLinearReset}
      style={{ marginLeft: "10px" }}
    >
      Reset
    </button>
  </div>
)}
{question?.id === 3 && (
  <div>
    <h2>Interactive Bubble Sort</h2>
    <p>Click Next Step to compare and swap adjacent elements.</p>

    <div
      style={{
        display: "flex",
        gap: "10px",
        margin: "20px 0",
      }}
    >
      {bubbleArray.map((num, index) => (
        <div
          key={index}
          style={{
            padding: "15px",
            background: "#bfdbfe",
            borderRadius: "8px",
            fontWeight: "bold",
          }}
        >
          {num}
        </div>
      ))}
    </div>

    <p>Step: {bubbleStep}</p>
{bubbleArray.every((num, index, arr) =>
  index === 0 || arr[index - 1] <= num
) && <p>Array Sorted!</p>}
    <button
      onClick={handleBubbleNext}
      disabled={bubbleStep >= (bubbleArray.length - 1) * (bubbleArray.length - 1)}
    >
      Next Step
    </button>

    <button
      onClick={handleBubbleReset}
      style={{ marginLeft: "10px" }}
    >
      Reset
    </button>
  </div>
)}
          {question?.id === 5 && (
            <div>
              <h2>Interactive Insertion Sort</h2>
              <p>
                Click Next Step to insert the next element into its correct
                position.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  margin: "20px 0",
                }}
              >
                {insertionArray.map((num, index) => (
                  <div
                    key={index}
                    style={{
                      padding: "15px",
                      background:
                        index < insertionStep ? "#86efac" : "#bfdbfe",
                      borderRadius: "8px",
                      fontWeight: "bold",
                    }}
                  >
                    {num}
                  </div>
                ))}
              </div>

              <p>Step: {insertionStep}</p>
{insertionArray.every((num, index, arr) =>
  index === 0 || arr[index - 1] <= num
) && <p>Array Sorted!</p>}
              <button
                onClick={handleInsertionNext}
                disabled={insertionStep >= insertionArray.length}
              >
                Next Step
              </button>

              <button
                onClick={handleInsertionReset}
                style={{ marginLeft: "10px" }}
              >
                Reset
              </button>
            </div>
          )}
        </div>
      </div>
    )}
  </div>
);
}
export default SearchingSortingPractice;