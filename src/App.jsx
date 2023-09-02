import { useState } from "react";
import Logo from "./Components/Logo";
import List from "./Components/List";
import Form from "./Components/Form";
import Stats from "./Components/Stats";

function App() {
  const data = JSON.parse(localStorage.getItem("data"));

  const [works, setWork] = useState(data.work || []);

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

  localStorage.setItem("data", JSON.stringify({ work: works }));

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

export default App;
