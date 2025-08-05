const ChildComponent = ({
  name,
  counter,
}: {
  name: string;
  counter: number;
}) => {
  return (
    <h1>
      Hello, {name}! Текущий счетчик: {counter}
    </h1>
  );
};

export default ChildComponent;
