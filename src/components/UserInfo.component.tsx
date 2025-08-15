import { memo } from "react";
import type { User } from "./UserProfile.component";

const UserInfo = ({ user }: { user: User }) => {
  return (
    <>
      <h3>Профиль пользователя</h3>
      <p>Имя: {user.name}</p>
      <p>Возраст: {user.age}</p>
      <p>Активен: {user.isActive ? "Да" : "Нет"}</p>
    </>
  );
};

export default memo(UserInfo, (prevProps, nextProps) => {
  return prevProps.user.name === nextProps.user.name;
});
