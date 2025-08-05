import { useState } from "react";

const SiblingComponent = () => {
  const [text, setText] = useState("");

  const handleClick = () => {
    setText("REDEV");
  };

  return (
    <div>
      <p>
        Текущий текст: <span style={{ color: "green" }}>{text}</span>
      </p>
      <button onClick={handleClick}>Изменить текст</button>
    </div>
  );
};

export default SiblingComponent;
