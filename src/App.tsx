import { useCallback, useEffect, useState } from "react";
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

  const [filterTasks, setFilterTasks] = useState(tasks);

  useEffect(() => {
    searchTask(searchText);
  }, [searchText]);

  const updateTask = (id: number) => {
    setTasks((tasks) =>
      tasks.map((item) =>
        item.id === id ? { ...item, name: "!!!" + item.name } : item,
      ),
    );
  };

  const incCount = () => {
    setCount((count) => count + 1);
  };

  const changeSearchText = useCallback((text: string) => {
    setSearchText(text);
  }, []);
  const searchTask = (text: string) => {
    if (searchText.trim() !== "") {
      setFilterTasks((tasks) =>
        tasks.filter((item) =>
          item.name.toLowerCase().includes(text.toLowerCase()),
        ),
      );
    } else {
      setFilterTasks(tasks);
    }
  };

  return (
    <div>
      <h1>{count}</h1>
      <CounterButton incCount={incCount} />
      <SearchInput
        searchText={searchText}
        changeSearchText={changeSearchText}
      />
      <List tasks={filterTasks} updateTask={updateTask} />
    </div>
  );
};

export default App;
