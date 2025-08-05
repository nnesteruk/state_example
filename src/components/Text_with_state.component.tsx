import { useState } from "react";

const Text = () => {
  const [showText, setShowText] = useState<boolean>(true);

  const handleClick = () => {
    setShowText((showText) => !showText);
  };

  return (
    <div>
      {showText && <p>Текст есть</p>}
      <button onClick={handleClick}>Show Text</button>
    </div>
  );
};

export default Text;
