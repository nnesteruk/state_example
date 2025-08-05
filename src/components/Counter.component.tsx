import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const handleClick = (): void => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>Счётчик: {count}</h1>
      <button onClick={handleClick}>Увеличить счётчик</button>
    </div>
  );
};

export default Counter;
