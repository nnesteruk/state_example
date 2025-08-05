import { useState } from "react";

import "./App.css";
import ChildComponent from "./components/ChildComponent";
import SiblingComponent from "./components/SiblingComponent";

const ParentComponent = () => {
  const [counter, setCounter] = useState(0);

  const counterIncreaseClick = () => {
    setCounter((counter) => counter + 1);
  };

  const counterResetClick = () => {
    setCounter(0);
  };

  const counterDeсreaseClick = () => {
    setCounter((counter) => counter - 1);
  };

  const counterRandomClick = () => {
    setCounter(Math.ceil(Math.random() * 10));
  };

  return (
    <>
      <div>
        <ChildComponent name="World" counter={counter} />
        <button onClick={counterIncreaseClick}>Увеличить</button>
        <button onClick={counterResetClick}>Сбросить</button>
        <button
          onClick={counterDeсreaseClick}
          disabled={counter > 0 ? false : true}
        >
          Уменьшить
        </button>
        <button onClick={counterRandomClick}>Случайное значение</button>
        <SiblingComponent />
      </div>
    </>
  );
};

export default ParentComponent;
