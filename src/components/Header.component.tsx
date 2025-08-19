import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { translations } from "../locales";

const Header = () => {
  const { language } = useContext(LanguageContext);

  return <h1 className="header">{translations[language].welcome}</h1>;
};

export default Header;
