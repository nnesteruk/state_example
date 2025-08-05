import React, { useState } from "react";

const Input = () => {
  const [text, setText] = useState<string>("пусто");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <>
      <input value={text} onChange={handleChange} placeholder="Введите текст" />
      <p>
        Введённый текст: <span style={{ color: "red" }}>{text}</span>
      </p>
    </>
  );
};

export default Input;
