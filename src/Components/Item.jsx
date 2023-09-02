/* eslint-disable react/prop-types */
export function Item({ item, onDelWork, onToggleItems }) {
  return (
    <li>
      {console.log(item.done)}
      <input
        type="checkbox"
        checked={item.done}
        onChange={() => onToggleItems(item.id)}
      />
      <span style={item.done ? { textDecoration: "line-through" } : {}}>
        {item.description}
      </span>
      <button onClick={() => onDelWork(item.id)}>❌</button>
    </li>
  );
}
