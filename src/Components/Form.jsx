/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newWork = {
      id: Math.floor(100000 + Math.random() * 900000),
      description: description,
      done: false,
    };
    onAddItems(newWork);
    setDescription("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you interested 😍 to do?</h3>
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
