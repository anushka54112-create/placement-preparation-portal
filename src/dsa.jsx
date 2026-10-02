import "./dsa.css";

function DSA() {
  const openArrays = () => {
    window.location.href = "/arrays";
  };

  const openStrings = () => {
    window.location.href = "/strings";
  };

  const openLinkedList = () => {
    window.location.href = "/linked-list";
  };

  const openStackQueue = () => {
    window.location.href = "/stack-queue";
  };

  return (
    <div className="dsa-page">
      <h1>DSA & Coding</h1>

      <div className="dsa-card">
        <h2>Arrays</h2>
        <button onClick={openArrays}>Practice</button>
      </div>

      <div className="dsa-card">
        <h2>Strings</h2>
        <button onClick={openStrings}>Practice</button>
      </div>

      <div className="dsa-card">
        <h2>Linked List</h2>
        <button onClick={openLinkedList}>Practice</button>
      </div>

      <div className="dsa-card">
        <h2>Stack & Queue</h2>
        <button onClick={openStackQueue}>Practice</button>
      </div>

      <div className="dsa-card">
        <h2>Searching & Sorting</h2>
        <button onClick={() => (window.location.href = "/searching-sorting")}>
  Practice
</button>
      </div>
    </div>
  );
}

export default DSA;