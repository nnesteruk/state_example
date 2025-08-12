import { useEffect, useState } from "react";

const LifecycleFunc = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("componentDidMount");
    fetch("https://todo-redev.herokuapp.com/api/users")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  useEffect(() => {
    console.log(count);
    console.log("componentDidUpdate");

    return () => {
      console.log("componentWillUnmount");
    };
  }, [count]);

  return (
    <div>
      <h1>Functional Component</h1>
      <p>{count}</p>
      <button onClick={() => setCount((count) => count + 1)}>Увеличить</button>
    </div>
  );
};

export default LifecycleFunc;
