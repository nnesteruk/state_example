import type { Task } from "../App";

const List = ({
  tasks,
  updateTask,
}: {
  tasks: Task[];
  updateTask: (id: number) => void;
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {tasks.map((task) => (
        <div
          key={task.id}
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <li>{task.name}</li>
          <button onClick={() => updateTask(task.id)}>Изменить</button>
        </div>
      ))}
    </div>
  );
};

export default List;
