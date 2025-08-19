import { memo } from "react";

const TaskItem = ({ task }: { task: { id: number; title: string } }) => {
  return <li>{task.title}</li>;
};

export default memo(TaskItem, (prevProps, nextProps) => {
  return prevProps.task.id === nextProps.task.id;
});
