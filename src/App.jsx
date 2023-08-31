import { useState } from "react";
import Logo from "./Components/Logo";
import List from "./Components/List";
import Form from "./Components/Form";
import Stats from "./Components/Stats";

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

export default App;
