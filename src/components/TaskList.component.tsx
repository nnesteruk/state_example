import { useState } from "react";
import TaskItem from "./TaskItem.component";

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Купить хлеб" },
    { id: 2, title: "Погулять с собакой" },
  ]);

  const addTask = () => {
    setTasks((tasks) => [
      ...tasks,
      { id: tasks.length + 1, title: "Новая задача" },
    ]);
  };

  const removeLastTask = () => {
    setTasks((tasks) => tasks.filter((_, idx) => idx !== tasks.length - 1));
  };

  return (
    <div
      style={{
        border: "1px solid",
        padding: 20,
        borderRadius: 10,
        textAlign: "left",
      }}
    >
      <h3>Список задач</h3>
      <ul>
        {tasks.map((task) => (
          <TaskItem task={task} key={task.id} />
        ))}
      </ul>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <button onClick={addTask}>Добавить задачу</button>
        <button onClick={removeLastTask}>Удалить последнюю задачу</button>
      </div>
    </div>
  );
};

export default TaskList;
