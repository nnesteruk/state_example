import { useRef, useState } from "react";
import "./App.css";
import List from "./components/List.component";

export type Tasks = {
  id: number;
  name: string;
};

const App = () => {
  const [tasks, setTasks] = useState<Tasks[]>([
    { id: 1, name: "Task 1" },
    { id: 2, name: "Task 2" },
    { id: 3, name: "Task 3" },
  ]);
  const [text, setText] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  const updateTask = (id: number) => {
    setTasks((tasks) =>
      tasks.map((item) =>
        item.id === id ? { ...item, name: "!!!" + item.name } : item,
      ),
    );
  };

  const focusClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    return;
  };

  const inputClick = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setTasks((tasks) => [...tasks, { id: tasks.length + 1, name: text }]);
      setText("");
    }
    return;
  };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <input
          ref={inputRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={inputClick}
        />
        <button onClick={focusClick}>focus input</button>
      </div>
      <List tasks={tasks} updateTask={updateTask} />
    </div>
  );
};

export default App;
