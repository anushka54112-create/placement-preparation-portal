import "./linkedList.css";

function LinkedList() {
  const openQuestion1 = () => {
    window.location.href = "/linked-list-question";
  };

  const openQuestion2 = () => {
    window.location.href = "/linked-list-traverse";
  };

  const openQuestion3 = () => {
    window.location.href = "/linked-list-length";
  };

  const openQuestion4 = () => {
    window.location.href = "/linked-list-search";
  };

  const openQuestion5 = () => {
    window.location.href = "/linked-list-reverse";
  };

  return (
    <div className="linked-list-page">

      <div className="linked-list-header">
        <h1>Linked List</h1>
      </div>

      <div className="linked-list-container">

        <div className="linked-list-question">
          <h3>Question 1</h3>
          <p>Insert a node at the beginning of a linked list.</p>
          <button type="button" onClick={openQuestion1}>
            Practice
          </button>
        </div>

        <div className="linked-list-question">
          <h3>Question 2</h3>
          <p>Traverse and print all elements of a linked list.</p>
          <button type="button" onClick={openQuestion2}>
            Practice
          </button>
        </div>

        <div className="linked-list-question">
          <h3>Question 3</h3>
          <p>Find the length of a linked list.</p>
          <button type="button" onClick={openQuestion3}>
            Practice
          </button>
        </div>

        <div className="linked-list-question">
          <h3>Question 4</h3>
          <p>Search for an element in a linked list.</p>
          <button type="button" onClick={openQuestion4}>
            Practice
          </button>
        </div>

        <div className="linked-list-question">
          <h3>Question 5</h3>
          <p>Reverse a linked list.</p>
          <button type="button" onClick={openQuestion5}>
            Practice
          </button>
        </div>

      </div>

    </div>
  );
}

export default LinkedList;