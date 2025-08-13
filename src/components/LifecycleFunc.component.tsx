import { useEffect, useState } from "react";

const LifecycleFunc = () => {
  const [count, setCount] = useState(0);
  const [evenCount, setEvenCount] = useState(0);

  useEffect(() => {
    console.log("componentDidMount");
    fetch("https://todo-redev.herokuapp.com/api/users/1")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  useEffect(() => {
    console.log(count);
    console.log("componentDidUpdate");
    if (count % 2 === 0) {
      setEvenCount(count);
    }

    return () => {
      console.log("componentWillUnmount");
    };
  }, [count]);

  const handleClick = () => {
    setCount((count) => count + 1);
  };

  return (
    <div>
      <h1>Functional Component</h1>
      <p>{evenCount}</p>
      <button onClick={handleClick}>Увеличить</button>
    </div>
  );
};

export default LifecycleFunc;
