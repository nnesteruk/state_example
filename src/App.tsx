import "./App.css";
import ProductCart from "./components/ProductCart.component";
import TaskList from "./components/TaskList.component";
import UserProfile from "./components/UserProfile.component";
import ThemeProvider from "./providers/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <UserProfile />
        <TaskList />
        <ProductCart />
      </div>
    </ThemeProvider>
  );
};

export default App;
