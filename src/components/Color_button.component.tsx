import { useState } from "react";

const ColorButton = () => {
  const [color, setColor] = useState<string>("red");

  const handleClick = () => {
    setColor((color) => (color === "red" ? "green" : "red"));
  };

  return (
    <button style={{ backgroundColor: color }} onClick={handleClick}>
      Цветная кнопка
    </button>
  );
};

export default ColorButton;
