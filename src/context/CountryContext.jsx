import { createContext, useState } from "react";

const CountryContext = createContext(null);
const CountryProvider = function ({ children }) {
  const [content, setContent] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault()
    const {fields} = new window.FormData(e.target)
    console.log(fields)
  }
  const searchLog = function (e) {
    e.preventDefault();
    setContent(e.target.value);
  };

  return (
    <CountryContext.Provider value={{ content, setContent, searchLog, handleSubmit }}>
      {children}
    </CountryContext.Provider>
  );
};
export { CountryProvider };
export default CountryContext;
