import "./App.css";
import ColorButton from "./components/Color_button.component";
import Counter from "./components/Counter.component";
import Input from "./components/Input.component";
import Text from "./components/Text_with_state.component";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <Counter />
      <Text />
      <Input />
      <ColorButton />
    </div>
  );
}

export default App;
