import { useContext } from "react";
import "./App.css";
import ProductCart from "./components/ProductCart.component";
import TaskList from "./components/TaskList.component";
import ThemeToggle from "./components/ThemeToggle.component";
import UserProfile from "./components/UserProfile.component";
import { ThemeContext, themes } from "./contexts/ThemeContex.component";

const App = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <UserProfile />
        <TaskList />
        <ProductCart />
      </div>
      <ThemeToggle
        value={theme === themes.dark}
        onChange={() =>
          setTheme(theme === themes.light ? themes.dark : themes.light)
        }
      />
    </>
  );
};

export default App;
