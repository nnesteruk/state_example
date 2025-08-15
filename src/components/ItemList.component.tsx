import { memo, useEffect, useState } from "react";
import type { Task } from "../App";

const ItemList = ({
  tasks,
  searchText,
}: {
  tasks: Task[];
  searchText: string;
}) => {
  const [filterTasks, setFilterTasks] = useState<Task[]>(tasks);

  useEffect(() => {
    searchTask(searchText);
  }, [searchText]);

  const updateTask = (id: number) => {
    setFilterTasks((tasks) =>
      tasks.map((item) =>
        item.id === id ? { ...item, name: "!!!" + item.name } : item,
      ),
    );
  };

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

  console.log("render list");

  return (
    <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {filterTasks.length === 0 && (
        <div style={{ color: "red" }}>Ничего не найдено</div>
      )}

      {filterTasks.map((task) => (
        <li key={task.id}>
          <span>{task.name}</span>
          <button
            onClick={() => updateTask(task.id)}
            style={{ marginLeft: 10 }}
          >
            Изменить
          </button>
        </li>
      ))}
    </ul>
  );
};

export default memo(ItemList);
