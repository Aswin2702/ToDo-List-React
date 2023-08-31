import { useState } from "react";

export default function Form({ onAddItems, works }) {
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
