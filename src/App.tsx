import { useCallback, useState } from "react";
import "./App.css";
import CounterButton from "./components/Counter.component";
import ItemList from "./components/ItemList.component";
import SearchInput from "./components/SearchInput.component";
import withRenderTracker from "./hoc/WithRenderTracker";

export type Task = {
  id: number;
  name: string;
};

const ItemListWithRenderTracker = withRenderTracker(ItemList);
const SearchInputWithRenderTracker = withRenderTracker(SearchInput);
const CounterButtonWithRenderTracker = withRenderTracker(CounterButton);

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
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>{count}</h1>
        <CounterButtonWithRenderTracker incCount={incCount} />
      </div>
      <SearchInputWithRenderTracker
        searchText={searchText}
        changeSearchText={changeSearchText}
      />
      <ItemListWithRenderTracker tasks={tasks} searchText={searchText} />
    </div>
  );
};

export default App;
