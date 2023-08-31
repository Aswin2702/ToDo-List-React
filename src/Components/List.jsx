import { useState } from "react";
import { Item } from "./Item";

export default function List({ works, onDelWork, onToggleItems, onClearWork }) {
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
