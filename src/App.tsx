import "./App.css";
import ControlsPanel from "./components/ControlsPanel.component";
import Header from "./components/Header.component";
import UserProfile from "./components/UserProfile.component";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 20,
      }}
    >
      <Header />
      <UserProfile />
      <ControlsPanel />
    </div>
  );
};

export default App;
