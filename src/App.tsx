import { useState } from "react";
import "./App.css";
import Lifecycle from "./components/Lifecycle.component";
import LifecycleFunc from "./components/LifecycleFunc.component";

const App = () => {
  const [show, setShow] = useState(true);

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {show ? <Lifecycle /> : <LifecycleFunc />}
        <button onClick={() => setShow(!show)}>Unmount</button>
      </div>
    </div>
  );
};

export default App;
