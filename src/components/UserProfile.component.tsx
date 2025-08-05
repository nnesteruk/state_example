import { useState } from "react";

type User = {
  name: string;
  age: number;
  isActive: boolean;
};

const UserProfile = () => {
  const [user, setUser] = useState<User>({
    name: "Иван",
    age: 25,
    isActive: true,
  });

  const changeName = () => {
    setUser((prevUser) => ({ ...prevUser, name: "Петр" }));
  };

  const incrementAge = () => {
    setUser((prevUser) => ({ ...prevUser, age: prevUser.age + 1 }));
  };

  const changeIsActive = () => {
    setUser((prevUser) => ({ ...prevUser, isActive: !prevUser.isActive }));
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
      <h3>Профиль пользователя</h3>
      <p>Имя: {user.name}</p>
      <p>Возраст: {user.age}</p>
      <p>Активен: {user.isActive ? "Да" : "Нет"}</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <button onClick={changeName}>Сменить имя</button>
        <button onClick={incrementAge}>Увеличить возраст</button>
        <button onClick={changeIsActive}>Переключить активность</button>
      </div>
    </div>
  );
};

export default UserProfile;
