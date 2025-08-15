import { memo } from "react";

const CounterButton = ({ incCount }: { incCount: () => void }) => {
  console.log("render CounterButton");

  return <button onClick={incCount}>Увеличить</button>;
};

export default memo(CounterButton);
