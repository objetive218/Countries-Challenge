import { createContext, useState } from "react";

const CountryContext = createContext(null);
const CountryProvider = function ({ children }) {
  const [content, setContent] = useState(null);
  const [one, setOne] = useState(null);
  return (
    <CountryContext.Provider value={{ content, setContent, one, setOne }}>
      {children}
    </CountryContext.Provider>
  );
};
export { CountryProvider };
export default CountryContext;
