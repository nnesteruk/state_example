const CounterButton = ({ incCount }: { incCount: () => void }) => {
  return <button onClick={incCount}>Увеличить</button>;
};

export default CounterButton;
