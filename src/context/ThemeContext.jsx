import { createContext, useLayoutEffect, useState } from "react";

const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  const initialTheme = () => localStorage.getItem("countries_theme");
  
  const [theme, setTheme] = useState(initialTheme);
  const toggleTheme = () =>
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
    useLayoutEffect(()=>{
      localStorage.setItem("countries_theme", theme)
      if(theme === "light"){
        document.documentElement.classList.remove("dark-mode")
        document.documentElement.classList.add("light-mode")
      }else{
        document.documentElement.classList.remove("light-mode")
        document.documentElement.classList.add("dark-mode")
      }
    },[theme]);

    return <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
};

export {ThemeProvider}
export default ThemeContext;