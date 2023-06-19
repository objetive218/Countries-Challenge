import { createContext, useState } from "react";

const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  const initialTheme = () => localStorage.getItem("root");
  const [theme, setTheme] = useState(initialTheme);
  const toggleTheme = () =>
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
    return <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
};

export {ThemeProvider}
export default ThemeContext;