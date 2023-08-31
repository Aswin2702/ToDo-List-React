export function Item({ item, onDelWork, onToggleItems }) {
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
