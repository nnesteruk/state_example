import { useCallback, useState } from "react";
import "./App.css";
import CounterButton from "./components/Counter.component";
import List from "./components/ItemList.component";
import SearchInput from "./components/SearchInput.component";

export type Task = {
  id: number;
  name: string;
};

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [count, setCount] = useState(0);

  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, name: "Task 1" },
    { id: 2, name: "Task 2" },
    { id: 3, name: "Task 3" },
  ]);

  const incCount = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  const changeSearchText = useCallback((text: string) => {
    setSearchText(text);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>{count}</h1>
        <CounterButton incCount={incCount} />
      </div>
      <SearchInput
        searchText={searchText}
        changeSearchText={changeSearchText}
      />
      <List tasks={tasks} searchText={searchText} />
    </div>
  );
};

export default App;
