import { useState } from "react";
import Logo from "./Components/Logo";

function App() {
  const [works, setWork] = useState([]);

  function handleAddWork(work) {
    setWork((works) => [...works, work]);
  }

  function handleDelWork(id) {
    setWork((works) => works.filter((work) => work.id != id));
  }

  function handleClearWork() {
    setWork([]);
  }

  function handleToggleWork(id) {
    setWork((works) =>
      works.map((item) =>
        item.id == id ? { ...item, done: !item.done } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddWork} works={works} />
      <List
        works={works}
        onDelWork={handleDelWork}
        onToggleItems={handleToggleWork}
        onClearWork={handleClearWork}
      />
      <Stats works={works} />
    </div>
  );
}

function List({ works, onDelWork, onToggleItems, onClearWork }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") {
    sortedItems = works;
  }
  if (sortBy === "description") {
    sortedItems = works
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "undone") {
    sortedItems = works.slice().sort((a, b) => Number(a.done) - Number(b.done));
  }

  return (
    <div className="list">
      <ul>
        <li className="sample">
          <span>Add the work to the list by entering it above.☝️</span>
        </li>
        <li className="sample">
          <span>Once the work is completed, you can tick the checkbox. ✅</span>
        </li>
        <li className="sample">
          <span>You may delete the work if it is no longer needed. ❌</span>
        </li>
        {sortedItems.map((item) => (
          <Item
            onToggleItems={onToggleItems}
            onDelWork={onDelWork}
            item={item}
            key={item.id}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input</option>
          <option value="description">Sort by description</option>
          <option value="undone">Sort by not done</option>
        </select>
        <button onClick={() => onClearWork()}>Clear list</button>
      </div>
    </div>
  );
}

function Item({ item, onDelWork, onToggleItems }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.done}
        onChange={() => onToggleItems(item.id)}
      />
      <span style={item.done ? { textDecoration: "line-through" } : {}}>
        {item.description}
      </span>
      <button onClick={() => onDelWork(item.id)}>❌</button>
    </li>
  );
}

function Form({ onAddItems, works }) {
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newWork = {
      id: works.length + 1,
      description: description,
      done: false,
    };
    onAddItems(newWork);
    setDescription("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you intrested 😍 to do?</h3>
      <input
        type="text"
        placeholder="Work to be done..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}

function Stats({ works }) {
  if (!works.length) {
    return (
      <p className="stats">
        <em>Start adding your work to begin the list 🚀</em>
      </p>
    );
  }
  const numWorks = works.length;
  const undoneWork = works.filter((work) => !work.done).length;
  const doneWork = works.filter((work) => work.done).length;

  const percentage = Math.round((doneWork / numWorks) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You have got everything done🎉🎉🎉"
          : `✍️You have ${numWorks} works on your list, and your pending works are
        ${undoneWork}. Completed: (${percentage}%)👍`}
      </em>
    </footer>
  );
}

export default App;
