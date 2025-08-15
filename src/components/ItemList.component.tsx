import { memo, useMemo } from "react";
import type { Task } from "../App";

const ItemList = ({
  tasks,
  searchText,
}: {
  tasks: Task[];
  searchText: string;
}) => {
  const filteredTasks = useMemo(
    () =>
      tasks.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase()),
      ),
    [tasks, searchText],
  );

  console.log("render list");

  return (
    <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {filteredTasks.length === 0 && (
        <div style={{ color: "red" }}>Ничего не найдено</div>
      )}

      {filteredTasks.map((task) => (
        <li key={task.id}>
          <span>{task.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default memo(ItemList);
