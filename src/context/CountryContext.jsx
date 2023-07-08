import { createContext, useState } from "react";

const CountryContext = createContext(null);
const CountryProvider = function ({ children }) {
  const [content, setContent] = useState(null);
  const [one, setOne] = useState(null);
  const searchLog = function (e) {
    e.preventDefault();
    setContent(e.target.value);
  };

  return (
    <CountryContext.Provider value={{ content, setContent, one, setOne, searchLog }}>
      {children}
    </CountryContext.Provider>
  );
};
export { CountryProvider };
export default CountryContext;
