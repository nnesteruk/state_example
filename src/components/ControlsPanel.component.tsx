import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { ThemeContext } from "../contexts/ThemeContext";

const ControlsPanel = () => {
  const { toggleLanguage } = useContext(LanguageContext);
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ display: "flex", gap: 20 }}>
      <button onClick={toggleLanguage}>Сменить язык</button>
      <button onClick={toggleTheme}>Сменить тему</button>
    </div>
  );
};

export default ControlsPanel;
