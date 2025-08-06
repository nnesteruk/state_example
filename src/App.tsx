import "./App.css";
import ProductCart from "./components/ProductCart.component";
import TaskList from "./components/TaskList.component";
import UserProfile from "./components/UserProfile.component";

const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <UserProfile />
      <TaskList />
      <ProductCart />
    </div>
  );
};

export default App;
